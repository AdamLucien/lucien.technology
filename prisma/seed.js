/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");
const { createHash } = require("crypto");
const { promises: fs } = require("fs");
const path = require("path");

const prisma = new PrismaClient();

const services = [
  {
    slug: "system-architecture-assessment",
    sku: "LUC-SEA-001",
    title: "System & Architecture Assessment",
    pricingModel: "scope",
    priceFrom: 28000,
    currency: "EUR",
    depositAmountCents: null,
    deliveryWindow: "2-3 weeks",
  },
  {
    slug: "target-architecture-roadmap",
    sku: "LUC-TAR-002",
    title: "Target Architecture & Transformation Roadmap",
    pricingModel: "scope",
    priceFrom: 65000,
    currency: "EUR",
    depositAmountCents: null,
    deliveryWindow: "6-12 weeks",
  },
  {
    slug: "project-takeover-stabilization",
    sku: "LUC-PTS-003",
    title: "Project Takeover & Stabilization",
    pricingModel: "scope",
    priceFrom: 45000,
    currency: "EUR",
    depositAmountCents: null,
    deliveryWindow: "3-6 weeks",
  },
  {
    slug: "tailored-software-mvp",
    sku: "LUC-TSM-004",
    title: "Tailored Software MVP (Internal Systems)",
    pricingModel: "scope",
    priceFrom: 140000,
    currency: "EUR",
    depositAmountCents: null,
    deliveryWindow: "12-24 weeks",
  },
  {
    slug: "data-ai-decision-support-pilot",
    sku: "LUC-DSP-005",
    title: "Data & AI Decision Support Pilot",
    pricingModel: "scope",
    priceFrom: 80000,
    currency: "EUR",
    depositAmountCents: null,
    deliveryWindow: "8-14 weeks",
  },
  {
    slug: "production-supply-chain-optimization",
    sku: "LUC-PSO-006",
    title: "Production & Supply Chain Optimization",
    pricingModel: "scope",
    priceFrom: 55000,
    currency: "EUR",
    depositAmountCents: null,
    deliveryWindow: "6-10 weeks",
  },
  {
    slug: "secure-real-time-data-architecture",
    sku: "LUC-SRD-007",
    title: "Secure Real-Time Data Architecture",
    pricingModel: "scope",
    priceFrom: 80000,
    currency: "EUR",
    depositAmountCents: null,
    deliveryWindow: "6-12 weeks",
  },
  {
    slug: "technical-leadership-retainer",
    sku: "LUC-TLR-008",
    title: "Ongoing Technical Leadership & Assurance",
    pricingModel: "scope",
    priceFrom: 9000,
    currency: "EUR",
    depositAmountCents: null,
    deliveryWindow: "ongoing",
  },
  {
    slug: "procurement-ready-technology-review",
    sku: "LUC-PTR-009",
    title: "Procurement-Ready Technology Review",
    pricingModel: "scope",
    priceFrom: 35000,
    currency: "EUR",
    depositAmountCents: null,
    deliveryWindow: "2-4 weeks",
  },
];

