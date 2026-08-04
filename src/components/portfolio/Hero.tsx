import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { PROFILE, ROLES } from "./data";
import { useTyping } from "./hooks";
import { Particles } from "./Particles";
import { downloadResume } from "./resume";

export function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="section-halo pointer-events-none absolute inset-0" />
      <Particles />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-ring" />
            Available for work
          </span>

          <h1 className="font-display mt-6 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-gradient">{PROFILE.name}</span>
          </h1>

          <p className="mt-4 font-display text-xl font-semibold text-primary md:text-2xl">
            {typed}
            <span className="animate-caret ml-0.5 font-normal">|</span>
          </p>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            A passionate B.Com (IT) graduate who has successfully completed Full Stack Development
            training and is eager to build modern, scalable, and user-friendly web applications. I
            enjoy solving real-world problems using modern technologies and continuously expanding
            my technical expertise.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={downloadResume}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              <Download size={17} /> Download Resume
            </button>
            <a
              href="#contact"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              <Mail size={17} /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="glass glass-hover grid h-11 w-11 place-items-center rounded-full text-primary"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Email"
              className="glass glass-hover grid h-11 w-11 place-items-center rounded-full text-primary"
            >
              <Mail size={18} />
            </a>
            <a
              href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
              aria-label="Phone"
              className="glass glass-hover grid h-11 w-11 place-items-center rounded-full text-primary"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="animate-float relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-primary opacity-25 blur-3xl" />
            <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-full border-2 border-primary/60 shadow-[var(--shadow-glow)] sm:w-72">
              <img
                src={profileImg}
                alt="Portrait of S Vishweswaran, Full Stack Developer"
                width={369}
                height={800}
                className="h-full w-full scale-125 object-cover object-[50%_12%]"
              />

            </div>
          </div>

          <div className="glass glass-hover mt-8 rounded-2xl p-5">
            <p className="font-display text-sm font-semibold">B.Com (IT) Graduate · 2025</p>
            <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin size={13} className="shrink-0 text-primary" /> {PROFILE.location}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Java", "Spring Boot", "React.js", "MySQL"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
