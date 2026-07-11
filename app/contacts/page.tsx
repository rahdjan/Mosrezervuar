import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Контакты МОСРЕЗЕРВУАР: телефоны, email для заказов и реквизиты компании (ИНН, ОГРН) для расчёта стоимости резервуаров, труб, силосов и металлоконструкций.",
};

export default function ContactsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Контакты"
        title="Свяжитесь с нами"
        description="Позвоните, напишите на email или используйте реквизиты ниже для оформления договора."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 md:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
              Связаться с нами
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-graphite">
              Наши инженеры ответят на вопросы и подготовят расчёт в течение 1 рабочего дня.
            </p>

            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-graphite">
                Телефоны
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone.tel}
                    href={`tel:${phone.tel}`}
                    className="font-mono text-2xl font-medium text-ink transition-colors hover:text-rust sm:text-3xl"
                  >
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-graphite">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 inline-block font-mono text-2xl text-rust transition-colors hover:text-rust-light sm:text-3xl"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="aspect-[4/3] w-full border border-line bg-section">
              <svg
                viewBox="0 0 400 300"
                className="h-full w-full"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label="Схема расположения производственной площадки"
              >
                <defs>
                  <pattern id="map-grid" width="25" height="25" patternUnits="userSpaceOnUse">
                    <path d="M0 0H25V25" fill="none" stroke="#D4D9DF" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="#F0F2F4" />
                <rect width="400" height="300" fill="url(#map-grid)" />
                <circle cx="200" cy="150" r="6" fill="#C0392B" />
                <circle cx="200" cy="150" r="16" fill="none" stroke="#C0392B" strokeWidth="1.5" strokeDasharray="4 4" />
                <text
                  x="200"
                  y="190"
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                  fontSize="13"
                  fill="#6B7C8D"
                  letterSpacing="1"
                >
                  МОСКВА, ПРОИЗВОДСТВЕННАЯ ПЛОЩАДКА
                </text>
              </svg>
            </div>

            <div className="border border-line p-6">
              <h2 className="font-mono text-xs uppercase tracking-widest text-graphite">
                Реквизиты
              </h2>
              <dl className="mt-4 flex flex-col gap-3 font-mono text-[13px] text-ink">
                <div className="flex flex-wrap justify-between gap-2 border-b border-line pb-3">
                  <dt className="text-graphite">Телефоны</dt>
                  <dd className="flex flex-col items-end gap-1 text-right">
                    {siteConfig.phones.map((phone) => (
                      <a
                        key={phone.tel}
                        href={`tel:${phone.tel}`}
                        className="text-rust hover:text-rust-light"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2 border-b border-line pb-3">
                  <dt className="text-graphite">Email для заказов</dt>
                  <dd>
                    <a href={`mailto:${siteConfig.email}`} className="text-rust hover:text-rust-light">
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2 border-b border-line pb-3">
                  <dt className="text-graphite">Полное наименование</dt>
                  <dd className="text-right">{siteConfig.fullName}</dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2 border-b border-line pb-3">
                  <dt className="text-graphite">ИНН</dt>
                  <dd>{siteConfig.legal.inn}</dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2 border-b border-line pb-3">
                  <dt className="text-graphite">ОГРН</dt>
                  <dd>{siteConfig.legal.ogrn}</dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2">
                  <dt className="text-graphite">Зарегистрирована</dt>
                  <dd>{siteConfig.legal.registeredAt}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
