import Image from "next/image";
import Link from "next/link";

const CENTRES = [
  {
    name: "TSP - Braine-l'Alleud",
    description:
      "Du simulateur EVO au GT PRO, notre centre de Braine-l'Alleud vous accueille dans un cadre haut de gamme pour vivre la simulation comme jamais.",
    badge: "Flagship",
    src: "/images/centres/braine.avif",
    alt: "Centre The Sim Power Braine-l'Alleud",
  },
  {
    name: "TSP - Mons",
    description:
      "Une ambiance conviviale et familiale, ideale pour partager des sensations fortes entre amis ou en famille. Espace bar et convivialite garantie.",
    badge: "Convivial",
    src: "/images/centres/mons.jpg",
    alt: "Centre The Sim Power Mons",
  },
  {
    name: "TSP - Terminal 1",
    description:
      "Technologie, emotion et convivialite. Repoussez vos limites au volant de nos simulateurs derniere generation dans un univers unique.",
    badge: "Nouveau",
    src: "/images/centres/terminal1.webp",
    alt: "Centre The Sim Power Terminal 1",
  },
] as const;

export function Centres() {
  return (
    <section className="py-24 sm:py-32 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Nos centres de <span className="text-accent">pilotage</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Decouvrez nos centres de simulation haut de gamme, equipes des
            dernieres technologies.
          </p>
        </div>

        {/* Centre cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CENTRES.map((centre) => (
            <div
              key={centre.name}
              className="group relative overflow-hidden rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={centre.src}
                  alt={centre.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Badge */}
                <span className="absolute top-4 left-4 inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-accent/90 text-white rounded-full">
                  {centre.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 bg-surface">
                <h3 className="text-xl font-bold mb-2">
                  {centre.name}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {centre.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Decouvrir</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/centres"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
          >
            Voir tous nos centres
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
      </div>
    </section>
  );
}
