import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CentresPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const CENTRE_KEYS = ["braine", "mons", "terminal1"] as const;

const CENTRE_IMAGES = {
  braine: "/images/centres/braine.avif",
  mons: "/images/centres/mons.jpg",
  terminal1: "/images/centres/terminal1.webp",
} as const;

export default async function CentresPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CentresContent />;
}

function CentresContent() {
  const t = useTranslations("CentresPage");

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

      {/* Centres list */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {CENTRE_KEYS.map((key, index) => (
              <div
                key={key}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Centre image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 group/img">
                    <Image
                      src={CENTRE_IMAGES[key]}
                      alt={t(`${key}.alt`)}
                      fill
                      className="object-cover transition-transform duration-700 group/img-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-accent/90 text-white rounded-full">
                      {t(`${key}.badge`)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent rounded-full mb-4">
                    {t(`${key}.badge`)}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    {t(`${key}.name`)}
                  </h2>
                  <p className="text-sm text-accent mb-4 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {t(`${key}.address`)}
                  </p>
                  <p className="text-muted leading-relaxed mb-6">
                    {t(`${key}.description`)}
                  </p>

                  <ul className="space-y-2">
                    {([1, 2, 3] as const).map((n) => (
                      <li
                        key={n}
                        className="flex items-center gap-2 text-sm"
                      >
                        <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {t(`${key}.highlight${n}`)}
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
