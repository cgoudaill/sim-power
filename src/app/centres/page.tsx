import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Centres",
  description:
    "Decouvrez nos centres de simulation a Braine-l'Alleud, Mons et Terminal 1. Simulateurs haut de gamme et ambiance unique.",
};

const CENTRES = [
  {
    name: "TSP - Braine-l'Alleud",
    address: "Avenue de l'Artisanat 2A, 1420 Braine-l'Alleud",
    description:
      "Du simulateur EVO au GT PRO, notre centre de Braine-l'Alleud vous accueille dans un cadre haut de gamme pour vivre la simulation comme jamais. Equipements de derniere generation et ambiance premium.",
    highlights: [
      "Simulateurs EVO & GT PRO",
      "Cadre haut de gamme",
      "Parking facile",
    ],
    badge: "Flagship",
    src: "/images/centres/braine.avif",
    alt: "Centre The Sim Power Braine-l'Alleud",
  },
  {
    name: "TSP - Mons",
    address: "Mons, Belgique",
    description:
      "De l'EVO au GT PRO, notre centre de Mons vous accueille dans une ambiance conviviale et familiale, ideale pour partager des sensations fortes entre amis ou en famille. Espace bar et retransmissions sportives.",
    highlights: [
      "Ambiance familiale",
      "Espace bar",
      "Evenements sportifs en direct",
    ],
    badge: "Convivial",
    src: "/images/centres/mons.jpg",
    alt: "Centre The Sim Power Mons",
  },
  {
    name: "TSP - Terminal 1",
    address: "Terminal 1, Belgique",
    description:
      "Technologie, emotion et convivialite. Venez vivre des sensations inedites, partager des defis entre amis ou en famille, et repousser vos limites au volant de nos simulateurs derniere generation.",
    highlights: [
      "Derniere generation",
      "Experience immersive",
      "Defis & competitions",
    ],
    badge: "Nouveau",
    src: "/images/centres/terminal1.webp",
    alt: "Centre The Sim Power Terminal 1",
  },
] as const;

export default function CentresPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            Nos <span className="text-accent">centres</span>
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            Trois lieux d&apos;exception pour vivre la simulation automobile
          </p>
        </div>
      </section>

      {/* Centres list */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {CENTRES.map((centre, index) => (
              <div
                key={centre.name}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Centre image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 group/img">
                    <Image
                      src={centre.src}
                      alt={centre.alt}
                      fill
                      className="object-cover transition-transform duration-700 group/img-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-accent/90 text-white rounded-full">
                      {centre.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent rounded-full mb-4">
                    {centre.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    {centre.name}
                  </h2>
                  <p className="text-sm text-accent mb-4 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {centre.address}
                  </p>
                  <p className="text-muted leading-relaxed mb-6">
                    {centre.description}
                  </p>

                  <ul className="space-y-2">
                    {centre.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm"
                      >
                        <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
