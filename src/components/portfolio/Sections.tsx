import { useState } from "react";
import {
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Github,
  Layers,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Monitor,
  Phone,
  Rocket,
  Send,
  Server,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { z } from "zod";
import projectImg from "@/assets/project-attendance.jpg";
import { EDUCATION, EMAILJS, PROFILE, SERVICES, SKILL_GROUPS, STATS } from "./data";
import { useCountUp, useReveal } from "./hooks";
import { Reveal, Section } from "./Section";

const HIGHLIGHTS = [
  { icon: GraduationCap, text: "B.Com (IT) Graduate (2025)" },
  { icon: Code2, text: "Passionate Full Stack Developer" },
  { icon: Layers, text: "Interested in Frontend & Backend Development" },
  { icon: Rocket, text: "Strong willingness to learn emerging technologies" },
  { icon: Lightbulb, text: "Good problem-solving abilities" },
  { icon: MessageSquare, text: "Excellent communication skills" },
];

function StatCard({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { ref, visible } = useReveal();
  const count = useCountUp(value, visible);
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal glass glass-hover rounded-2xl p-6 text-center"
    >
      <p className="font-display text-3xl font-extrabold text-primary md:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs font-medium text-muted-foreground md:text-sm">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={<>Building software with <span className="text-primary">purpose</span></>}
      subtitle="A professional summary of who I am and what drives me."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="glass rounded-3xl p-7 md:p-9">
          <h3 className="font-display text-xl font-bold">Professional Summary</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            I'm S Vishweswaran, a B.Com (Information Technology) graduate from Yadava College and a
            certified Full Stack Developer trained at FITA Academy. I work across the stack — from
            crafting responsive interfaces with HTML, CSS, JavaScript and React to building reliable
            backends with Java, Spring Boot and MySQL.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            My career objective is focused on building scalable applications while contributing to
            organizational success, growing continuously alongside the teams I work with.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-3.5"
              >
                <Icon size={17} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-xs leading-snug md:text-sm">{text}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 self-start">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 90} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={<>Academic <span className="text-primary">journey</span></>}
    >
      <div className="relative mx-auto max-w-3xl before:absolute before:top-2 before:bottom-2 before:left-5 before:w-px before:bg-gradient-to-b before:from-primary/70 before:to-transparent md:before:left-1/2">
        {EDUCATION.map((e, i) => (
          <Reveal key={e.title} delay={i * 120} className="relative mb-8 pl-14 md:pl-0">
            <div className="absolute top-6 left-0 grid h-10 w-10 place-items-center rounded-full border border-primary/40 bg-background text-primary md:left-1/2 md:-translate-x-1/2">
              <GraduationCap size={18} />
            </div>
            <div
              className={
                i % 2 === 0
                  ? "glass glass-hover rounded-2xl p-6 md:mr-[calc(50%+2.5rem)]"
                  : "glass glass-hover rounded-2xl p-6 md:ml-[calc(50%+2.5rem)]"
              }
            >
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                {e.period}
              </span>
              <h3 className="font-display mt-2 text-lg font-bold">{e.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
              <p className="mt-3 inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {e.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const DUTIES = [
  "Performed image quality verification and auditing.",
  "Ensured image accuracy and maintained quality standards.",
  "Reviewed processed digital images.",
  "Worked with teams to improve workflow efficiency.",
  "Maintained high levels of precision and consistency.",
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Professional <span className="text-primary">experience</span></>}
    >
      <Reveal className="mx-auto max-w-4xl">
        <article className="glass glass-hover rounded-3xl p-7 md:p-10">
          <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 sm:flex sm:flex-wrap sm:justify-between">
            <div className="flex min-w-0 items-center gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground">
                <Building2 size={24} />
              </div>
              <div className="min-w-0">
                <h3 className="font-display truncate text-xl font-bold">Image Quality Auditor</h3>
                <p className="truncate text-sm text-muted-foreground">
                  SBL — ELCOT IT Park, Madurai
                </p>
              </div>
            </div>
            <span className="col-span-2 inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Briefcase size={13} /> July 2025 – July 2026
            </span>
          </div>

          <ul className="mt-7 grid gap-3">
            {DUTIES.map((d) => (
              <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-primary" />
                {d}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </Section>
  );
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-xs font-medium">
        <span>{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-primary transition-[width] duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

const GROUP_ICONS = [Monitor, Server, Database, Award];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>Technical <span className="text-primary">toolkit</span></>}
      subtitle="Technologies I use to design, build and ship web applications."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {SKILL_GROUPS.map((g, gi) => {
          const Icon = GROUP_ICONS[gi] ?? Code2;
          return (
            <Reveal key={g.group} delay={gi * 90}>
              <div className="glass glass-hover h-full rounded-3xl p-7">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <Icon size={19} />
                  </div>
                  <h3 className="font-display text-lg font-bold">{g.group}</h3>
                </div>
                <div className="mt-6 grid gap-5">
                  {g.skills.map((s, si) => (
                    <SkillBar key={s.name} {...s} delay={si * 120} />
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

const SERVICE_ICONS = { layers: Layers, monitor: Monitor, server: Server };

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>What I can <span className="text-primary">do for you</span></>}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = SERVICE_ICONS[s.icon];
          return (
            <Reveal key={s.title} delay={i * 100}>
              <div className="glass glass-hover group h-full rounded-3xl p-7">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="font-display mt-6 text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

const PROJECT_TECH = ["HTML5", "CSS3", "JavaScript", "Spring Boot", "SQL"];
const PROJECT_FEATURES = [
  "Simplified daily attendance tracking",
  "Centralised student and staff records",
  "Secure Spring Boot REST backend",
  "SQL-backed reporting and history",
];

export function Portfolio() {
  return (
    <Section
      id="portfolio"
      eyebrow="Portfolio"
      title={<>Featured <span className="text-primary">project</span></>}
    >
      <Reveal className="mx-auto max-w-5xl">
        <article className="glass glass-hover grid overflow-hidden rounded-3xl lg:grid-cols-2">
          <div className="relative min-h-56 overflow-hidden">
            <img
              src={projectImg}
              alt="Attendance Management System dashboard mockup"
              loading="lazy"
              width={1200}
              height={800}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="p-7 md:p-9">
            <h3 className="font-display text-xl font-bold">Attendance Management System</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Designed and developed a web-based Attendance Management System that simplifies
              attendance tracking and record management.
            </p>
            <ul className="mt-5 grid gap-2">
              {PROJECT_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {PROJECT_TECH.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => toast("Repository link coming soon")}
                className="glass glass-hover inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                <Github size={16} /> GitHub
              </button>
              <button
                onClick={() => toast("Live demo coming soon")}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
              >
                <ExternalLink size={16} /> Live Demo
              </button>
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}

const DETAILS = [
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: PROFILE.location },
  { icon: Linkedin, label: "LinkedIn", value: "in/vishweswarans", href: PROFILE.linkedin },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  subject: z.string().trim().min(1, "Please enter a subject").max(150, "Subject is too long"),
  message: z.string().trim().min(1, "Please enter a message").max(1000, "Message is too long"),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const fieldClass =
  "rounded-xl border border-input bg-secondary/50 px-4 py-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/25";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-primary">together</span></>}
      subtitle="Open to full-time roles, internships and freelance work."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="glass rounded-3xl p-7 md:p-9">
          <h3 className="font-display text-lg font-bold">{PROFILE.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">Full Stack Developer</p>
          <div className="mt-7 grid gap-4">
            {DETAILS.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Icon size={17} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] tracking-wider text-muted-foreground uppercase">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm font-medium break-words hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium break-words">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Madurai, Tamil Nadu map"
              loading="lazy"
              className="h-48 w-full grayscale-[0.4]"
              src="https://www.openstreetmap.org/export/embed.html?bbox=78.05%2C9.86%2C78.20%2C9.98&layer=mapnik"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="glass rounded-3xl p-7 md:p-9">
          <form
            className="grid gap-4"
            noValidate
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const fd = new FormData(form);

              // Honeypot: bots fill this hidden field, humans never see it.
              if (String(fd.get("company") ?? "").trim() !== "") return;

              const parsed = contactSchema.safeParse({
                name: fd.get("name"),
                email: fd.get("email"),
                subject: fd.get("subject"),
                message: fd.get("message"),
              });

              if (!parsed.success) {
                const next: FieldErrors = {};
                for (const issue of parsed.error.issues) {
                  const key = issue.path[0] as keyof FieldErrors;
                  if (key && !next[key]) next[key] = issue.message;
                }
                setErrors(next);
                return;
              }
              setErrors({});

              if (!EMAILJS.serviceId || !EMAILJS.templateId || !EMAILJS.publicKey) {
                toast.error("Email sending isn't configured yet.", {
                  description: `Please email me directly at ${PROFILE.email}.`,
                });
                return;
              }

              setSending(true);
              try {
                await emailjs.send(
                  EMAILJS.serviceId,
                  EMAILJS.templateId,
                  {
                    from_name: parsed.data.name,
                    from_email: parsed.data.email,
                    subject: parsed.data.subject,
                    message: parsed.data.message,
                  },
                  { publicKey: EMAILJS.publicKey },
                );
                form.reset();
                toast.success("Thanks! Your message has been sent.");
              } catch {
                toast.error("Message couldn't be sent.", {
                  description: `Please email me directly at ${PROFILE.email}.`,
                });
              } finally {
                setSending(false);
              }
            }}
          >
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute h-0 w-0 opacity-0"
􀀀            />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-medium">
                Name
                <input name="name" placeholder="Your name" className={fieldClass} />
                {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
              </label>
              <label className="grid gap-2 text-xs font-medium">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className={fieldClass}
                />
                {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
              </label>
            </div>
            <label className="grid gap-2 text-xs font-medium">
              Subject
              <input name="subject" placeholder="What is this about?" className={fieldClass} />
              {errors.subject && <span className="text-xs text-destructive">{errors.subject}</span>}
            </label>
            <label className="grid gap-2 text-xs font-medium">
              Message
              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project or role..."
                className={`resize-none ${fieldClass}`}
              />
              {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
            </label>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] disabled:opacity-70"
            >
              <Send size={16} /> {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Reveal>

      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 text-center">
        <div className="flex items-center gap-3">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="glass glass-hover grid h-10 w-10 place-items-center rounded-full text-primary"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="glass glass-hover grid h-10 w-10 place-items-center rounded-full text-primary"
          >
            <Mail size={17} />
          </a>
          <a
            href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
            aria-label="Phone"
            className="glass glass-hover grid h-10 w-10 place-items-center rounded-full text-primary"
          >
            <Phone size={17} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Designed &amp; Developed by <span className="text-primary">S VISHWESWARAN</span>
        </p>
      </div>
    </footer>
  );
}
