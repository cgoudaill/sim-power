import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Simulateurs } from "@/components/simulateurs";
import { Centres } from "@/components/centres";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Simulateurs />

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
            Pret a prendre le <span className="text-accent">volant</span> ?
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Reservez votre session des maintenant et plongez dans l&apos;univers
            du sim racing professionnel.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
          >
            Reservez votre session
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      <Centres />
    </>
  );
}
