import type { Metadata } from "next";
import { IconArrowRight } from "@/components/icons";
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
        description="Позвоните или напишите нам на электронную почту."
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
                Email для заказов
              </p>
              <a
                href={`mailto:${siteConfig.emails.orders}`}
                className="mt-3 inline-block font-mono text-2xl text-rust transition-colors hover:text-rust-light sm:text-3xl"
              >
                {siteConfig.emails.orders}
              </a>
              <div className="mt-4 flex flex-col gap-1 font-mono text-sm text-graphite">
                <a href={`mailto:${siteConfig.emails.supply}`} className="hover:text-rust">
                  {siteConfig.emails.supply} — отдел снабжения
                </a>
                <a href={`mailto:${siteConfig.emails.accounting}`} className="hover:text-rust">
                  {siteConfig.emails.accounting} — бухгалтерия
                </a>
                <a href={`mailto:${siteConfig.emails.hr}`} className="hover:text-rust">
                  {siteConfig.emails.hr} — отдел кадров
                </a>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-graphite">Офис</p>
              <p className="mt-3 text-base leading-relaxed text-ink">{siteConfig.address}</p>
            </div>

            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-graphite">
                График работы
              </p>
              <p className="mt-3 text-base text-ink">{siteConfig.workingHours}</p>
              <p className="mt-1 text-sm text-graphite">Заявки на почту принимаются круглосуточно.</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <a
              href={siteConfig.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/3] w-full overflow-hidden border border-line bg-section transition-colors hover:border-rust"
              aria-label="Открыть расположение офиса на Волоколамском шоссе, 108 в Яндекс.Картах"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/office-map.png"
                alt="Карта: офис МОСРЕЗЕРВУАР, Москва, Волоколамское шоссе, 108"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-sm bg-white/95 px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-widest text-ink shadow-sm transition-colors group-hover:text-rust">
                Открыть в Яндекс.Картах
                <IconArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>

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
                  <dt className="text-graphite">Юридическое лицо</dt>
                  <dd className="text-right">{siteConfig.legalName}</dd>
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
