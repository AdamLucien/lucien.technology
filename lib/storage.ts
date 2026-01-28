import { createHash } from "crypto";
import { promises as fs } from "fs";
import path from "path";

const localRoot = path.join(process.cwd(), ".local-storage");

type StoreInput = {
  orgId: string;
  filename: string;
  data: Buffer;
};

type StoredFile = {
  storageKey: string;
  size: number;
  checksum: string;
};

async function ensureLocalDir(storageKey: string) {
  const filePath = path.join(localRoot, storageKey);
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
  return filePath;
}

async function storeLocal({ orgId, filename, data }: StoreInput): Promise<StoredFile> {
  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
  const storageKey = `${orgId}/${Date.now()}-${safeName}`;
  const filePath = await ensureLocalDir(storageKey);
  await fs.writeFile(filePath, data);
  const checksum = createHash("sha256").update(data).digest("hex");
  return { storageKey, size: data.length, checksum };
}

async function readLocal(storageKey: string) {
  const filePath = path.join(localRoot, storageKey);
  return fs.readFile(filePath);
}

export async function storeFile(input: StoreInput): Promise<StoredFile> {
  if (process.env.NODE_ENV === "production") {
    throw new Error("Storage provider not configured for production.");
  }
  return storeLocal(input);
}

export async function readFile(storageKey: string) {
  if (process.env.NODE_ENV === "production") {
    throw new Error("Storage provider not configured for production.");
  }
  return readLocal(storageKey);
}
