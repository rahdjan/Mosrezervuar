import type { Metadata } from "next";
import { CategoryIcon } from "@/components/icons";
import { PageHeader } from "@/components/sections/PageHeader";
import { SteelStrip } from "@/components/sections/SteelStrip";
import { WhyUs } from "@/components/sections/WhyUs";
import { categories } from "@/lib/data/categories";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "О заводе",
  description:
    "МОСРЕЗЕРВУАР — производство резервуаров, дымовых труб, силосов и металлоконструкций с 2014 года. ИНН, ОГРН и реквизиты завода.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="О заводе"
        title={siteConfig.fullName}
        description={`${siteConfig.shortName} проектирует, изготавливает и монтирует резервуарное оборудование, дымовые трубы, силосы и металлоконструкции для промышленных и государственных заказчиков с ${siteConfig.foundedYear} года.`}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-8 lg:py-24">
          <p className="text-base leading-relaxed text-graphite">
            Завод специализируется на изготовлении вертикальных и горизонтальных стальных
            резервуаров, дымовых труб и газоходов, силосов для сыпучих материалов, а также
            металлоконструкций любой сложности — от каркасов зданий до технологических эстакад и
            площадок обслуживания.
          </p>
          <p className="mt-6 text-base leading-relaxed text-graphite">
            Производственная база и собственные монтажные бригады позволяют выполнять полный цикл
            работ: от проектирования и расчёта до изготовления, доставки, монтажа и последующего
            сервисного обслуживания. За время работы выполнено более {siteConfig.stats.projectsDone}{" "}
            проектов, в том числе для крупных промышленных предприятий и государственных
            компаний.
          </p>
        </div>
      </section>

      <SteelStrip />

      <WhyUs />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">
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
          <h2 className="font-mono text-xs uppercase tracking-widest text-graphite">
            Реквизиты
          </h2>
          <dl className="mt-4 grid grid-cols-1 gap-4 font-mono text-sm text-ink sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-widest text-graphite/70">
                Полное наименование
              </dt>
              <dd className="mt-1">{siteConfig.fullName}</dd>
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
              <dt className="text-xs uppercase tracking-widest text-graphite/70">Email</dt>
              <dd className="mt-1">{siteConfig.email}</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
