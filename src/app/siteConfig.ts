export const siteConfig = {
  name: "Persian Top Panel",
  url: "https://insights.tremor.so",
  description: "The only reporting and audit dashboard you will ever need.",
  baseLinks: {
    reports: "/reports",
    transactions: "/orders",
    agents: "/agents",
    serviceTypes: "/details",
    settings: {
      audit: "/settings/audit",
      users: "/settings/users",
      billing: "/settings/billing",
    },
    login: "/login",
    onboarding: "/onboarding/products",
  },
}

export type siteConfig = typeof siteConfig
