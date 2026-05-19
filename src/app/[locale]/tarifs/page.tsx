import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PricingPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const PRICING_TIERS = [
  { key: "tier1" as const, price: 13, popular: false },
  { key: "tier2" as const, price: 22, popular: true },
  { key: "tier3" as const, price: 29, popular: false },
] as const;

const SIMCOIN_FEATURE_KEYS = [
  "simcoinFeature1",
  "simcoinFeature2",
  "simcoinFeature3",
  "simcoinFeature4",
] as const;

export default async function TarifsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PricingContent />;
}

function PricingContent() {
  const t = useTranslations("PricingPage");

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

      {/* SimCoin section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-3xl border border-white/5 p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-10">
            {/* SimCoin visual */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-2xl shadow-accent/30 border-4 border-accent-light/30">
                <div className="text-center">
                  <p className="text-3xl font-black text-white">SIM</p>
                  <p className="text-xl font-bold text-white/80">COIN</p>
                </div>
              </div>
            </div>

            {/* SimCoin info */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-2xl sm:text-3xl font-black text-accent uppercase tracking-tight mb-4">
                {t("simcoinTitle")}
              </h2>
              <p className="text-muted leading-relaxed mb-2">
                {t("simcoinDescription")}
              </p>
              <p className="text-xl font-bold text-white mb-6">
                {t("simcoinEquation")}
              </p>

              <ul className="space-y-3 mb-6">
                {SIMCOIN_FEATURE_KEYS.map((key) => (
                  <li
                    key={key}
                    className="flex items-center gap-3 text-sm text-muted"
                  >
                    <svg
                      className="w-5 h-5 text-accent shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {t(key)}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-muted">
                {t("simcoinNote")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-center mb-4">
            {t("sessionsTitle")}{" "}
            <span className="text-accent">{t("sessionsTitleAccent")}</span>
          </h2>
          <p className="text-center text-muted mb-12">
            {t("sessionsDescription")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.key}
                className={`relative rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 ${
                  tier.popular
                    ? "bg-accent text-white shadow-2xl shadow-accent/30 scale-105"
                    : "bg-surface border border-white/5 hover:border-accent/30"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-accent text-xs font-bold uppercase tracking-wider rounded-full">
                    {t("popular")}
                  </span>
                )}

                <p
                  className={`text-sm font-medium uppercase tracking-wider mb-4 ${
                    tier.popular ? "text-white/80" : "text-muted"
                  }`}
                >
                  {t(`${tier.key}.duration`)}
                </p>

                <p className="text-5xl font-black mb-1">
                  {tier.price}
                  <span className="text-lg font-medium ml-1">SC</span>
                </p>

                <p
                  className={`text-sm mt-2 mb-6 ${
                    tier.popular ? "text-white/70" : "text-muted"
                  }`}
                >
                  {t(`${tier.key}.description`)}
                </p>

                <Link
                  href="/contact"
                  className={`inline-block w-full px-6 py-3 font-semibold text-sm rounded-full transition-all duration-300 ${
                    tier.popular
                      ? "bg-white text-accent hover:bg-white/90"
                      : "bg-accent hover:bg-accent-light text-white"
                  }`}
                >
                  {t("cta")}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted mt-8">
            {t("disclaimer")}
          </p>
        </div>
      </section>
    </>
  );
}
