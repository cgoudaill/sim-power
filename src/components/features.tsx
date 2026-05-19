import { useTranslations } from "next-intl";

const FEATURE_KEYS = ["biggestChoice", "advancedTech", "drivingCourses", "uniqueVenue"] as const;

const FEATURE_ICONS = {
  biggestChoice: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  advancedTech: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  drivingCourses: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  uniqueVenue: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  ),
} as const;

export function Features() {
  const t = useTranslations("Features");

  return (
    <section className="py-24 sm:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            {t("title")}{" "}
            <span className="text-accent">{t("titleAccent")}</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-6 text-sm text-accent font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              {t("tagCoaching")}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              {t("tagImmersion")}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              {t("tagCustom")}
            </span>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FEATURE_KEYS.map((key) => (
            <div
              key={key}
              className="group p-8 bg-background rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5 group-hover:bg-accent/20 transition-colors">
                {FEATURE_ICONS[key]}
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-3">
                {t(`${key}.title`)}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {t(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
