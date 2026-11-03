"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    letter: "00",
    color: "var(--color-mint)",
    light: true,
    title: "Early Learners (Grade 00)",
    desc: "School readiness — building foundational literacy, numeracy, and focus skills before formal schooling begins.",
  },
  {
    letter: "1–12",
    color: "var(--color-green)",
    light: false,
    title: "All Core Subjects",
    desc: "Grades 00–12, tailored to each student's curriculum and pace.",
  },
  {
    letter: "123",
    color: "var(--color-orange)",
    light: false,
    title: "Maths Specialisation",
    desc: "From basic arithmetic up to AP (Advanced Placement) level.",
  },
  {
    letter: "A+",
    color: "var(--color-peach)",
    light: true,
    title: "Exam Prep & Homework Help",
    desc: "Targeted support for tests, finals, and standardised exams, plus ongoing help to keep students on track week to week.",
  },
];

const WHY_ITEMS = [
  {
    n: 1,
    title: "Founded on real understanding",
    desc: 'Our founder grew up with ADHD and struggled to find learning methods that worked, often misunderstood rather than helped. That experience shapes how every tutor on our team approaches your child.',
  },
  {
    n: 2,
    title: "Truly personalised, never cookie-cutter",
    desc: 'No worksheets for the sake of worksheets, and no student is "too behind" or "too advanced" for us. Every plan is built around how your child actually learns.',
  },
  {
    n: 3,
    title: "Experienced, hand-picked tutors",
    desc: "A growing team chosen for both subject expertise and genuine care for students.",
  },
  {
    n: 4,
    title: "We see the whole child",
    desc: "We know the workload can feel endless and success can feel out of reach. Our job is to change that feeling, not just the grades.",
  },
];

// Flip to true to show the "What Families Say" section again.
const SHOW_TESTIMONIALS = false;

const TESTIMONIALS = [
  {
    quote: "Bloom Tutoring gave my daughter confidence she'd never had in math class.",
    who: "Parent, Grade 7",
    ring: "var(--color-mint)",
  },
  {
    quote: "My son used to dread homework time. Now he asks to log on early.",
    who: "Parent, Grade 4",
    ring: "var(--color-peach)",
  },
  {
    quote: "My tutor didn't just help me pass my exam — she helped me actually understand it.",
    who: "Student, Grade 11",
    ring: "var(--color-orange-bright)",
  },
];

const FAQS = [
  {
    q: "What ages or grades do you tutor?",
    a: "From school readiness (our Early Learners program) all the way through Grade 12, across every core subject, with a special focus in Maths from arithmetic through AP level.",
  },
  {
    q: "Do you tutor online or in person?",
    a: "Both, always 1-on-1. Online sessions work from anywhere, and in-person sessions are available for families in the Pretoria area.",
  },
  {
    q: "Can you help a child with ADHD or learning difficulties?",
    a: "This is close to home for us. Our founder, Roxanne, grew up with ADHD, and our co-founder, Bonnie Naidoo, is a Learning Support Specialist who has worked alongside educational psychologists. We match your child with a tutor who suits how they learn.",
  },
  {
    q: "Which curricula do you work with?",
    a: "CAPS, IEB and Cambridge, for both South African and international schools.",
  },
  {
    q: "What happens after I send an enquiry?",
    a: "We get back to you to talk through your child's needs and which tutor would be the right fit. Most families then start with weekly sessions.",
  },
  {
    q: "How do I know which tutor is right for my child?",
    a: "We match your child with a tutor based on subject needs, personality, and learning style — and we adjust anytime it isn't the right fit.",
  },
  {
    q: "How often do sessions happen?",
    a: "Most families start with weekly sessions, then adjust frequency based on goals and upcoming exams.",
  },
];

