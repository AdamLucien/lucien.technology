import type { Service } from "@/content/services";

export function formatEUR(amount: number) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatRange(min: number, max: number) {
  return `${formatEUR(min)}–${formatEUR(max)}`;
}

export function formatHourlyRange(service: Service) {
  const { minEUR, maxEUR } = service.pricing.hourlyEquivalent;
  return `${formatEUR(minEUR)}–${formatEUR(maxEUR)} / hr`;
}

export function formatProjectRange(service: Service) {
  const { minEUR, maxEUR } = service.pricing.project;
  return formatRange(minEUR, maxEUR);
}

export function formatDurationRange(service: Service) {
  const { minWeeks, maxWeeks } = service.duration;
  if (maxWeeks <= minWeeks) {
    return `${minWeeks} weeks`;
  }
  return `${minWeeks}–${maxWeeks} weeks`;
}

export function formatIncludesLine(service: Service) {
  return `Includes: ${service.includes.join(", ")}.`;
}
