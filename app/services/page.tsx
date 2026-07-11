import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/sections/PageHeader";
import {
  IconArrowRight,
  IconCertificate,
  IconGauge,
  IconKeyTurn,
  IconSteel,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Полный цикл работ: проектирование, изготовление, доставка, монтаж и сервисное обслуживание резервуаров, дымовых труб, силосов и металлоконструкций.",
};

const services = [
  {
    icon: IconCertificate,
    step: "01",
    title: "Проектирование",
    text: "Разработка проектной и рабочей документации (КМ, КМД), прочностные расчёты, согласование объёма и комплектации с учётом требований ГОСТ и технических условий заказчика.",
  },
  {
    icon: IconSteel,
    step: "02",
    title: "Изготовление",
    text: "Производство на собственной площадке: резка и вальцовка металла, сварка, контроль швов, антикоррозийная защита. Любой объём — от единичного резервуара до серийной партии.",
  },
  {
    icon: IconKeyTurn,
    step: "03",
    title: "Доставка и монтаж",
    text: "Доставка готовых конструкций на объект, монтаж резервуаров, дымовых труб, силосов и металлоконструкций «под ключ» силами собственных монтажных бригад.",
  },
  {
    icon: IconGauge,
    step: "04",
    title: "Сервисное обслуживание",
    text: "Диагностика технического состояния, плановое и внеплановое обслуживание, ремонт и продление срока эксплуатации резервуарного парка и оборудования.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Услуги"
        title="Полный цикл — от чертежа до объекта"
        description="Берём на себя проектирование, изготовление, монтаж и обслуживание резервуаров, дымовых труб, силосов и металлоконструкций любой сложности."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {services.map(({ icon: Icon, step, title, text }) => (
              <div
                key={step}
                className="flex flex-col gap-4 border border-line border-t-[3px] border-t-transparent p-6 transition-all hover:border-t-rust hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-10 w-10 text-rust" strokeWidth={1.5} />
                  <span className="font-mono text-sm text-graphite/60">{step}</span>
                </div>
                <h3 className="font-display text-xl font-bold uppercase leading-tight text-ink">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-graphite">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Нужен расчёт по вашей задаче?
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-graphite">
              Опишите параметры объекта — мы подготовим техническое решение и стоимость в течение
              1 рабочего дня.
            </p>
          </div>
          <Button
            size="lg"
            className="shrink-0 rounded-sm bg-rust px-6 text-base font-medium text-white hover:bg-rust-light"
            render={
              <Link href="/contacts">
                Получить расчёт
                <IconArrowRight className="ml-1 h-4 w-4" />
              </Link>
            }
          />
        </div>
      </section>
    </>
  );
}
