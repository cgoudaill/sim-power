import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const MEMBER_KEYS = ["member1", "member2", "member3", "member4"] as const;
const VALUE_KEYS = ["passion", "excellence", "innovation", "conviviality"] as const;
const MILESTONE_KEYS = ["milestone1", "milestone2", "milestone3", "milestone4"] as const;

const VALUE_ICONS = {
  passion: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  excellence: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  innovation: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  conviviality: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
} as const;

export default async function AProposPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations("AboutPage");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            {t("heroTitle")}{" "}
            <span className="text-accent">{t("heroTitleAccent")}</span>
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            {t("heroDescription")}
          </p>
        </div>
      </section>

      {/* Notre Equipe */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-center mb-4">
            {t("teamTitle")}{" "}
            <span className="text-accent">{t("teamTitleAccent")}</span>
          </h2>
          <p className="text-center text-muted mb-16 max-w-xl mx-auto">
            {t("teamDescription")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEMBER_KEYS.map((key, index) => (
              <div
                key={`${key}-${index}`}
                className="group relative bg-surface rounded-2xl border border-white/5 hover:border-accent/30 overflow-hidden transition-all duration-300"
              >
                {/* Avatar */}
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent-dark/20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-accent/15 rounded-full flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold">{t(`${key}.name`)}</h3>
                  <p className="text-sm text-accent font-semibold mb-2">
                    {t(`${key}.role`)}
                  </p>
                  <p className="text-xs text-muted leading-relaxed">
                    {t(`${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-center mb-16">
            {t("valuesTitle")}{" "}
            <span className="text-accent">{t("valuesTitleAccent")}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_KEYS.map((key) => (
              <div
                key={key}
                className="group p-6 bg-background rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                  {VALUE_ICONS[key]}
                </div>
                <h3 className="text-lg font-bold mb-2">{t(`${key}.title`)}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {t(`${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-center mb-16">
            {t("timelineTitle")}{" "}
            <span className="text-accent">{t("timelineTitleAccent")}</span>
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-accent/20 -translate-x-1/2" />

            <div className="space-y-12">
              {MILESTONE_KEYS.map((key, index) => (
                <div
                  key={key}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0
                      ? "sm:flex-row"
                      : "sm:flex-row-reverse sm:text-right"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-background" />

                  {/* Content */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                    <span className="text-2xl font-black text-accent">
                      {t(`${key}.year`)}
                    </span>
                    <h3 className="text-lg font-bold mt-1 mb-2">
                      {t(`${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {t(`${key}.description`)}
                    </p>
                  </div>

                  {/* Spacer */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
            {t("ctaTitle")}
            <span className="text-accent">{t("ctaTitleAccent")}</span>
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            {t("ctaDescription")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
          >
            {t("ctaButton")}
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
    </>
  );
}
