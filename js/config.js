/**
 * Central configuration for the site.
 * All pages should reference this instead of hard-coding company details.
 */
const companyConfig = {
  name: "Incozent",
  fullName: "Incozent Technologies",
  tagline: "Real-World Data Infrastructure for AI",
  email: "chittatoshamohanta@incozent.in",
  recruitmentEmail: "chittatoshamohanta@incozent.in",
  phone: "+91 00000 00000",
  location: "Bhubaneswar, Odisha, India",
  founderName: "Chittatosha Mohanta",
  linkedin: "#",
  github: "#",
  geography: "India-first, with future international collection support",
  googleSheetWebhookUrl: "https://script.google.com/macros/s/AKfycbwdkLppNbCZYo9au0esoMz2UxOBys6lCYtoxptGFGk4jUc20jPc1jq5gXgeRHmetZnDuw/exec",
  year: new Date().getFullYear(),
};

// Expose globally for non-module scripts
window.companyConfig = companyConfig;
