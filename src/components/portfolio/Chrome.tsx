import { useEffect, useState } from "react";
import { ArrowUp, Menu, X } from "lucide-react";
import { NAV_LINKS } from "./data";
import { useActiveSection } from "./hooks";
import { cn } from "@/lib/utils";

const ids = NAV_LINKS.map((l) => l.id);

export function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-60 h-0.5 bg-transparent">
      <div className="h-full bg-gradient-primary transition-[width] duration-150" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function Navbar() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass py-2 backdrop-blur-xl" : "py-4",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          S<span className="text-primary">V</span>
          <span className="ml-2 hidden text-sm font-medium text-muted-foreground sm:inline">
            Vishweswaran
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active === l.id
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105 sm:inline-flex"
          >
            Hire Me
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="glass grid h-10 w-10 place-items-center rounded-full lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="glass mx-5 mt-3 grid gap-1 rounded-2xl p-3 lg:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                  active === l.id ? "bg-primary/15 text-primary" : "text-muted-foreground",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="glass glass-hover fixed right-5 bottom-5 z-50 grid h-12 w-12 place-items-center rounded-full text-primary"
    >
      <ArrowUp size={20} />
    </button>
  );
}

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-100 grid place-items-center bg-background transition-opacity duration-500",
        done && "pointer-events-none opacity-0",
      )}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="h-14 w-14 animate-spin rounded-full border-2 border-border border-t-primary" />
        <p className="font-display text-sm tracking-[0.35em] text-muted-foreground">LOADING</p>
      </div>
    </div>
  );
}
