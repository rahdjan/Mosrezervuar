import type { Metadata } from "next";
import { CategoryIcon } from "@/components/icons";
import { Certificates } from "@/components/sections/Certificates";
import { PageHeader } from "@/components/sections/PageHeader";
import { SteelStrip } from "@/components/sections/SteelStrip";
import { WhyUs } from "@/components/sections/WhyUs";
import { categories } from "@/lib/data/categories";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "О заводе",
  description:
    "Московский Завод Резервуарного Оборудования (МОСРЕЗЕРВУАР) — изготовление и монтаж всех типов резервуаров, баков и ёмкостей, дымовых труб и металлоконструкций. Разрешительная документация, ISO 9001.",
};

// Наши преимущества — дословно по MZRV_ZAVOD.md §2.
const advantages = [
  "Полная документация к произведённому оборудованию",
  "Доставка продукции авто- и железнодорожным транспортом",
  "Оперативное сервисное обслуживание произведённых резервуаров",
  "Изготовление нестандартной продукции по индивидуальному проекту",
  "Ведение сделки «от и до» с закреплённым специалистом",
  "Монтаж резервуаров и металлоконструкций в короткие сроки",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="О заводе"
        title={siteConfig.fullName}
        description="Изготовление и монтаж всех типов резервуаров, баков и ёмкостей, дымовых труб и металлоконструкций для промышленных предприятий."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-8 lg:py-24">
          <p className="text-base leading-relaxed text-graphite">
            {siteConfig.fullName} ({siteConfig.shortName}) специализируется на изготовлении всех
            типов резервуаров, баков и ёмкостей, дымовых труб и металлоконструкций и занимает
            лидирующие позиции на российском рынке. Мы работаем с промышленными предприятиями и
            частными организациями.
          </p>
          <p className="mt-6 text-base leading-relaxed text-graphite">
            Постоянно действующий производственный цех и штат обученных профильных специалистов с
            опытом позволяют вести несколько крупных заказов одновременно. Наши сотрудники
            консультируют заказчика как по вопросам производства, так и по дальнейшей эксплуатации
            оборудования. Высокотехнологичное оборудование обеспечивает сжатые сроки при высоком
            качестве продукции.
          </p>
          <p className="mt-6 text-base leading-relaxed text-graphite">
            Перед запуском в работу каждый заказ комплексно прорабатывается, а все технические
            составляющие согласуются с клиентом. Главная задача завода — качественная продукция в
            кратчайшие сроки.
          </p>
        </div>
      </section>

      <SteelStrip />

      <WhyUs />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            Наши преимущества
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((text, i) => (
              <li key={text} className="flex flex-col gap-3 bg-white p-6">
                <span className="font-mono text-sm text-rust">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-ink">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 md:px-8 lg:pb-24">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            Что мы производим
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <li key={category.id} className="flex flex-col gap-3 border border-line p-5">
                <CategoryIcon icon={category.icon} className="h-9 w-9 text-rust" strokeWidth={1.5} />
                <h3 className="font-display text-base font-bold uppercase leading-tight text-ink">
                  {category.name}
                </h3>
                <p className="text-sm leading-relaxed text-graphite">{category.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-section">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-16">
          <div className="border-l-[3px] border-rust bg-white p-6 md:p-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-rust">
              Регистр проверенных поставщиков
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-graphite">
              Завод включён в Регистр проверенных поставщиков. Свидетельство подтверждает соблюдение
              законодательства РФ в области поставок продукции, работ и услуг и способность поставлять
              продукцию требуемого качества в сроки по контрактам, а также даёт право участвовать в
              тендерах и государственных закупках.
            </p>
          </div>
        </div>
      </section>

      <Certificates />

      <section className="bg-section">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-graphite">
            Реквизиты и контакты
          </h2>
          <dl className="mt-4 grid grid-cols-1 gap-4 font-mono text-sm text-ink sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-widest text-graphite/70">
                Полное наименование
              </dt>
              <dd className="mt-1">{siteConfig.fullName}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-graphite/70">Юридическое лицо</dt>
              <dd className="mt-1">{siteConfig.legalName}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-graphite/70">ИНН</dt>
              <dd className="mt-1">{siteConfig.legal.inn}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-graphite/70">ОГРН</dt>
              <dd className="mt-1">{siteConfig.legal.ogrn}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-graphite/70">
                Дата регистрации
              </dt>
              <dd className="mt-1">{siteConfig.legal.registeredAt}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-graphite/70">Офис</dt>
              <dd className="mt-1">{siteConfig.address}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-graphite/70">Телефоны</dt>
              <dd className="mt-1 flex flex-col gap-1">
                {siteConfig.phones.map((phone) => (
                  <a key={phone.tel} href={`tel:${phone.tel}`} className="hover:text-rust">
                    {phone.display}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-graphite/70">График работы</dt>
              <dd className="mt-1">
                {siteConfig.workingHours}
                <span className="mt-1 block text-xs text-graphite">
                  Заявки на почту — круглосуточно
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-graphite/70">Почта</dt>
              <dd className="mt-1 flex flex-col gap-1">
                <a href={`mailto:${siteConfig.emails.orders}`} className="hover:text-rust">
                  {siteConfig.emails.orders} — заказы
                </a>
                <a href={`mailto:${siteConfig.emails.supply}`} className="hover:text-rust">
                  {siteConfig.emails.supply} — снабжение
                </a>
                <a href={`mailto:${siteConfig.emails.accounting}`} className="hover:text-rust">
                  {siteConfig.emails.accounting} — бухгалтерия
                </a>
                <a href={`mailto:${siteConfig.emails.hr}`} className="hover:text-rust">
                  {siteConfig.emails.hr} — отдел кадров
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