const NAV_LINKS = [
  { href: "#apply", label: "Apply" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Bloom" },
  { href: "#faq", label: "FAQ" },
];

// 068 241 4458 in international format (South Africa, +27) with the leading 0 dropped.
const WHATSAPP_HREF = `https://wa.me/27682414458?text=${encodeURIComponent(
  "Hi Bloom Tutoring! I'd like to find out more about tutoring for my child."
)}`;

// mailto links can't carry attachments, so the body walks the candidate through
// attaching their CV and filling in the blanks before they hit send.
const TUTOR_APPLY_HREF = `mailto:Bloomtutoringadmin@gmail.com?subject=${encodeURIComponent(
  "Tutor Application"
)}&body=${encodeURIComponent(
  `Hi Bloom Tutoring team,

I'd like to apply to join your team of tutors.

BEFORE YOU SEND (delete this section once done):
1. Attach your CV to this email (PDF or Word).
2. Fill in your details after each colon below.
3. Add a few lines about yourself at the bottom: your teaching experience and why you'd like to tutor with Bloom.

Full name:
Cell phone:
Subjects and grades you can tutor:
Qualification or current studies:
Curriculum experience (CAPS / IEB / Cambridge):
Online, in person (Pretoria), or both:
Days and times you're available:

About me:

`
)}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function WhatsAppFab({ hidden }: { hidden: boolean }) {
  return (
    // The pop-in animation lives on this wrapper so its held end-state transform
    // can't override the press-down hover on the link inside.
    <div
      className="animate-pop-in fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 [animation-delay:1.2s]"
    >
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp (opens in a new tab)"
        aria-hidden={hidden}
        tabIndex={hidden ? -1 : undefined}
        className={`flex h-14 w-14 items-center justify-center gap-2.5 rounded-full border-4 border-white bg-green text-white shadow-[0_6px_0_rgba(47,61,56,0.35)] transition-[opacity,transform,box-shadow,visibility] duration-300 sm:w-auto sm:px-5 ${
          hidden
            ? "invisible translate-y-3 opacity-0"
            : "hover:translate-y-[3px] hover:shadow-[0_3px_0_rgba(47,61,56,0.35)] active:translate-y-[3px] active:shadow-[0_3px_0_rgba(47,61,56,0.35)]"
        }`}
      >
        <WhatsAppIcon className="h-7 w-7 flex-none" />
        <span className="hidden whitespace-nowrap text-[15px] font-extrabold sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

function Blob({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return <div aria-hidden="true" className={className} style={style} />;
}

function PlaceholderPhoto({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-avatar-bg text-center text-green">
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="px-4 text-xs font-bold leading-tight">{label}</span>
    </div>
  );
}

export default function Home() {
  const [name, setName] = useState("");
  const [role, setRole] = useState<"Student" | "Parent">("Parent");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [message, setMessage] = useState("");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      firstMobileLinkRef.current?.focus();
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  // The contact section offers WhatsApp itself, so the floating button steps aside
  // there instead of covering the enquiry form's send button.
  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;
    const observer = new IntersectionObserver(
      ([entry]) => setContactInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const formattedName = name ? `${name} (${role})` : role;
  const subject = encodeURIComponent(`Enquiry from ${formattedName}`);
  const body = encodeURIComponent(
    `Name: ${formattedName}\nCell phone: ${phone}\nGrade & study area: ${grade}\n\n${message}`
  );
  const mailtoHref = `mailto:Bloomtutoringadmin@gmail.com?subject=${subject}&body=${body}`;

  return (
    <div className="relative overflow-x-clip">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b-[3px] border-dashed border-tan-dark bg-cream/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-5 py-4 sm:px-16">
          <a href="#top" className="flex items-center gap-2.5">
            <Image
              src="/images/flower.png"
              alt=""
              width={1000}
              height={1000}
              priority
              sizes="44px"
              className="block h-9 w-9 flex-none sm:h-11 sm:w-11"
            />
            <span className="flex flex-col leading-none">
              <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-green sm:text-[28px]">
                bloom
              </span>
              <span className="mt-0.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-orange sm:text-xs">
                Tutoring
              </span>
            </span>
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-4 sm:flex sm:gap-6 md:gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-base font-bold text-green">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-block -rotate-2 rounded-full bg-orange px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_6px_0_var(--color-orange-dark)] transition-transform hover:translate-y-[3px] hover:shadow-[0_3px_0_var(--color-orange-dark)] active:translate-y-[3px] active:shadow-[0_3px_0_var(--color-orange-dark)]"
            >
              Let&apos;s Talk
            </a>
          </nav>

          <div className="flex items-center gap-3 sm:hidden">
            <a
              href="#contact"
              className="inline-flex -rotate-2 items-center rounded-full bg-orange px-4 py-3 text-sm font-extrabold text-white shadow-[0_5px_0_var(--color-orange-dark)] transition-transform hover:translate-y-[3px] hover:shadow-[0_2px_0_var(--color-orange-dark)] active:translate-y-[3px] active:shadow-[0_2px_0_var(--color-orange-dark)]"
            >
              Let&apos;s Talk
            </a>
            <button
              ref={menuToggleRef}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="flex h-11 w-11 flex-none items-center justify-center rounded-full border-[3px] border-green bg-white"
            >
              <span aria-hidden="true" className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 block h-[3px] w-5 rounded-full bg-green transition-all duration-300 ${
                    mobileMenuOpen ? "top-[7px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] block h-[3px] w-5 rounded-full bg-green transition-opacity duration-200 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[3px] w-5 rounded-full bg-green transition-all duration-300 ${
                    mobileMenuOpen ? "top-[7px] -rotate-45" : "top-[14px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="animate-pop-in border-t-[3px] border-dashed border-tan-dark bg-cream px-5 py-4 sm:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  ref={i === 0 ? firstMobileLinkRef : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3.5 text-base font-extrabold text-green transition-colors hover:bg-mint-light"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden px-5 pt-12 sm:px-16 sm:pt-16 md:pt-20">
          <Blob
            className="animate-float-y absolute -left-10 -top-10 h-[200px] w-[200px] opacity-30"
            style={{
              borderRadius: "42% 58% 63% 37%/45% 40% 60% 55%",
              background: "var(--color-mint)",
              ["--r" as string]: "-8deg",
            }}
          />
          <div
            aria-hidden="true"
            className="animate-wiggle absolute right-[8%] top-[16%] h-[22px] w-[22px] rounded-md"
            style={{ background: "var(--color-orange-bright)", transform: "rotate(20deg)" }}
          />
          <div aria-hidden="true" className="animate-float-y absolute left-[3%] top-[52%] h-4 w-4 rounded-full bg-green" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[minmax(280px,1fr)_minmax(260px,0.9fr)] md:gap-12">
            <div>
              <span className="mb-5 inline-flex -rotate-2 items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-extrabold uppercase tracking-wide text-orange shadow-[0_4px_0_rgba(24,118,95,0.08)]">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-mint" /> School Readiness → Grade
                12
              </span>
              <h1
                id="hero-heading"
                className="m-0 mb-2 font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[1.03] sm:text-6xl md:text-7xl"
              >
                <span className="animate-pop-in block text-green">Learning that</span>
                <span className="relative mb-5 mt-2 inline-block">
                  <span
                    className="animate-pop-in block text-orange"
                    style={{ animationDelay: "0.12s" }}
                  >
                    actually clicks.
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 260 20"
                    className="absolute -bottom-3.5 left-0 h-[18px] w-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2,14 Q60,2 130,10 T258,6"
                      stroke="var(--color-mint)"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p
                className="animate-pop-in m-0 mb-7 max-w-lg text-lg font-semibold leading-relaxed text-ink sm:text-xl"
                style={{ animationDelay: "0.18s" }}
              >
                Bloom Tutoring helps students move from feeling overwhelmed to feeling
                confident — with tutors who meet every child exactly where they are.
              </p>
              <div className="animate-pop-in flex flex-wrap gap-4" style={{ animationDelay: "0.3s" }}>
                <a
                  href="#contact"
                  className="inline-block rounded-full bg-orange px-8 py-4 text-lg font-extrabold text-white shadow-[0_7px_0_var(--color-orange-dark)] transition-transform hover:translate-y-1 hover:shadow-[0_3px_0_var(--color-orange-dark)] active:translate-y-1 active:shadow-[0_3px_0_var(--color-orange-dark)]"
                >
                  Let&apos;s Talk
                </a>
                <a
                  href="#services"
                  className="inline-block rounded-full border-[3px] border-green bg-white px-8 py-4 text-lg font-extrabold text-green transition-colors hover:bg-green hover:text-white active:bg-green active:text-white"
                >
                  See Our Services
                </a>
              </div>
            </div>

            <div className="animate-pop-in relative justify-self-center" style={{ animationDelay: "0.2s" }}>
              <div
                aria-hidden="true"
                className="absolute -left-[10%] -top-[6%] h-[112%] w-[118%] bg-mint"
                style={{ borderRadius: "48% 52% 55% 45%/52% 48% 55% 45%" }}
              />
              <div className="relative h-[min(320px,80vw)] w-[min(320px,80vw)] overflow-hidden rounded-full border-[6px] border-white shadow-[0_18px_0_rgba(24,118,95,0.12)]">
                <Image
                  src="/images/student.png"
                  alt="A happy student"
                  width={490}
                  height={490}
                  sizes="(max-width: 640px) 80vw, 320px"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="animate-float-y2 absolute -bottom-[6%] -left-[14%] flex -rotate-3 items-center gap-2.5 rounded-2xl bg-white px-4.5 py-3 shadow-[0_8px_0_rgba(24,118,95,0.1)]">
                <span
                  aria-hidden="true"
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-peach font-[family-name:var(--font-display)] font-extrabold text-card-ink"
                >
                  4+
                </span>
                <span className="text-sm font-extrabold leading-tight text-green">
                  Years
                  <br />
                  Helping Kids Bloom
                </span>
              </div>
              <div aria-hidden="true" className="animate-float-y absolute right-[-10%] top-[6%] h-5 w-5 rounded-full bg-peach" />
            </div>
          </div>

          <svg
            aria-hidden="true"
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            className="mt-10 block h-[70px] w-full fill-mint-light"
          >
            <path d="M0,50 C240,100 480,0 720,45 C960,90 1200,10 1440,50 L1440,90 L0,90 Z" />
          </svg>
        </section>

        {/* Services */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="relative -mt-px scroll-mt-16 overflow-hidden bg-mint-light px-5 py-16 sm:px-16 sm:py-24"
        >
          <div aria-hidden="true" className="animate-float-y2 absolute left-4 top-4 sm:left-[2%] sm:top-[6%] h-[26px] w-[26px] rounded-full bg-peach" />
          <div className="relative mx-auto mb-12 max-w-2xl text-center">
            <h2 id="services-heading" className="m-0 mb-3.5 font-[family-name:var(--font-display)] text-4xl font-extrabold text-green sm:text-5xl">
              Services
            </h2>
            <p className="m-0 text-lg font-semibold leading-relaxed text-ink-soft">
              Every session is 1-on-1, online or in person.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className={`rounded-tl-[28px] rounded-tr-[28px] rounded-br-[60px] rounded-bl-[28px] px-6.5 py-8 shadow-[0_12px_0_rgba(0,0,0,0.08)] ${
                  s.light ? "text-card-ink" : "text-white"
                }`}
                style={{ background: s.color }}
              >
                <div
                  aria-hidden="true"
                  className={`mb-4.5 flex h-[54px] w-[54px] -rotate-6 items-center justify-center rounded-2xl font-[family-name:var(--font-display)] font-extrabold ${
                    s.letter.length > 2 ? "text-xl" : "text-2xl"
                  }`}
                  style={{ background: "var(--color-chip-overlay)" }}
                >
                  {s.letter}
                </div>
                <h3 className="m-0 mb-2.5 font-[family-name:var(--font-display)] text-xl font-bold">
                  {s.title}
                </h3>
                <p className="m-0 text-[15.5px] font-semibold leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Founder story */}
        <section
          id="founder"
          aria-labelledby="founder-heading"
          className="relative scroll-mt-20 bg-white px-5 pb-10 pt-14 sm:px-16 sm:pb-14 sm:pt-20"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="absolute -top-px left-0 block h-[50px] w-full fill-mint-light"
          >
            <path d="M0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,0 L0,0 Z" />
          </svg>
          <div className="mx-auto grid max-w-6xl items-center gap-6 md:grid-cols-[minmax(240px,0.8fr)_minmax(0,1.2fr)] md:gap-14">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-[6%] top-[-8%] h-[110%] w-[105%] bg-mint-light"
                style={{ borderRadius: "60% 40% 45% 55%/50% 55% 45% 50%" }}
              />
              <div className="relative mx-auto aspect-square w-[min(260px,70vw)] overflow-hidden rounded-full border-[6px] border-white shadow-[0_12px_0_rgba(24,118,95,0.1)]">
                <Image
                  src="/images/founder-photo.jpg"
                  alt="Roxanne, founder of Bloom Tutoring"
                  width={1448}
                  height={1086}
                  sizes="(max-width: 640px) 70vw, 260px"
                  className="h-full w-full object-cover"
                />
              </div>
              <div aria-hidden="true" className="animate-float-y absolute -right-[2%] bottom-[2%] h-9 w-9 rounded-full bg-peach" />
              <div
                aria-hidden="true"
                className="animate-wiggle absolute right-[8%] top-[-4%] h-[22px] w-[22px] rounded-md"
                style={{ background: "var(--color-orange-bright)", transform: "rotate(30deg)" }}
              />
            </div>
            <div>
              <h2
                id="founder-heading"
                className="m-0 mb-3 font-[family-name:var(--font-display)] text-3xl font-extrabold leading-tight text-balance text-green sm:text-4xl"
              >
                Founder&apos;s Story
              </h2>
              <p className="m-0 mb-2 font-[family-name:var(--font-display)] text-xl font-bold leading-snug text-balance text-green sm:text-2xl">
                <span aria-hidden="true" className="text-[1.4em] leading-none text-peach">&ldquo;</span>I started Bloom
                Tutoring because I know what it feels like to be misunderstood as a student.
                My ADHD made traditional learning feel impossible — until I found the right
                approach. I built this company so other children wouldn&apos;t have to find
                it alone.<span aria-hidden="true" className="text-[1.4em] leading-none text-peach">&rdquo;</span>
              </p>
              <p className="m-0 text-[15px] font-bold text-ink-soft">— Roxanne (Founder)</p>
              <div className="my-5 border-t-[3px] border-dashed border-tan" />
              <h3 className="m-0 mb-1.5 font-[family-name:var(--font-display)] text-lg font-bold text-green">
                Our Team
              </h3>
              <p className="m-0 text-base font-semibold leading-relaxed text-pretty text-ink-soft">
                Today, Bloom Tutoring is more than just me. I&apos;ve built a team of
                experienced, carefully-selected tutors who share the same belief: every
                child can succeed with the right support. Together, we&apos;ve helped
                students of all ages move from feeling overwhelmed to feeling confident —
                for over 4 years and counting.
              </p>
            </div>
          </div>
        </section>

        {/* Co-founder */}
        <section aria-labelledby="cofounder-heading" className="relative overflow-hidden bg-white px-5 pb-14 pt-6 sm:px-16 sm:pb-20 sm:pt-8">
          <div aria-hidden="true" className="absolute bottom-[6%] left-[2%] h-[130px] w-[130px] rounded-full bg-orange-light opacity-70" />
          <div className="cofounder-grid relative mx-auto max-w-3xl md:max-w-6xl">
            <h2
              id="cofounder-heading"
              className="m-0 mb-3 font-[family-name:var(--font-display)] text-3xl font-extrabold leading-tight text-balance text-green [grid-area:header] sm:text-4xl"
            >
              Meet Bonnie Naidoo
            </h2>

            <div className="relative mb-6 w-fit [grid-area:photo] justify-self-center md:mb-0">
              <div
                aria-hidden="true"
                className="absolute -left-[6%] -top-[8%] h-[114%] w-[112%] bg-mint-light"
                style={{ borderRadius: "45% 55% 50% 50%/55% 45% 55% 45%" }}
              />
              <div className="relative mx-auto aspect-square w-[min(260px,70vw)] overflow-hidden rounded-full border-[6px] border-white shadow-[0_12px_0_rgba(24,118,95,0.1)]">
                <Image
                  src="/images/bonnie.jpg"
                  alt="Bonnie Naidoo, Learning Support Specialist at Bloom Tutoring"
                  width={818}
                  height={1280}
                  sizes="(max-width: 640px) 70vw, 260px"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "50% 22%" }}
                />
              </div>
              <div aria-hidden="true" className="animate-float-y absolute -bottom-[4%] -right-[6%] h-[30px] w-[30px] rounded-full bg-mint" />
              <div
                aria-hidden="true"
                className="animate-wiggle absolute left-[2%] top-0 h-5 w-5 rounded-md"
                style={{ background: "var(--color-peach)", transform: "rotate(20deg)" }}
              />
            </div>

            <div className="[grid-area:text]">
              <p className="m-0 mb-5 text-lg font-semibold leading-relaxed text-pretty text-ink">
                Bonnie Naidoo is an experienced educator and Learning Support Specialist who
                is passionate about helping learners overcome challenges, build strong
                foundations and feel confident in their ability to learn.
              </p>

              <div className="grid gap-4 rounded-2xl bg-mint-light px-5 py-5 sm:grid-cols-2 sm:gap-6">
                <div>
                  <h3 className="m-0 mb-1.5 font-[family-name:var(--font-display)] text-lg font-bold text-green">
                    Qualifications
                  </h3>
                  <ul className="m-0 space-y-1 p-0 text-base font-semibold leading-snug text-ink">
                    <li>BEd, specialising in Physical Science</li>
                    <li>BEd Honours in Learning Support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="m-0 mb-1.5 font-[family-name:var(--font-display)] text-lg font-bold text-green">
                    Experience
                  </h3>
                  <ul className="m-0 space-y-1.5 p-0 text-base font-semibold leading-snug text-ink">
                    <li>
                      <strong className="font-[family-name:var(--font-display)] font-extrabold text-green">10 years</strong>{" "}
                      across CAPS, IEB and Cambridge curricula, incl. Gauteng Department of
                      Education (GDE) and IEB Matric Marking
                    </li>
                    <li>
                      <strong className="font-[family-name:var(--font-display)] font-extrabold text-green">3 years</strong>{" "}
                      as Learning Support Coordinator
                    </li>
                    <li>
                      <strong className="font-[family-name:var(--font-display)] font-extrabold text-green">4 years</strong>{" "}
                      as Accommodations Officer
                    </li>
                  </ul>
                </div>
              </div>

              <p className="m-0 mt-5 text-base font-semibold leading-relaxed text-pretty text-ink-soft">
                Through these roles, Bonnie has worked alongside educational psychologists
                and other professionals to better understand individual learners, identify
                barriers to learning and put the right support in place.
              </p>

              <div className="my-5 border-t-[3px] border-dashed border-tan" />

              <p className="m-0 mb-2 font-[family-name:var(--font-display)] text-xl font-bold leading-snug text-balance text-green sm:text-2xl">
                <span aria-hidden="true" className="text-[1.4em] leading-none text-mint">&ldquo;</span>Sometimes, a
                learner doesn&apos;t need more work — they need the right approach.
                <span aria-hidden="true" className="text-[1.4em] leading-none text-mint">&rdquo;</span>
              </p>
              <p className="m-0 mb-4 text-[15px] font-bold text-ink-soft">— Bonnie Naidoo (Co-Founder)</p>

              <details className="group">
                <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2.5 rounded-full bg-mint-light px-5 py-2 text-[13px] font-extrabold uppercase tracking-wider text-green [&::-webkit-details-marker]:hidden">
                  Why Learning Support?
                  <span
                    aria-hidden="true"
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-mint text-base font-extrabold leading-none text-card-ink transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-3 space-y-3">
                  <p className="m-0 text-base font-semibold leading-relaxed text-pretty text-ink-soft">
                    Bonnie&apos;s passion for learning support is also personal. Having
                    experienced academic struggles herself, she understands how frustrating it
                    can be when you know you are capable of more but don&apos;t have the right
                    support.
                  </p>
                  <p className="m-0 text-base font-semibold leading-relaxed text-pretty text-ink-soft">
                    That experience shaped the educator she is today. Bonnie believes that a
                    mark is only part of the story. By taking the time to understand how a
                    learner learns, identify gaps and strengthen their foundations, learners can
                    make real progress — both academically and personally.
                  </p>
                  <p className="m-0 text-base font-semibold leading-relaxed text-pretty text-ink-soft">
                    Her goal is simple: to help every learner feel capable, supported and
                    confident in their own ability to learn.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Why Bloom Tutoring */}
        <section id="why" aria-labelledby="why-heading" className="relative scroll-mt-16 overflow-hidden bg-green px-5 py-16 sm:px-16 sm:py-28">
          <svg
            aria-hidden="true"
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="absolute -top-px left-0 block h-[50px] w-full"
          >
            <path
              d="M0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,0 L0,0 Z"
              fill="var(--color-mint-light)"
            />
          </svg>
          <div
            aria-hidden="true"
            className="animate-float-y2 absolute right-[6%] top-[12%] h-[200px] w-[200px] opacity-35"
            style={{
              borderRadius: "55% 45% 40% 60%/50% 55% 45% 60%",
              background: "var(--color-mint)",
              ["--r" as string]: "10deg",
            }}
          />
          <div aria-hidden="true" className="animate-float-y absolute bottom-[8%] left-[4%] h-[130px] w-[130px] rounded-full bg-peach opacity-20" />
          <h2 id="why-heading" className="relative m-0 mb-12 text-center font-[family-name:var(--font-display)] text-4xl font-extrabold text-white sm:text-5xl">
            Why Bloom Tutoring
          </h2>
          <div className="relative mx-auto grid max-w-3xl gap-5">
            {WHY_ITEMS.map((w) => (
              <div
                key={w.n}
                className="flex items-start gap-5 rounded-2xl bg-card-ink/30 px-7 py-6"
              >
                <div aria-hidden="true" className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-peach font-[family-name:var(--font-display)] text-sm font-extrabold text-card-ink">
                  {w.n}
                </div>
                <div>
                  <h3 className="m-0 mb-1.5 font-[family-name:var(--font-display)] text-lg font-bold text-white">
                    {w.title}
                  </h3>
                  <p className="m-0 text-[15.5px] font-semibold leading-relaxed text-mist-on-green">
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        {SHOW_TESTIMONIALS && (
          <section aria-labelledby="testimonials-heading" className="relative bg-white px-5 py-16 sm:px-16 sm:py-24">
            <h2 id="testimonials-heading" className="m-0 mb-11 text-center font-[family-name:var(--font-display)] text-3xl font-extrabold text-green sm:text-4xl">
              What Families Say
            </h2>
            <div className="mx-auto grid max-w-5xl grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6.5">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.who}
                  className="rounded-3xl bg-peach-light px-6.5 pb-6.5 pt-7.5 text-center"
                >
                  <div
                    className="mx-auto mb-4 h-[76px] w-[76px] overflow-hidden rounded-full border-4 bg-white"
                    style={{ borderColor: t.ring }}
                  >
                    <PlaceholderPhoto label="Photo" />
                  </div>
                  <p className="m-0 mb-3.5 text-base font-bold leading-relaxed text-ink-warm">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="m-0 text-sm font-extrabold text-orange">{t.who}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-[13px] italic text-disclaimer">
              Sample family feedback — swap in real reviews as they come in.
            </p>
          </section>
        )}

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-heading" className="relative scroll-mt-16 bg-peach-light px-5 py-16 sm:px-16 sm:py-24">
          <h2 id="faq-heading" className="m-0 mb-11 text-center font-[family-name:var(--font-display)] text-3xl font-extrabold text-green sm:text-4xl">
            Questions, Answered
          </h2>
          <div className="mx-auto grid max-w-3xl gap-3.5">
            {FAQS.map((f, i) => {
              const open = faqOpen === i;
              const questionId = `faq-question-${i}`;
              const answerId = `faq-answer-${i}`;
              return (
                <div key={f.q} className="rounded-2xl bg-white">
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={questionId}
                      aria-expanded={open}
                      aria-controls={answerId}
                      onClick={() => setFaqOpen((cur) => (cur === i ? null : i))}
                      className="flex w-full items-center justify-between gap-4 rounded-2xl px-6.5 py-5.5 text-left font-[family-name:var(--font-display)] text-lg font-bold text-green"
                    >
                      {f.q}
                      <span
                        aria-hidden="true"
                        className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-mint text-lg font-extrabold text-card-ink transition-transform"
                        style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  {open && (
                    <p
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      className="m-0 px-6.5 pb-5.5 text-[15.5px] font-semibold leading-relaxed text-ink-soft"
                    >
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-heading" className="relative scroll-mt-16 overflow-hidden bg-cream px-5 py-16 sm:px-16 sm:py-28">
          <div aria-hidden="true" className="animate-float-y absolute right-[4%] top-[10%] h-[18px] w-[18px] rounded-full bg-mint" />
          <div
            aria-hidden="true"
            className="animate-wiggle absolute bottom-[8%] left-[6%] h-6 w-6 rounded-md"
            style={{ background: "var(--color-orange-bright)", transform: "rotate(30deg)" }}
          />
          <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-[minmax(240px,1fr)_minmax(280px,1.3fr)] md:gap-14">
            <div>
              <h2 id="contact-heading" className="m-0 mb-4 font-[family-name:var(--font-display)] text-3xl font-extrabold text-green sm:text-4xl">
                Let&apos;s Talk.
              </h2>
              <p className="m-0 mb-7 text-lg font-semibold leading-relaxed text-ink-soft">
                Tell us a bit about your child and we&apos;ll get back to you to talk
                through the right fit.
              </p>
              <a
                href="mailto:Bloomtutoringadmin@gmail.com"
                className="mb-3.5 flex items-center gap-3.5 rounded-2xl bg-white px-5 py-4 font-bold text-green transition-transform hover:translate-x-1"
              >
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-light text-lg">
                  ✉
                </span>
                Bloomtutoringadmin@gmail.com
              </a>
              <a
                href="tel:0682414458"
                className="mb-3.5 flex items-center gap-3.5 rounded-2xl bg-white px-5 py-4 font-bold text-green transition-transform hover:translate-x-1"
              >
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-light text-lg">
                  ☏
                </span>
                068 241 4458
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 rounded-2xl bg-white px-5 py-4 font-bold text-green transition-transform hover:translate-x-1"
              >
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-light">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                Chat on WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <div className="rounded-[28px] bg-white p-6.5 shadow-[0_14px_0_rgba(24,118,95,0.08)] sm:p-10">
              <div className="grid gap-4">
                <div>
                  <label htmlFor="my-name" className="mb-1.5 block text-[13px] font-extrabold uppercase tracking-wide text-green">
                    My Name
                  </label>
                  <input
                    id="my-name"
                    name="myName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    placeholder="Jane Smith"
                    className="w-full rounded-xl border-2 border-tan-strong px-4 py-3.5 text-base font-[family-name:var(--font-sans)] text-ink placeholder:text-disclaimer focus:border-green"
                  />
                </div>
                <div>
                  <span className="mb-1.5 block text-[13px] font-extrabold uppercase tracking-wide text-green">
                    I am a...
                  </span>
                  <div className="flex gap-5">
                    {(["Student", "Parent"] as const).map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 py-2.5 text-base font-semibold text-ink"
                      >
                        <input
                          type="radio"
                          name="role"
                          value={option}
                          checked={role === option}
                          onChange={() => setRole(option)}
                          className="h-4 w-4 accent-green"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="phone-number" className="mb-1.5 block text-[13px] font-extrabold uppercase tracking-wide text-green">
                    Cell Phone Number
                  </label>
                  <input
                    id="phone-number"
                    name="phoneNumber"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="082 123 4567"
                    className="w-full rounded-xl border-2 border-tan-strong px-4 py-3.5 text-base font-[family-name:var(--font-sans)] text-ink placeholder:text-disclaimer focus:border-green"
                  />
                </div>
                <div>
                  <label htmlFor="child-grade" className="mb-1.5 block text-[13px] font-extrabold uppercase tracking-wide text-green">
                    Grade &amp; Study Area
                  </label>
                  <input
                    id="child-grade"
                    name="childGrade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    placeholder="e.g. Grade 6, Maths and English"
                    className="w-full rounded-xl border-2 border-tan-strong px-4 py-3.5 text-base font-[family-name:var(--font-sans)] text-ink placeholder:text-disclaimer focus:border-green"
                  />
                </div>
                <div>
                  <label htmlFor="child-needs" className="mb-1.5 block text-[13px] font-extrabold uppercase tracking-wide text-green">
                    What do they need help with?
                  </label>
                  <textarea
                    id="child-needs"
                    name="childNeeds"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us a little about your child..."
                    rows={4}
                    className="w-full resize-y rounded-xl border-2 border-tan-strong px-4 py-3.5 text-base font-[family-name:var(--font-sans)] text-ink placeholder:text-disclaimer focus:border-green"
                  />
                </div>
                <a
                  href={mailtoHref}
                  className="rounded-full bg-orange py-4 text-center text-[17px] font-extrabold text-white shadow-[0_6px_0_var(--color-orange-dark)] transition-transform hover:translate-y-[3px] hover:shadow-[0_3px_0_var(--color-orange-dark)] active:translate-y-[3px] active:shadow-[0_3px_0_var(--color-orange-dark)]"
                >
                  Send Enquiry →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="apply" className="relative scroll-mt-16 bg-green px-5 pb-24 pt-10 sm:px-16 sm:pb-8 [&_a:focus-visible]:outline-white">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 30"
          preserveAspectRatio="none"
          className="absolute -top-[23px] left-0 block h-6 w-full"
        >
          <path
            d="M0,0 C60,26 120,0 180,26 C240,0 300,26 360,0 C420,26 480,0 540,26 C600,0 660,26 720,0 C780,26 840,0 900,26 C960,0 1020,26 1080,0 C1140,26 1200,0 1260,26 C1320,0 1380,26 1440,0 L1440,30 L0,30 Z"
            fill="var(--color-green)"
          />
        </svg>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
          <div className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2">
            <Image
              src="/images/flower.png"
              alt=""
              width={1000}
              height={1000}
              sizes="24px"
              className="block h-6 w-6 flex-none"
            />
            <span className="flex flex-col leading-none">
              <span className="font-[family-name:var(--font-display)] text-base font-extrabold text-green">
                bloom
              </span>
              <span className="mt-0.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-orange">
                Tutoring
              </span>
            </span>
          </div>
          <a
            href={TUTOR_APPLY_HREF}
            className="inline-flex min-h-11 items-center text-[15px] font-extrabold text-white underline decoration-2 underline-offset-4"
          >
            Are you a tutor? Join our team →
          </a>
        </div>
        <p className="mb-0 mt-5 text-sm font-semibold text-mist-on-green-soft">
          © 2026 Bloom Tutoring ·{" "}
          <a
            href="mailto:Bloomtutoringadmin@gmail.com"
            className="inline-block py-2 text-mist-on-green-soft underline underline-offset-4"
          >
            Bloomtutoringadmin@gmail.com
          </a>{" "}
          ·{" "}
          <a
            href="tel:0682414458"
            className="inline-block py-2 text-mist-on-green-soft underline underline-offset-4"
          >
            068 241 4458
          </a>
        </p>
      </footer>

      <WhatsAppFab hidden={contactInView} />
    </div>
  );
}
