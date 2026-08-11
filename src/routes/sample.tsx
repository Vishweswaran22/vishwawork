import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Section, Reveal } from "@/components/portfolio/Section";

const title = "Sample Page — S Vishweswaran";
const description =
  "A sample page on S Vishweswaran's portfolio, built with the same dark glassmorphism design system.";

export const Route = createFileRoute("/sample")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SamplePage,
});

const CARDS = [
  { title: "Glass Card", text: "Reusable frosted surface with subtle border and blur." },
  { title: "Reveal Animation", text: "Content fades in as it scrolls into the viewport." },
  { title: "Gradient Accent", text: "Electric blue gradient used for emphasis and CTAs." },
];

function SamplePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <main className="pt-24">
        <Section
          id="sample"
          eyebrow="Sample"
          title={
            <>
              A <span className="text-primary">sample</span> page
            </>
          }
          subtitle="Placeholder content using the portfolio's design system — tell me what this page should really hold."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {CARDS.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="glass glass-hover h-full rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              <ArrowLeft size={16} /> Back to portfolio
            </Link>
          </Reveal>
        </Section>
      </main>
    </div>
  );
}
