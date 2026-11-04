import { FAQS } from "../faqs";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "../site";

export const dynamic = "force-static";

export function GET() {
  const faqs = FAQS.map((f) => `### ${f.q}\n${f.a}`).join("\n\n");
  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

## Key facts
- Services: Early Learners (Grade 00) school readiness; all core subjects Grades 00–12; Maths from arithmetic to AP level; exam prep and homework help.
- Format: always 1-on-1. Online from anywhere; in person in the Pretoria area.
- Curricula: CAPS, IEB and Cambridge.
- Founder: Roxanne, who grew up with ADHD. Co-founder: Bonnie Naidoo, Learning Support Specialist.
- Operating for over 4 years.
- Website: ${SITE_URL}
- Email: ${CONTACT_EMAIL}
- Phone / WhatsApp: ${CONTACT_PHONE}

## Pages
- [Home](${SITE_URL}/): services, founders, why Bloom, FAQ and enquiry form.

## FAQ
${faqs}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
