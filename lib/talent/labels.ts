import { t, type SupportedLocale } from "@/lib/i18n";
import { roleGroups, skillOptions } from "@/lib/talent/taxonomy";

const roleMap = new Map(
  roleGroups.flatMap((group) => group.roles.map((role) => [role.id, role.labelKey])),
);

const skillMap = new Map(skillOptions.map((skill) => [skill.id, skill.labelKey]));

const fallbackLabel = (id: string) =>
  id
    .replace(/[_-]+/g, " ")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());

export const getRoleLabel = (roleId: string, locale?: SupportedLocale) => {
  const key = roleMap.get(roleId);
  if (!key) return fallbackLabel(roleId);
  const resolved = t(key, locale);
  return resolved === key ? fallbackLabel(roleId) : resolved;
};

export const getSkillLabel = (skillId: string, locale?: SupportedLocale) => {
  const key = skillMap.get(skillId);
  if (!key) return fallbackLabel(skillId);
  const resolved = t(key, locale);
  return resolved === key ? fallbackLabel(skillId) : resolved;
};

export const getRoleLabelMap = (locale?: SupportedLocale) => {
  const map = new Map<string, string>();
  roleGroups.forEach((group) => {
    group.roles.forEach((role) => {
      map.set(role.id, t(role.labelKey, locale));
    });
  });
  return map;
};