async function main() {
  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }

  const internalOrg = await prisma.org.upsert({
    where: { name: "Lucien Internal" },
    update: { domain: "lucien.technology" },
    create: {
      name: "Lucien Internal",
      domain: "lucien.technology",
    },
  });

  const clientOrg = await prisma.org.upsert({
    where: { name: "Civic Systems" },
    update: { domain: "civic.example" },
    create: {
      name: "Civic Systems",
      domain: "civic.example",
    },
  });

  const adminEmail = (process.env.ADMIN_EMAIL || "admin@lucien.technology").toLowerCase();

  const adminUser = await prisma.user.upsert({
    where: { email: adminEmail },
    update: { role: "lucien_admin", orgId: internalOrg.id },
    create: {
      email: adminEmail,
      name: "Lucien Admin",
      role: "lucien_admin",
      orgId: internalOrg.id,
      lastLoginAt: new Date(),
    },
  });

  let clientUser;

  if (process.env.NODE_ENV !== "production") {
    await prisma.user.upsert({
      where: { email: "ops@lucien.technology" },
      update: { role: "lucien_operator", orgId: internalOrg.id },
      create: {
        email: "ops@lucien.technology",
        name: "Lucien Operator",
        role: "lucien_operator",
        orgId: internalOrg.id,
        lastLoginAt: new Date(),
      },
    });

    await prisma.user.upsert({
      where: { email: "admin@civic.example" },
      update: { role: "org_admin", orgId: clientOrg.id },
      create: {
        email: "admin@civic.example",
        name: "Client Admin",
        role: "org_admin",
        orgId: clientOrg.id,
        lastLoginAt: new Date(),
      },
    });

    clientUser = await prisma.user.upsert({
      where: { email: "user@civic.example" },
      update: {
        role: "org_user",
        orgId: clientOrg.id,
        onboardedAt: new Date(),
        onboardingData: {
          preferredChannel: "Secure email",
          primaryEngagementId: null,
          ndaStatus: "Pending",
          accessPreference: "Portal",
          dataConstraints: "",
          completedAt: new Date().toISOString(),
        },
      },
      create: {
        email: "user@civic.example",
        name: "Client User",
        role: "org_user",
        orgId: clientOrg.id,
        lastLoginAt: new Date(),
        onboardedAt: new Date(),
        onboardingData: {
          preferredChannel: "Secure email",
          primaryEngagementId: null,
          ndaStatus: "Pending",
          accessPreference: "Portal",
          dataConstraints: "",
          completedAt: new Date().toISOString(),
        },
      },
    });

    const existingNotification = await prisma.notification.findFirst({
      where: { recipientUserId: clientUser.id },
    });

    if (!existingNotification) {
      await prisma.notification.createMany({
        data: [
          {
            orgId: clientOrg.id,
            recipientUserId: clientUser.id,
            type: "scope_sent",
            title: "Scope proposal sent",
            body: "A scope proposal is ready for your review.",
          },
          {
            orgId: internalOrg.id,
            recipientUserId: adminUser.id,
            type: "inquiry_new",
            title: "New scope request",
            body: "A new inquiry arrived from Civic Systems.",
          },
        ],
      });
    }
  }

  const customerA = await prisma.customer.upsert({
    where: { email: "alex@example.com" },
    update: {},
    create: {
      name: "Alex Quinn",
      email: "alex@example.com",
      organization: "Northern Grid",
      role: "Director of Operations",
    },
  });

  const customerB = await prisma.customer.upsert({
    where: { email: "morgan@example.com" },
    update: {},
    create: {
      name: "Morgan Lee",
      email: "morgan@example.com",
      organization: "Civic Systems",
      role: "Program Lead",
    },
  });

  const serviceAssessment = await prisma.service.findUnique({
    where: { slug: "system-architecture-assessment" },
  });
  const serviceRoadmap = await prisma.service.findUnique({
    where: { slug: "target-architecture-roadmap" },
  });

  if (serviceAssessment && serviceRoadmap) {
    const orderOne = await prisma.order.create({
      data: {
        serviceId: serviceAssessment.id,
        customerId: customerA.id,
        status: "paid",
        purchaseType: "deposit",
        amountCents: 250000,
        currency: "EUR",
        stripeSessionId: "seed_session_paid",
        stripePaymentIntentId: "seed_intent_paid",
      },
    });

    await prisma.payment.upsert({
      where: { stripeEventId: "seed_event_paid" },
      update: {
        orderId: orderOne.id,
        status: "paid",
        provider: "stripe",
        amountCents: 250000,
        currency: "EUR",
        stripeSessionId: "seed_session_paid",
        stripePaymentIntentId: "seed_intent_paid",
      },
      create: {
        orderId: orderOne.id,
        status: "paid",
        provider: "stripe",
        amountCents: 250000,
        currency: "EUR",
        stripeSessionId: "seed_session_paid",
        stripePaymentIntentId: "seed_intent_paid",
        stripeEventId: "seed_event_paid",
      },
    });

    const orderTwo = await prisma.order.create({
      data: {
        serviceId: serviceRoadmap.id,
        customerId: customerB.id,
        status: "pending",
        purchaseType: "deposit",
        amountCents: 250000,
        currency: "EUR",
        stripeSessionId: "seed_session_pending",
      },
    });

    await prisma.payment.upsert({
      where: { stripeEventId: "seed_event_pending" },
      update: {
        orderId: orderTwo.id,
        status: "pending",
        provider: "stripe",
        amountCents: 250000,
        currency: "EUR",
        stripeSessionId: "seed_session_pending",
      },
      create: {
        orderId: orderTwo.id,
        status: "pending",
        provider: "stripe",
        amountCents: 250000,
        currency: "EUR",
        stripeSessionId: "seed_session_pending",
        stripeEventId: "seed_event_pending",
      },
    });

    await prisma.order.create({
      data: {
        serviceId: serviceAssessment.id,
        customerId: customerA.id,
        status: "failed",
        purchaseType: "deposit",
        amountCents: 250000,
        currency: "EUR",
        stripeSessionId: "seed_session_failed",
      },
    });
  }

  const emailHashA = createHash("sha256")
    .update("alex@example.com")
    .digest("hex");
  const emailHashB = createHash("sha256")
    .update("morgan@example.com")
    .digest("hex");

  await prisma.inquiry.createMany({
    data: [
      {
        orgId: clientOrg.id,
        organization: "Civic Systems",
        role: "Program Lead",
        contactEmail: "morgan@example.com",
        emailHash: emailHashB,
        serviceSlug: "target-architecture-roadmap",
        timeframe: "1-3 months",
        note: "Roadmap needed ahead of procurement cycle.",
        mode: "remote",
        status: "new",
        consent: true,
      },
      {
        orgId: internalOrg.id,
        organization: "Lucien Internal",
        role: "Delivery Lead",
        contactEmail: "ops@lucien.technology",
        emailHash: emailHashA,
        serviceSlug: "system-architecture-assessment",
        timeframe: "Immediate",
        note: "Internal assessment for demo data.",
        mode: "hybrid",
        status: "triaged",
        consent: true,
      },
    ],
  });

  const existingEngagement = await prisma.engagement.findFirst({
    where: {
      orgId: clientOrg.id,
      title: "System & Architecture Assessment",
    },
  });

  const engagement =
    existingEngagement ??
    (await prisma.engagement.create({
      data: {
        orgId: clientOrg.id,
        title: "System & Architecture Assessment",
        serviceSlug: "system-architecture-assessment",
        stage: "delivery",
        status: "on_track",
        procurementRef: "PO-2026-0412",
        purchaseOrderRef: "CIVIC-PO-4481",
        costCenter: "OPS-SEC-42",
      },
    }));

  await prisma.engagement.update({
    where: { id: engagement.id },
    data: {
      procurementRef: "PO-2026-0412",
      purchaseOrderRef: "CIVIC-PO-4481",
      costCenter: "OPS-SEC-42",
    },
  });

  if (process.env.NODE_ENV !== "production") {
    const existingMilestones = await prisma.milestone.findMany({
      where: { engagementId: engagement.id },
    });
    if (existingMilestones.length === 0) {
      await prisma.milestone.createMany({
        data: [
          {
            orgId: clientOrg.id,
            engagementId: engagement.id,
            title: "Scope pack review",
            dueDate: new Date(),
            status: "in_progress",
            order: 0,
          },
          {
            orgId: clientOrg.id,
            engagementId: engagement.id,
            title: "Delivery readiness gate",
            dueDate: new Date(),
            status: "planned",
            order: 1,
          },
        ],
      });
    }

    if (clientUser) {
      const existingChangeRequests = await prisma.changeRequest.findMany({
        where: { engagementId: engagement.id },
      });
      if (existingChangeRequests.length === 0) {
        await prisma.changeRequest.createMany({
          data: [
            {
              orgId: clientOrg.id,
              engagementId: engagement.id,
              createdByUserId: clientUser.id,
              title: "Add OT telemetry validation",
              description:
                "Request to validate OT telemetry coverage for critical assets before delivery sign-off.",
              impact: "scope",
              severity: "med",
              status: "proposed",
              requestedAt: new Date(),
            },
            {
              orgId: clientOrg.id,
              engagementId: engagement.id,
              createdByUserId: adminUser.id,
              title: "Extend integration cutover window",
              description:
                "Shift integration cutover to align with logistics freeze period.",
              impact: "schedule",
              severity: "low",
              status: "needs_info",
              requestedAt: new Date(),
            },
          ],
        });
      }
    }

    const existingInvoice = await prisma.invoice.findFirst({
      where: { engagementId: engagement.id },
    });
    if (!existingInvoice) {
      await prisma.invoice.create({
        data: {
          orgId: clientOrg.id,
          engagementId: engagement.id,
          invoiceNumber: "INV-2026-001",
          issueDate: new Date(),
          dueDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
          referencePO: "CIVIC-PO-4481",
          currency: "EUR",
          amountEUR: 15000,
        },
      });
    }

    const existingDeliverables = await prisma.deliverable.findMany({
      where: { engagementId: engagement.id },
    });
    if (existingDeliverables.length === 0) {
      await prisma.deliverable.createMany({
        data: [
          {
            orgId: clientOrg.id,
            engagementId: engagement.id,
            title: "Architecture baseline brief",
            status: "review",
          },
          {
            orgId: clientOrg.id,
            engagementId: engagement.id,
            title: "Risk and dependency register",
            status: "draft",
          },
        ],
      });
    }

    const existingMembers = await prisma.engagementMember.findMany({
      where: { engagementId: engagement.id },
    });
    if (existingMembers.length === 0) {
      await prisma.engagementMember.createMany({
        data: [
          {
            orgId: clientOrg.id,
            engagementId: engagement.id,
            userId: adminUser.id,
            roleTitle: "Engagement lead",
            allocationHours: 20,
          },
          ...(clientUser
            ? [
                {
                  orgId: clientOrg.id,
                  engagementId: engagement.id,
                  userId: clientUser.id,
                  roleTitle: "Client sponsor",
                  allocationHours: 6,
                },
              ]
            : []),
        ],
      });
    }

    const existingTasks = await prisma.deliveryTask.findMany({
      where: { engagementId: engagement.id },
    });
    if (existingTasks.length === 0) {
      await prisma.deliveryTask.createMany({
        data: [
          {
            orgId: clientOrg.id,
            engagementId: engagement.id,
            title: "Confirm access approvals and constraints",
            status: "in_progress",
            ownerId: adminUser.id,
          },
          {
            orgId: clientOrg.id,
            engagementId: engagement.id,
            title: "Review baseline architecture brief",
            status: "todo",
            ownerId: clientUser?.id ?? null,
          },
        ],
      });
    }

    const existingEntries = await prisma.timeEntry.findMany({
      where: { engagementId: engagement.id },
    });
    if (existingEntries.length === 0) {
      await prisma.timeEntry.createMany({
        data: [
          {
            orgId: clientOrg.id,
            engagementId: engagement.id,
            userId: adminUser.id,
            entryDate: new Date(),
            hours: 6.5,
            roleTitle: "Engagement lead",
            note: "Scope alignment and control boundary review.",
          },
        ],
      });
    }

    const existingTerms = await prisma.engagementTerm.findMany({
      where: { engagementId: engagement.id },
    });
    if (existingTerms.length === 0) {
      await prisma.engagementTerm.createMany({
        data: [
          {
            orgId: clientOrg.id,
            engagementId: engagement.id,
            title: "Scope terms",
            summary:
              "Delivery constrained to agreed interfaces, acceptance criteria, and security posture.",
            status: "active",
          },
          {
            orgId: clientOrg.id,
            engagementId: engagement.id,
            title: "Engagement cadence",
            summary:
              "Weekly checkpoints with monthly executive readouts and audit-ready notes.",
            status: "draft",
          },
        ],
      });
    }

    const samplePath = path.join(
      process.cwd(),
      ".local-storage",
      clientOrg.id,
      "sample-deliverable.txt",
    );
    await fs.mkdir(path.dirname(samplePath), { recursive: true });
    const sampleContent = Buffer.from(
      "Sample deliverable for portal testing.",
      "utf8",
    );
    await fs.writeFile(samplePath, sampleContent);

    const deliverableKey = `${clientOrg.id}/sample-deliverable.txt`;
    const existingDeliverableDoc = await prisma.document.findFirst({
      where: { storageKey: deliverableKey },
    });
    if (!existingDeliverableDoc) {
      await prisma.document.create({
        data: {
          orgId: clientOrg.id,
          engagementId: engagement.id,
          category: "deliverable",
          name: "Sample_Deliverable.txt",
          mimeType: "text/plain",
          size: sampleContent.length,
          checksum: createHash("sha256").update(sampleContent).digest("hex"),
          storageKey: deliverableKey,
          uploadedByUserId: null,
        },
      });
    }

    const clientInputPath = path.join(
      process.cwd(),
      ".local-storage",
      clientOrg.id,
      "client-input.txt",
    );
    await fs.writeFile(clientInputPath, Buffer.from("Client input sample.", "utf8"));

    const clientInputKey = `${clientOrg.id}/client-input.txt`;
    const existingClientInput = await prisma.document.findFirst({
      where: { storageKey: clientInputKey },
    });
    if (!existingClientInput) {
      await prisma.document.create({
        data: {
          orgId: clientOrg.id,
          engagementId: engagement.id,
          category: "client_input",
          name: "Client_Input.txt",
          mimeType: "text/plain",
          size: 21,
          checksum: createHash("sha256").update("Client input sample.").digest("hex"),
          storageKey: clientInputKey,
          uploadedByUserId: null,
        },
      });
    }

    const archivedDoc = await prisma.document.findFirst({
      where: { orgId: clientOrg.id, archivedAt: { not: null } },
    });
    if (!archivedDoc) {
      const candidate = await prisma.document.findFirst({
        where: { orgId: clientOrg.id },
        orderBy: { createdAt: "desc" },
      });
      if (candidate) {
        await prisma.document.update({
          where: { id: candidate.id },
          data: {
            archivedAt: new Date(),
            archivedByUserId: adminUser.id,
            archiveReason: "Superseded by a newer version.",
          },
        });
      }
    }

    const scopeExisting = await prisma.scopeProposal.findFirst({
      where: { orgId: clientOrg.id },
    });
    const inquiryForScope = await prisma.inquiry.findFirst({
      where: { orgId: clientOrg.id },
      orderBy: { createdAt: "desc" },
    });

    if (!scopeExisting) {
      await prisma.scopeProposal.create({
        data: {
          orgId: clientOrg.id,
          inquiryId: inquiryForScope?.id ?? null,
          title: "Assessment scope proposal",
          fixedPriceEUR: 12000,
          scopeSummary:
            "Paid scope to define constraints, acceptance criteria, and delivery options.",
          deliverablesJson: [
            "Scope narrative and acceptance criteria",
            "Risk and dependency register",
            "Delivery options with assumptions",
          ],
          status: "sent",
          sentAt: new Date(),
        },
      });
    }

    const existingEditEvent = await prisma.editEvent.findFirst({
      where: { orgId: clientOrg.id },
    });
    if (!existingEditEvent) {
      const changeRequest = await prisma.changeRequest.findFirst({
        where: { engagementId: engagement.id },
        orderBy: { createdAt: "asc" },
      });

      await prisma.engagement.update({
        where: { id: engagement.id },
        data: { title: "System & Architecture Assessment (Phase 1)" },
      });

      await prisma.editEvent.createMany({
        data: [
          {
            orgId: clientOrg.id,
            entityType: "engagement",
            entityId: engagement.id,
            createdByUserId: adminUser.id,
            kind: "minor_edit",
            status: "applied",
            reason: "Clarified engagement label for portal visibility.",
            diffJson: [{ field: "title", from: "System & Architecture Assessment", to: "System & Architecture Assessment (Phase 1)" }],
          },
          {
            orgId: clientOrg.id,
            entityType: "engagement",
            entityId: engagement.id,
            createdByUserId: adminUser.id,
            kind: "controlled_edit",
            status: "pending_approval",
            reason: "Client requested expanded scope definition.",
            diffJson: [
              {
                field: "scopeSummary",
                from: "Paid scope to define constraints, acceptance criteria, and delivery options.",
                to: "Include OT telemetry validation and expanded acceptance criteria.",
              },
            ],
            linkedChangeRequestId: changeRequest?.id ?? null,
          },
        ],
      });
    }
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
