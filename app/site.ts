// Set NEXT_PUBLIC_SITE_URL in the deployment environment to the canonical domain.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bloomtutoring.co.za"
).replace(/\/$/, "");

export const SITE_NAME = "Bloom Tutoring";
export const SITE_DESCRIPTION =
  "Bloom Tutoring offers 1-on-1 online and in-person tutoring in Pretoria, South Africa, from school readiness (Grade 00) to Grade 12. CAPS, IEB and Cambridge, with a maths specialisation up to AP level and tutors who understand ADHD and learning differences.";
export const CONTACT_EMAIL = "Bloomtutoringadmin@gmail.com";
export const CONTACT_PHONE = "+27682414458";
