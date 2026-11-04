import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import { FAQS } from "./faqs";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "./site";

const baloo2 = Baloo_2({
  variable: "--font-baloo-2",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bloom Tutoring — 1-on-1 Online & Pretoria Tutors, Grade 00–12",
    template: "%s | Bloom Tutoring",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "tutoring Pretoria",
    "online tutoring South Africa",
    "maths tutor",
    "ADHD tutor",
    "CAPS tutor",
    "IEB tutor",
    "Cambridge tutor",
    "school readiness",
    "exam prep",
    "homework help",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "/",
    siteName: SITE_NAME,
    title: "Bloom Tutoring — Learning that actually clicks.",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom Tutoring — Learning that actually clicks.",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/bloom-logo.png`,
      image: `${SITE_URL}/images/bloom-logo.png`,
      description: SITE_DESCRIPTION,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      foundingDate: "2021",
      areaServed: [
        { "@type": "City", name: "Pretoria" },
        { "@type": "Country", name: "South Africa" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pretoria",
        addressCountry: "ZA",
      },
      founder: { "@type": "Person", name: "Roxanne", jobTitle: "Founder" },
      employee: {
        "@type": "Person",
        name: "Bonnie Naidoo",
        jobTitle: "Co-founder and Learning Support Specialist",
      },
      knowsAbout: ["Tutoring", "Mathematics", "CAPS", "IEB", "Cambridge", "ADHD", "School readiness"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tutoring services",
        itemListElement: [
          "Early Learners (Grade 00) school readiness",
          "All core subjects, Grades 00–12",
          "Maths specialisation up to AP level",
          "Exam prep and homework help",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, serviceType: "Tutoring" },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en-ZA",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-ZA"
      className={`${baloo2.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
