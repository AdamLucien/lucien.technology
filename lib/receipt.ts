import { createHmac, timingSafeEqual } from "crypto";

const secret = process.env.RECEIPT_SECRET || "dev-receipt-secret";

export function signReceiptToken(orderId: string) {
  return createHmac("sha256", secret).update(orderId).digest("hex");
}

export function verifyReceiptToken(orderId: string, token: string | null) {
  if (!token) return false;
  const expected = signReceiptToken(orderId);
  try {
    return timingSafeEqual(Buffer.from(expected), Buffer.from(token));
  } catch {
    return false;
  }
}
