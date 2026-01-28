export type TaxonomyOption = {
  id: string;
  labelKey: string;
};

export type SkillOption = {
  id: string;
  labelKey: string;
  groupId: string;
};

export type RoleGroup = {
  id: string;
  labelKey: string;
  roles: TaxonomyOption[];
};

export const roleGroups: RoleGroup[] = [
  {
    id: "leadership",
    labelKey: "partners.roles.group.leadership",
    roles: [
      { id: "fractional_cto", labelKey: "partners.roles.leadership.fractional_cto" },
      { id: "principal_architect", labelKey: "partners.roles.leadership.principal_architect" },
      { id: "program_director", labelKey: "partners.roles.leadership.program_director" },
      { id: "delivery_lead", labelKey: "partners.roles.leadership.delivery_lead" },
      { id: "engagement_manager", labelKey: "partners.roles.leadership.engagement_manager" },
    ],
  },
  {
    id: "architecture",
    labelKey: "partners.roles.group.architecture",
    roles: [
      { id: "systems_architect", labelKey: "partners.roles.architecture.systems_architect" },
      { id: "enterprise_architect", labelKey: "partners.roles.architecture.enterprise_architect" },
      { id: "solution_architect", labelKey: "partners.roles.architecture.solution_architect" },
      { id: "integration_architect", labelKey: "partners.roles.architecture.integration_architect" },
      { id: "ot_it_architect", labelKey: "partners.roles.architecture.ot_it_architect" },
      { id: "security_architect", labelKey: "partners.roles.architecture.security_architect" },
      { id: "data_architect", labelKey: "partners.roles.architecture.data_architect" },
      { id: "platform_architect", labelKey: "partners.roles.architecture.platform_architect" },
      { id: "observability_architect", labelKey: "partners.roles.architecture.observability_architect" },
    ],
  },
  {
    id: "engineering",
    labelKey: "partners.roles.group.engineering",
    roles: [
      { id: "backend_engineer", labelKey: "partners.roles.engineering.backend_engineer" },
      { id: "platform_engineer", labelKey: "partners.roles.engineering.platform_engineer" },
      { id: "sre", labelKey: "partners.roles.engineering.sre" },
      { id: "devops_engineer", labelKey: "partners.roles.engineering.devops_engineer" },
      { id: "data_engineer", labelKey: "partners.roles.engineering.data_engineer" },
      { id: "mlops_engineer", labelKey: "partners.roles.engineering.mlops_engineer" },
      { id: "fullstack_engineer", labelKey: "partners.roles.engineering.fullstack_engineer" },
      { id: "integration_engineer", labelKey: "partners.roles.engineering.integration_engineer" },
    ],
  },
  {
    id: "industry",
    labelKey: "partners.roles.group.industry",
    roles: [
      {
        id: "industry40_systems_engineer",
        labelKey: "partners.roles.industry.industry40_systems_engineer",
      },
      { id: "ot_security_engineer", labelKey: "partners.roles.industry.ot_security_engineer" },
      { id: "ics_engineer", labelKey: "partners.roles.industry.ics_engineer" },
      { id: "mes_mom_engineer", labelKey: "partners.roles.industry.mes_mom_engineer" },
      {
        id: "industrial_data_engineer",
        labelKey: "partners.roles.industry.industrial_data_engineer",
      },
      {
        id: "manufacturing_systems_analyst",
        labelKey: "partners.roles.industry.manufacturing_systems_analyst",
      },
      { id: "automation_engineer", labelKey: "partners.roles.industry.automation_engineer" },
    ],
  },
  {
    id: "supply_chain",
    labelKey: "partners.roles.group.supply_chain",
    roles: [
      {
        id: "supply_chain_architect",
        labelKey: "partners.roles.supply_chain.supply_chain_architect",
      },
      {
        id: "supply_chain_analyst",
        labelKey: "partners.roles.supply_chain.supply_chain_analyst",
      },
      {
        id: "planning_scheduling_specialist",
        labelKey: "partners.roles.supply_chain.planning_scheduling_specialist",
      },
      {
        id: "logistics_optimization_specialist",
        labelKey: "partners.roles.supply_chain.logistics_optimization_specialist",
      },
      {
        id: "procurement_supplier_risk_specialist",
        labelKey: "partners.roles.supply_chain.procurement_supplier_risk_specialist",
      },
      {
        id: "inventory_optimization_analyst",
        labelKey: "partners.roles.supply_chain.inventory_optimization_analyst",
      },
    ],
  },
  {
    id: "governance",
    labelKey: "partners.roles.group.governance",
    roles: [
      { id: "grc_consultant", labelKey: "partners.roles.governance.grc_consultant" },
      { id: "compliance_lead", labelKey: "partners.roles.governance.compliance_lead" },
      { id: "risk_analyst", labelKey: "partners.roles.governance.risk_analyst" },
      { id: "control_owner_auditor", labelKey: "partners.roles.governance.control_owner_auditor" },
    ],
  },
  {
    id: "product",
    labelKey: "partners.roles.group.product",
    roles: [
      { id: "product_manager_b2b", labelKey: "partners.roles.product.product_manager_b2b" },
      { id: "business_analyst", labelKey: "partners.roles.product.business_analyst" },
      {
        id: "technical_writer_controlled_docs",
        labelKey: "partners.roles.product.technical_writer_controlled_docs",
      },
      { id: "ux_enterprise_systems", labelKey: "partners.roles.product.ux_enterprise_systems" },
    ],
  },
];

