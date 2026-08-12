"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FEATURES = [
  { letter: "00", color: "var(--color-mint)", light: true, label: "School Readiness → Grade 12" },
  { letter: "1:1", color: "var(--color-orange)", light: false, label: "1-on-1 Personalized Plans" },
  { letter: "AP", color: "var(--color-green)", light: false, label: "Core Subjects incl. AP Math" },
  { letter: "4+", color: "var(--color-peach)", light: true, label: "Years of Proven Results" },
];

const SERVICES = [
  {
    letter: "E",
    color: "var(--color-mint)",
    light: true,
    title: "Early Learners (Grade 00)",
    desc: "School readiness — building foundational literacy, numeracy, and focus skills before formal schooling begins.",
  },
  {
    letter: "A",
    color: "var(--color-green)",
    light: false,
    title: "Grades 00–12, All Subjects",
    desc: "All core subjects, tailored to each student's curriculum and pace.",
  },
  {
    letter: "M",
    color: "var(--color-orange)",
    light: false,
    title: "Math Specialization",
    desc: "From basic arithmetic through AP Math.",
  },
  {
    letter: "X",
    color: "var(--color-peach)",
    light: true,
    title: "Exam Prep",
    desc: "Targeted support for tests, finals, and standardized exams.",
  },
  {
    letter: "H",
    color: "var(--color-mint)",
    light: true,
    title: "Homework Help",
    desc: "Ongoing support to keep students on track week to week.",
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
    title: "We meet every child where they are",
    desc: 'From school readiness to AP Math, all subjects, all grade levels — no student is "too behind" or "too advanced" for us.',
  },
  {
    n: 3,
    title: "Truly personalized plans",
    desc: "No cookie-cutter worksheets. Every plan is built around how your child actually learns.",
  },
  {
    n: 4,
    title: "Experienced, hand-picked tutors",
    desc: "Over 4+ years of proven results, with a growing team chosen for both subject expertise and genuine care for students.",
  },
  {
    n: 5,
    title: "We see the whole child",
    desc: "We know the workload can feel endless and success can feel out of reach. Our job is to change that feeling, not just the grades.",
  },
];

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
    a: "From school readiness (our Early Learners program) all the way through Grade 12, across every core subject.",
  },
  {
    q: "Do you tutor online or in person?",
    a: "Sessions run online, so your child can learn from the comfort of home — wherever you are.",
  },
  {
    q: "How do I know which tutor is right for my child?",
    a: "We match your child with a tutor based on subject needs, personality, and learning style — and we adjust anytime it isn't the right fit.",
  },
  {
    q: "How often do sessions happen?",
    a: "Most families start with weekly sessions, then adjust frequency based on goals and upcoming exams.",
  },
  {
    q: "What subjects do you cover?",
    a: "All core subjects from school readiness through Grade 12, with a special focus in Math from arithmetic through AP level.",
  },
];

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
];

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
  const [grade, setGrade] = useState("");
  const [message, setMessage] = useState("");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const subject = encodeURIComponent(`Enquiry from ${name || "a parent"}`);
  const body = encodeURIComponent(
    `Parent name: ${name}\nChild's grade: ${grade}\n\n${message}`
  );
  const mailtoHref = `mailto:Bloomtutoringadmin@gmail.com?subject=${subject}&body=${body}`;

  return (
    <div className="relative overflow-hidden">
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
              className="block h-9 w-9 flex-none sm:h-11 sm:w-11"
            />
            <span className="flex flex-col leading-none">
              <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-green sm:text-[28px]">
                bloom
              </span>
              <span className="mt-0.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange sm:text-[11px]">
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
              className="inline-block -rotate-2 rounded-full bg-orange px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_6px_0_var(--color-orange-dark)] transition-transform hover:translate-y-[3px] hover:shadow-[0_3px_0_var(--color-orange-dark)]"
            >
              Let&apos;s Talk
            </a>
          </nav>

          <div className="flex items-center gap-3 sm:hidden">
            <a
              href="#contact"
              className="inline-flex -rotate-2 items-center rounded-full bg-orange px-4 py-3 text-sm font-extrabold text-white shadow-[0_5px_0_var(--color-orange-dark)] transition-transform hover:translate-y-[3px] hover:shadow-[0_2px_0_var(--color-orange-dark)]"
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
                  className="inline-block rounded-full bg-orange px-8 py-4 text-lg font-extrabold text-white shadow-[0_7px_0_var(--color-orange-dark)] transition-transform hover:translate-y-1 hover:shadow-[0_3px_0_var(--color-orange-dark)]"
                >
                  Book a Free Chat
                </a>
                <a
                  href="#services"
                  className="inline-block rounded-full border-[3px] border-green bg-white px-8 py-4 text-lg font-extrabold text-green transition-colors hover:bg-green hover:text-white"
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
            className="mt-10 block h-[70px] w-full"
          >
            <path
              d="M0,50 C240,100 480,0 720,45 C960,90 1200,10 1440,50 L1440,90 L0,90 Z"
              fill="#ffffff"
            />
          </svg>
        </section>

        {/* Feature strip */}
        <section aria-label="Bloom Tutoring at a glance" className="relative -mt-px bg-white px-5 pb-12 sm:px-16 sm:pb-20">
          <div className="mx-auto grid max-w-5xl grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
            {FEATURES.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3.5 rounded-2xl bg-cream px-5 py-4.5"
              >
                <span
                  aria-hidden="true"
                  className={`flex h-[46px] w-[46px] flex-none -rotate-6 items-center justify-center rounded-2xl font-[family-name:var(--font-display)] text-xl font-extrabold ${
                    f.light ? "text-card-ink" : "text-white"
                  }`}
                  style={{ background: f.color }}
                >
                  {f.letter}
                </span>
                <span className="text-[15px] font-extrabold leading-tight text-green">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Founder story */}
        <section aria-label="Founder's story" className="relative bg-white px-5 pb-16 pt-5 sm:px-16 sm:pb-24 sm:pt-8">
          <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[minmax(260px,0.85fr)_minmax(260px,1.15fr)] md:gap-16">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-[6%] top-[-8%] h-[110%] w-[105%] bg-mint-light"
                style={{ borderRadius: "60% 40% 45% 55%/50% 55% 45% 50%" }}
              />
              <div className="relative mx-auto aspect-square w-[min(320px,85vw)] overflow-hidden rounded-full border-[6px] border-white shadow-[0_16px_0_rgba(24,118,95,0.1)]">
                <Image
                  src="/images/founder-photo.jpg"
                  alt="Roxanne, founder of Bloom Tutoring"
                  width={1448}
                  height={1086}
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
              <span className="mb-4 inline-block -rotate-2 rounded-full bg-mint-light px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-wider text-green">
                Founder&apos;s Story
              </span>
              <p className="m-0 mb-4.5 font-[family-name:var(--font-display)] text-2xl font-bold leading-snug text-green sm:text-3xl">
                <span aria-hidden="true" className="text-[1.4em] text-peach">&ldquo;</span>I started Bloom
                Tutoring because I know what it feels like to be misunderstood as a student.
                My ADHD made traditional learning feel impossible — until I found the right
                approach. I built this company so other children wouldn&apos;t have to find
                it alone.<span aria-hidden="true" className="text-[1.4em] text-peach">&rdquo;</span>
              </p>
              <p className="m-0 mb-6 text-base font-bold text-ink-soft">— Roxanne (Founder)</p>
              <div className="mb-6 border-t-[3px] border-dashed border-tan" />
              <span className="mb-4 inline-block -rotate-2 rounded-full bg-orange-light px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-wider text-orange">
                Our Team
              </span>
              <p className="m-0 text-lg font-semibold leading-relaxed text-ink">
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
        <section aria-labelledby="cofounder-heading" className="relative overflow-hidden bg-white px-5 pb-16 pt-5 sm:px-16 sm:pb-24 sm:pt-8">
          <div aria-hidden="true" className="absolute bottom-[6%] left-[2%] h-[130px] w-[130px] rounded-full bg-orange-light opacity-70" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[minmax(260px,1.15fr)_minmax(260px,0.85fr)] md:gap-16">
            <div>
              <span className="mb-4 inline-block -rotate-2 rounded-full bg-orange-light px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-wider text-orange">
                Co-Founder
              </span>
              <h2 id="cofounder-heading" className="m-0 mb-3.5 font-[family-name:var(--font-display)] text-3xl font-extrabold text-green sm:text-4xl">
                Meet Bonnie Naidoo
              </h2>
              <p className="m-0 mb-6 text-[17px] font-semibold leading-relaxed text-ink">
                Bonnie Naidoo is an experienced educator and Learning Support Specialist who
                is passionate about helping learners overcome challenges, build strong
                foundations and feel confident in their ability to learn.
              </p>

              <div className="mb-7 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
                <div className="rounded-2xl bg-mint-light px-5.5 py-5">
                  <h3 className="m-0 mb-2.5 font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wide text-green">
                    Qualifications
                  </h3>
                  <ul className="m-0 space-y-1 pl-4.5 text-[15px] font-semibold leading-relaxed text-ink">
                    <li>BEd, specialising in Physical Science</li>
                    <li>BEd Honours in Learning Support</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-peach-light px-5.5 py-5">
                  <h3 className="m-0 mb-2.5 font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wide text-orange">
                    Experience
                  </h3>
                  <p className="m-0 text-[15px] font-semibold leading-relaxed text-ink">
                    10 years across CAPS, IEB and Cambridge curricula, incl. GDE and IEB
                    Matric Marking, 3 years as Learning Support Coordinator and 4 years as
                    Accommodations Officer.
                  </p>
                </div>
              </div>

              <p className="m-0 mb-5 text-base font-semibold leading-relaxed text-ink-soft">
                Through these roles, Bonnie has worked alongside educational psychologists
                and other professionals to better understand individual learners, identify
                barriers to learning and put the right support in place.
              </p>

              <div className="mb-6 border-t-[3px] border-dashed border-tan" />

              <span className="mb-4 inline-block -rotate-2 rounded-full bg-mint-light px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-wider text-green">
                Why Learning Support?
              </span>
              <p className="m-0 mb-4 text-base font-semibold leading-relaxed text-ink-soft">
                Bonnie&apos;s passion for learning support is also personal. Having
                experienced academic struggles herself, she understands how frustrating it
                can be when you know you are capable of more but don&apos;t have the right
                support.
              </p>
              <p className="m-0 mb-4 text-base font-semibold leading-relaxed text-ink-soft">
                That experience shaped the educator she is today. Bonnie believes that a
                mark is only part of the story. By taking the time to understand how a
                learner learns, identify gaps and strengthen their foundations, learners can
                make real progress — both academically and personally.
              </p>
              <p className="m-0 mb-6 text-base font-semibold leading-relaxed text-ink-soft">
                Her goal is simple: to help every learner feel capable, supported and
                confident in their own ability to learn.
              </p>

              <p className="m-0 font-[family-name:var(--font-display)] text-xl font-bold leading-snug text-green sm:text-2xl">
                <span aria-hidden="true" className="text-[1.3em] text-mint">&ldquo;</span>Sometimes, a
                learner doesn&apos;t need more work — they need the right approach.
                <span aria-hidden="true" className="text-[1.3em] text-mint">&rdquo;</span>
              </p>
            </div>
            <div className="relative justify-self-center">
              <div
                aria-hidden="true"
                className="absolute -left-[6%] -top-[8%] h-[114%] w-[112%] bg-mint-light"
                style={{ borderRadius: "45% 55% 50% 50%/55% 45% 55% 45%" }}
              />
              <div className="relative mx-auto aspect-square w-[min(320px,85vw)] overflow-hidden rounded-full border-[6px] border-white shadow-[0_16px_0_rgba(24,118,95,0.1)]">
                <Image
                  src="/images/bonnie.jpg"
                  alt="Bonnie Naidoo, Learning Support Specialist at Bloom Tutoring"
                  width={818}
                  height={1280}
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
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="relative overflow-hidden bg-mint-light px-5 py-16 sm:px-16 sm:py-24"
        >
          <div aria-hidden="true" className="animate-float-y2 absolute left-[2%] top-[6%] h-[26px] w-[26px] rounded-full bg-peach" />
          <div className="relative mx-auto mb-12 max-w-2xl text-center">
            <h2 id="services-heading" className="m-0 mb-3.5 font-[family-name:var(--font-display)] text-4xl font-extrabold text-green sm:text-5xl">
              Services
            </h2>
            <p className="m-0 text-lg font-semibold leading-relaxed text-ink-soft">
              Bloom Tutoring supports students from school readiness through Grade 12,
              across all subjects.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className={`rounded-tl-[28px] rounded-tr-[28px] rounded-br-[60px] rounded-bl-[28px] px-6.5 py-8 shadow-[0_12px_0_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-2 hover:rotate-1 ${
                  s.light ? "text-card-ink" : "text-white"
                }`}
                style={{ background: s.color }}
              >
                <div
                  aria-hidden="true"
                  className="mb-4.5 flex h-[54px] w-[54px] -rotate-6 items-center justify-center rounded-2xl font-[family-name:var(--font-display)] text-2xl font-extrabold"
                  style={{ background: "var(--color-chip-overlay)" }}
                >
                  {s.letter}
                </div>
                <h3 className="m-0 mb-2.5 font-[family-name:var(--font-display)] text-xl font-bold">
                  {s.title}
                </h3>
                <p className="m-0 text-[15.5px] font-semibold leading-relaxed opacity-90">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-11 max-w-xl text-center text-lg font-bold text-green">
            From your child&apos;s very first steps into learning to their toughest AP exam
            — we&apos;re with them every step of the way.
          </p>
        </section>

        {/* Why Bloom Tutoring */}
        <section id="why" aria-labelledby="why-heading" className="relative overflow-hidden bg-green px-5 py-16 sm:px-16 sm:py-28">
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
                className="flex items-start gap-5 rounded-2xl bg-white/[.09] px-7 py-6"
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

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-heading" className="relative bg-peach-light px-5 py-16 sm:px-16 sm:py-24">
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
                        className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-mint text-lg font-extrabold text-white transition-transform"
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
        <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden bg-cream px-5 py-16 sm:px-16 sm:py-28">
          <div aria-hidden="true" className="animate-float-y absolute right-[4%] top-[10%] h-[18px] w-[18px] rounded-full bg-mint" />
          <div
            aria-hidden="true"
            className="animate-wiggle absolute bottom-[8%] left-[6%] h-6 w-6 rounded-md"
            style={{ background: "var(--color-orange-bright)", transform: "rotate(30deg)" }}
          />
          <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-[minmax(240px,1fr)_minmax(280px,1.3fr)] md:gap-14">
            <div>
              <h2 id="contact-heading" className="m-0 mb-4 font-[family-name:var(--font-display)] text-3xl font-extrabold text-green sm:text-4xl">
                Let&apos;s Chat.
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
                className="flex items-center gap-3.5 rounded-2xl bg-white px-5 py-4 font-bold text-green transition-transform hover:translate-x-1"
              >
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-light text-lg">
                  ☏
                </span>
                068 241 4458
              </a>
            </div>
            <div className="rounded-[28px] bg-white p-6.5 shadow-[0_14px_0_rgba(24,118,95,0.08)] sm:p-10">
              <div className="grid gap-4">
                <div>
                  <label htmlFor="parent-name" className="mb-1.5 block text-[13px] font-extrabold uppercase tracking-wide text-green">
                    Parent Name
                  </label>
                  <input
                    id="parent-name"
                    name="parentName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    className="w-full rounded-xl border-2 border-tan px-4 py-3.5 text-base font-[family-name:var(--font-sans)] outline-none focus:border-green"
                  />
                </div>
                <div>
                  <label htmlFor="child-grade" className="mb-1.5 block text-[13px] font-extrabold uppercase tracking-wide text-green">
                    Child&apos;s Grade
                  </label>
                  <input
                    id="child-grade"
                    name="childGrade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    placeholder="e.g. Grade 6"
                    className="w-full rounded-xl border-2 border-tan px-4 py-3.5 text-base font-[family-name:var(--font-sans)] outline-none focus:border-green"
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
                    className="w-full resize-y rounded-xl border-2 border-tan px-4 py-3.5 text-base font-[family-name:var(--font-sans)] outline-none focus:border-green"
                  />
                </div>
                <a
                  href={mailtoHref}
                  className="rounded-full bg-orange py-4 text-center text-[17px] font-extrabold text-white shadow-[0_6px_0_var(--color-orange-dark)] transition-transform hover:translate-y-[3px] hover:shadow-[0_3px_0_var(--color-orange-dark)]"
                >
                  Send Enquiry →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-green px-5 pb-8 pt-10 sm:px-16">
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
        <div className="flex flex-wrap items-center justify-between gap-3.5">
          <div className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2">
            <Image
              src="/images/flower.png"
              alt=""
              width={1000}
              height={1000}
              className="block h-6 w-6 flex-none"
            />
            <span className="flex flex-col leading-none">
              <span className="font-[family-name:var(--font-display)] text-base font-extrabold text-green">
                bloom
              </span>
              <span className="mt-0.5 text-[8px] font-extrabold uppercase tracking-[0.18em] text-orange">
                Tutoring
              </span>
            </span>
          </div>
          <div className="text-sm font-semibold text-mist-on-green-soft">
            © 2026 Bloom Tutoring · Bloomtutoringadmin@gmail.com · 068 241 4458
          </div>
        </div>
      </footer>
    </div>
  );
}
