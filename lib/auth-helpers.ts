export function getDevLoginEmails() {
  if (process.env.NODE_ENV !== "development") {
    return [];
  }

  const fallback =
    process.env.DEV_LOGIN_EMAIL ||
    process.env.ADMIN_EMAIL ||
    "admin@lucien.technology";

  return fallback
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}
