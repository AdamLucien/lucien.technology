/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");
const { PrismaClient } = require("@prisma/client");

const sqlitePath =
  process.env.SQLITE_DB_PATH || path.join(process.cwd(), "dev.db");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set for Postgres import.");
}

if (!process.env.DATABASE_URL.startsWith("postgresql://")) {
  throw new Error("DATABASE_URL must use a PostgreSQL connection string.");
}

if (!fs.existsSync(sqlitePath)) {
  throw new Error(`SQLite database not found at ${sqlitePath}`);
}

const sqlite = new Database(sqlitePath, { readonly: true });
const prisma = new PrismaClient();

function tableExists(tableName) {
  const result = sqlite
    .prepare("SELECT name FROM sqlite_master WHERE type = 'table' AND name = ?")
    .get(tableName);
  return Boolean(result);
}

function parseJson(value) {
  if (value === null || value === undefined) {
    return value;
  }
  if (typeof value !== "string") {
    return value;
  }
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function toDate(value) {
  if (!value) {
    return value;
  }
  return value instanceof Date ? value : new Date(value);
}

function toBoolean(value) {
  if (value === null || value === undefined) {
    return value;
  }
  return Boolean(value);
}

function mapRow(row, { dateFields = [], jsonFields = [], booleanFields = [] } = {}) {
  const data = { ...row };
  for (const field of dateFields) {
    if (field in data) {
      data[field] = toDate(data[field]);
    }
  }
  for (const field of jsonFields) {
    if (field in data) {
      data[field] = parseJson(data[field]);
    }
  }
  for (const field of booleanFields) {
    if (field in data) {
      data[field] = toBoolean(data[field]);
    }
  }
  return data;
}

async function upsertRows(model, rows, config = {}) {
  for (const row of rows) {
    const data = mapRow(row, config);
    const where = config.where ? config.where(data) : { id: data.id };
    await prisma[model].upsert({
      where,
      create: data,
      update: data,
    });
  }
}

async function importTable(tableName, model, config = {}) {
  if (!tableExists(tableName)) {
    console.log(`Skipping ${tableName} (table not found in sqlite).`);
    return;
  }
  const rows = sqlite.prepare(`SELECT * FROM "${tableName}"`).all();
  if (rows.length === 0) {
    console.log(`Skipping ${tableName} (no rows).`);
    return;
  }
  console.log(`Importing ${rows.length} rows from ${tableName}...`);
  if (config.createMany) {
    const data = rows.map((row) => mapRow(row, config));
    await prisma[model].createMany({ data, skipDuplicates: true });
    return;
  }
  await upsertRows(model, rows, config);
}

async function main() {
  await importTable("Org", "org", { dateFields: ["createdAt"] });
  await importTable("User", "user", {
    dateFields: ["createdAt", "lastLoginAt", "emailVerified", "onboardedAt"],
    jsonFields: ["onboardingData"],
  });
  await importTable("Account", "account");
  await importTable("Session", "session", { dateFields: ["expires"] });
  await importTable("VerificationToken", "verificationToken", {
    dateFields: ["expires"],
    createMany: true,
  });
  await importTable("Service", "service", {
    dateFields: ["createdAt", "updatedAt"],
  });
  await importTable("Customer", "customer", {
    dateFields: ["createdAt", "updatedAt"],
  });
  await importTable("Inquiry", "inquiry", {
    dateFields: ["createdAt"],
    booleanFields: ["consent"],
  });
  await importTable("Engagement", "engagement", {
    dateFields: ["startDate", "targetDate", "createdAt", "updatedAt"],
  });
  await importTable("Document", "document", {
    dateFields: ["createdAt", "archivedAt"],
  });
  await importTable("Milestone", "milestone", {
    dateFields: ["dueDate", "createdAt", "updatedAt"],
  });
  await importTable("Deliverable", "deliverable", {
    dateFields: ["approvedAt", "createdAt", "updatedAt"],
  });
  await importTable("ScopeProposal", "scopeProposal", {
    dateFields: ["sentAt", "approvedAt", "rejectedAt", "createdAt", "updatedAt"],
    jsonFields: ["deliverablesJson"],
  });
  await importTable("ChangeRequest", "changeRequest", {
    dateFields: ["requestedAt", "decidedAt", "implementedAt", "createdAt", "updatedAt"],
  });
  await importTable("Invoice", "invoice", {
    dateFields: ["issueDate", "dueDate", "paidAt", "createdAt", "updatedAt"],
  });
  await importTable("Notification", "notification", {
    dateFields: ["readAt", "createdAt"],
  });
  await importTable("AuditEvent", "auditEvent", {
    dateFields: ["createdAt"],
  });
  await importTable("EngagementMember", "engagementMember", {
    dateFields: ["startDate", "endDate", "createdAt", "updatedAt"],
    booleanFields: ["clientVisible"],
  });
  await importTable("TimeEntry", "timeEntry", {
    dateFields: ["entryDate", "createdAt", "approvedAt"],
  });
  await importTable("DeliveryTask", "deliveryTask", {
    dateFields: ["dueDate", "createdAt", "updatedAt"],
  });
  await importTable("EngagementTerm", "engagementTerm", {
    dateFields: ["effectiveDate", "endDate", "createdAt", "updatedAt"],
  });
  await importTable("EditEvent", "editEvent", {
    dateFields: ["createdAt", "updatedAt"],
    jsonFields: ["diffJson"],
  });
  await importTable("Order", "order", {
    dateFields: ["createdAt", "updatedAt"],
  });
  await importTable("Payment", "payment", {
    dateFields: ["createdAt"],
  });
}

main()
  .then(() => {
    console.log("SQLite import complete.");
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    sqlite.close();
    await prisma.$disconnect();
  });