export const domainOptions: TaxonomyOption[] = [
  { id: "industry4", labelKey: "partners.domains.industry4" },
  { id: "supply_chain", labelKey: "partners.domains.supply_chain" },
  { id: "ot_it", labelKey: "partners.domains.ot_it" },
  { id: "ai_architecture", labelKey: "partners.domains.ai_architecture" },
  { id: "security_grc", labelKey: "partners.domains.security_grc" },
  { id: "observability", labelKey: "partners.domains.observability" },
  { id: "governance", labelKey: "partners.domains.governance" },
  { id: "data_realtime", labelKey: "partners.domains.data_realtime" },
  { id: "manufacturing_systems", labelKey: "partners.domains.manufacturing_systems" },
  { id: "mes_mom", labelKey: "partners.domains.mes_mom" },
  { id: "erp_integration", labelKey: "partners.domains.erp_integration" },
];

export const seniorityOptions: TaxonomyOption[] = [
  { id: "ic_senior", labelKey: "partners.seniority.ic_senior" },
  { id: "staff", labelKey: "partners.seniority.staff" },
  { id: "principal", labelKey: "partners.seniority.principal" },
  { id: "lead", labelKey: "partners.seniority.lead" },
  { id: "director", labelKey: "partners.seniority.director" },
];

export const availabilityOptions: TaxonomyOption[] = [
  { id: "now", labelKey: "partners.availability.now" },
  { id: "two_four_weeks", labelKey: "partners.availability.two_four_weeks" },
  { id: "one_two_months", labelKey: "partners.availability.one_two_months" },
  { id: "three_plus_months", labelKey: "partners.availability.three_plus_months" },
];

export const engagementModeOptions: TaxonomyOption[] = [
  { id: "remote", labelKey: "partners.modes.remote" },
  { id: "onsite", labelKey: "partners.modes.onsite" },
  { id: "hybrid", labelKey: "partners.modes.hybrid" },
  { id: "travel", labelKey: "partners.modes.travel" },
];

export const rateBandOptions: TaxonomyOption[] = [
  { id: "under_100", labelKey: "partners.rateBand.under_100" },
  { id: "100_150", labelKey: "partners.rateBand.100_150" },
  { id: "150_200", labelKey: "partners.rateBand.150_200" },
  { id: "200_plus", labelKey: "partners.rateBand.200_plus" },
  { id: "negotiable", labelKey: "partners.rateBand.negotiable" },
];

export const languageOptions: TaxonomyOption[] = [
  { id: "en", labelKey: "partners.languages.en" },
  { id: "cs", labelKey: "partners.languages.cs" },
  { id: "de", labelKey: "partners.languages.de" },
  { id: "it", labelKey: "partners.languages.it" },
  { id: "uk", labelKey: "partners.languages.uk" },
  { id: "zh", labelKey: "partners.languages.zh" },
];

export const skillOptions: SkillOption[] = [
  { id: "system_architecture", labelKey: "skills.system_architecture", groupId: "architecture" },
  { id: "enterprise_architecture", labelKey: "skills.enterprise_architecture", groupId: "architecture" },
  { id: "security_controls", labelKey: "skills.security_controls", groupId: "security" },
  { id: "risk_register", labelKey: "skills.risk_register", groupId: "risk" },
  { id: "it_ot_integration", labelKey: "skills.it_ot_integration", groupId: "integration" },
  { id: "data_realtime", labelKey: "skills.data_realtime", groupId: "data" },
  { id: "observability", labelKey: "skills.observability", groupId: "operations" },
  { id: "delivery_governance", labelKey: "skills.delivery_governance", groupId: "delivery" },
  { id: "compliance_grc", labelKey: "skills.compliance_grc", groupId: "governance" },
  { id: "program_delivery", labelKey: "skills.program_delivery", groupId: "delivery" },
  { id: "documentation_controlled", labelKey: "skills.documentation_controlled", groupId: "governance" },
  { id: "architecture_baseline", labelKey: "skills.architecture_baseline", groupId: "architecture" },
];

export const roleIds = roleGroups.flatMap((group) =>
  group.roles.map((role) => role.id),
);
export const domainIds = domainOptions.map((option) => option.id);
export const seniorityIds = seniorityOptions.map((option) => option.id);
export const availabilityIds = availabilityOptions.map((option) => option.id);
export const engagementModeIds = engagementModeOptions.map((option) => option.id);
export const rateBandIds = rateBandOptions.map((option) => option.id);
export const languageIds = languageOptions.map((option) => option.id);
export const skillIds = skillOptions.map((option) => option.id);
