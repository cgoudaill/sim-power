import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Decouvrez nos offres de simulation automobile : sessions de pilotage, cours personnalises et evenements sur mesure.",
};

const SERVICES = [
  {
    title: "Sessions de pilotage",
    description:
      "Offrez-vous une experience de conduite unique avec nos simulateurs automobiles haut de gamme. Choisissez votre voiture, votre circuit et vivez des sensations exceptionnelles.",
    cta: "Reserver une session",
    href: "/contact",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Cours de pilotage",
    description:
      "Perfectionnez vos competences de conduite avec nos cours de pilotage personnalises. Encadrement par des pilotes professionnels, programme adapte a votre niveau.",
    cta: "Reserver un cours",
    href: "/contact",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Evenements personnalises",
    description:
      "Organisez des evenements uniques tels que des team buildings, des anniversaires ou des competitions entre amis. Nous creons une experience sur mesure pour vos groupes.",
    cta: "Nous contacter",
    href: "/contact",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
] as const;

const WHY_US = [
  {
    title: "Technologie de pointe",
    description: "Simulateurs equipes des meilleurs volants Direct Drive Simucube et pedaliers haut de gamme.",
    icon: "cpu",
  },
  {
    title: "Encadrement pro",
    description: "Une equipe passionnee, avec des pilotes reels pour vous guider et vous faire progresser.",
    icon: "users",
  },
  {
    title: "Flexibilite & Reservation",
    description: "Reservez facilement via votre profil en ligne et gerez vos sessions en toute autonomie.",
    icon: "calendar",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            Nos <span className="text-accent">services</span>
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            Decouvrez nos offres de simulation automobile haut de gamme
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon side */}
                <div className="w-full lg:w-1/3 flex justify-center">
                  <div className="w-32 h-32 bg-accent/10 rounded-3xl flex items-center justify-center text-accent border border-accent/20">
                    {service.icon}
                  </div>
                </div>

                {/* Content side */}
                <div className="w-full lg:w-2/3 bg-surface rounded-2xl p-8 border border-white/5">
                  <h2 className="text-2xl font-bold text-accent uppercase tracking-wide mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                  >
                    {service.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-center mb-16">
            Pourquoi choisir{" "}
            <span className="text-accent">The Sim Power</span> ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="text-center p-8 bg-background rounded-2xl border border-white/5"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-5">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
