import type { ReactNode } from "react";
import { useReveal } from "./hooks";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative mx-auto max-w-7xl px-5 py-20 md:py-28", className)}>
      <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          {eyebrow}
        </span>
        <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-balance md:text-4xl">
          {title}
        </h2>
        {subtitle && <p className="mt-3 text-sm text-muted-foreground md:text-base">{subtitle}</p>}
      </Reveal>
      {children}
    </section>
  );
}
