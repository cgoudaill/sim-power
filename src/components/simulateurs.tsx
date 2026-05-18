import Image from "next/image";
import Link from "next/link";

const SIMULATEURS = [
  {
    src: "/images/simulateurs/sim-1.webp",
    alt: "Cockpit simulateur triple ecran avec volant Simucube",
    title: "Cockpit Triple Ecran",
    description:
      "Immersion totale avec nos postes equipes de trois ecrans incurves, volant Direct Drive Simucube et pedalier hydraulique.",
  },
  {
    src: "/images/simulateurs/sim-2.webp",
    alt: "Pedalier professionnel haut de gamme",
    title: "Pedalier Pro",
    description:
      "Freinage progressif et ressenti ultra-realiste grace a nos pedaliers professionnels avec cellule de charge.",
  },
  {
    src: "/images/simulateurs/sim-3.webp",
    alt: "Pedalier et cockpit de course vu de pres",
    title: "Chassis Racing",
    description:
      "Des chassis rigides en aluminium qui reproduisent fidlement la position de conduite d'un veritable bolide de course.",
  },
  {
    src: "/images/simulateurs/sim-4.webp",
    alt: "Volant Direct Drive Simucube gros plan",
    title: "Volant Direct Drive",
    description:
      "Volants Simucube a retour de force, pour sentir chaque vibreur, chaque sous-virage avec une precision chirurgicale.",
  },
] as const;

export function Simulateurs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Nos <span className="text-accent">simulateurs</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Du volant Direct Drive aux triples ecrans, decouvrez un
            equipement professionnel concu pour des sensations au plus
            proche de la realite.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SIMULATEURS.map((sim) => (
            <div
              key={sim.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={sim.src}
                  alt={sim.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-bold text-white mb-1">
                  {sim.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {sim.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
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
      </div>
    </section>
  );
}
