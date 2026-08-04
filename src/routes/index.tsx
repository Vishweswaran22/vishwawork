import { createFileRoute } from "@tanstack/react-router";
import { BackToTop, Loader, Navbar, ScrollProgress } from "@/components/portfolio/Chrome";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Portfolio,
  Services,
  Skills,
} from "@/components/portfolio/Sections";

const title = "S Vishweswaran — Full Stack Developer Portfolio";
const description =
  "Portfolio of S Vishweswaran, a Full Stack Developer and B.Com (IT) graduate from Madurai building modern web apps with React, Java, Spring Boot and MySQL.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "S Vishweswaran",
          jobTitle: "Full Stack Developer",
          email: "Vishweswaran22@gmail.com",
          telephone: "+91 6369167350",
          address: { "@type": "PostalAddress", addressLocality: "Madurai", addressRegion: "Tamil Nadu", addressCountry: "IN" },
          sameAs: ["https://www.linkedin.com/in/vishweswarans"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
