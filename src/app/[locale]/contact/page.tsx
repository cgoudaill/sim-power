import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations("ContactPage");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            <span className="text-accent">{t("heroTitle")}</span>
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            {t("heroDescription")}
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="bg-surface rounded-2xl border border-white/5 p-8">
              <h2 className="text-2xl font-bold text-accent uppercase tracking-wide mb-8">
                {t("coordinatesTitle")}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">
                      {t("addressLabel")}
                    </p>
                    <p className="text-sm text-muted">
                      Avenue de l&apos;Artisanat 2A,
                      <br />
                      1420 Braine-l&apos;Alleud
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">
                      {t("phoneLabel")}
                    </p>
                    <a
                      href="tel:+32494365913"
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      +32 494 36 59 13
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">
                      {t("emailLabel")}
                    </p>
                    <a
                      href="mailto:info@thesimpower.com"
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      info@thesimpower.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mt-8 aspect-video rounded-xl overflow-hidden border border-white/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1264.35!2d4.3613583!3d50.6961183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3ce135d08dd73%3A0x8913419f3d71110b!2sAv.%20de%20l&#39;Artisanat%202A%2C%201420%20Braine-l&#39;Alleud!5e0!3m2!1sfr!2sbe!4v1716062400000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation The Sim Power - Braine-l'Alleud"
                />
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-accent uppercase tracking-wide mb-8">
                {t("formTitle")}
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      {t("firstName")}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white placeholder-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder={t("firstNamePlaceholder")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      {t("lastName")}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white placeholder-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder={t("lastNamePlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white placeholder-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder={t("emailPlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white placeholder-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    placeholder={t("messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
                >
                  {t("send")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
