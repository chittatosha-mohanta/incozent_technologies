/**
 * Central configuration for the site.
 * All pages should reference this instead of hard-coding company details.
 */
const companyConfig = {
  name: "Incozent",
  fullName: "Incozent Technologies",
  tagline: "Real-World Data Infrastructure for AI",
  email: "contact@incozent.com",
  recruitmentEmail: "participants@incozent.com",
  phone: "+91 00000 00000",
  location: "Bengaluru, India",
  founderName: "Chittatosha Mohanta",
  linkedin: "#",
  github: "#",
  geography: "India-first, with future international collection support",
  year: new Date().getFullYear(),
};

// Expose globally for non-module scripts
window.companyConfig = companyConfig;
