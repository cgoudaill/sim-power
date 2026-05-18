import Link from "next/link";

const CENTRES = [
  {
    name: "TSP - Braine-l'Alleud",
    description:
      "Du simulateur EVO au GT PRO, notre centre de Braine-l'Alleud vous accueille dans un cadre haut de gamme pour vivre la simulation comme jamais.",
    badge: "Flagship",
    gradient: "from-accent/80 to-accent-dark/80",
  },
  {
    name: "TSP - Mons",
    description:
      "Une ambiance conviviale et familiale, ideale pour partager des sensations fortes entre amis ou en famille. Espace bar et convivialite garantie.",
    badge: "Convivial",
    gradient: "from-accent-dark/80 to-amber-900/80",
  },
  {
    name: "TSP - Terminal 1",
    description:
      "Technologie, emotion et convivialite. Repoussez vos limites au volant de nos simulateurs derniere generation dans un univers unique.",
    badge: "Nouveau",
    gradient: "from-amber-900/80 to-orange-950/80",
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
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${centre.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-8 bg-surface group-hover:bg-transparent transition-colors duration-500">
                {/* Badge */}
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent rounded-full mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">
                  {centre.badge}
                </span>

                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                  {centre.name}
                </h3>

                <p className="text-sm text-muted group-hover:text-white/80 leading-relaxed transition-colors duration-500">
                  {centre.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-accent group-hover:text-white text-sm font-semibold transition-colors duration-500">
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
