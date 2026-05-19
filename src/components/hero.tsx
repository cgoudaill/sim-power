import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.avif')" }}
    >
      {/* Dark overlay + gradient fade to background at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-[#0f0f0f]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            {t("badge")}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight">
          <span className="text-white">{t("titleLine1")}</span>
          <br />
          <span className="text-accent">{t("titleLine2")}</span>
        </h1>

        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-white/60 uppercase tracking-wide">
          {t("subtitle")}
        </p>

        <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          {t("description")}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
          >
            {t("ctaPrimary")}
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
          <Link
            href="/tarifs"
            className="px-8 py-4 border border-white/20 hover:border-accent/50 text-white/80 hover:text-accent font-medium text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:bg-accent/5"
          >
            {t("ctaSecondary")}
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            { value: "3", label: t("statCentres") },
            { value: "15+", label: t("statSimulators") },
            { value: "1000+", label: t("statPilots") },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-accent">
                {stat.value}
              </p>
              <p className="text-xs text-white/50 uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
