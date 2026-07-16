import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/sections/PageHeader";
import { WhyUs } from "@/components/sections/WhyUs";
import {
  CategoryIcon,
  IconArrowRight,
  IconCertificate,
  IconGauge,
  IconKeyTurn,
  IconSteel,
} from "@/components/icons";
import { categories } from "@/lib/data/categories";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Полный цикл работ: проектирование, изготовление, доставка авто- и ж/д транспортом, монтаж собственными бригадами и сервисное обслуживание резервуаров, дымовых труб, силосов и металлоконструкций.",
};

// Этапы работ — по фактам из раздела «О заводе» (app/about/page.tsx) и MZRV_ZAVOD.md §2.
const services = [
  {
    icon: IconCertificate,
    step: "01",
    title: "Проектирование",
    text: "Консультируем по вопросам производства и дальнейшей эксплуатации, комплексно прорабатываем каждый заказ и согласуем все технические составляющие с заказчиком. Разработка проектной и рабочей документации (КМ, КМД), прочностные расчёты по ГОСТ и техническим условиям.",
  },
  {
    icon: IconSteel,
    step: "02",
    title: "Изготовление",
    text: "Производство на собственной площадке: резка и вальцовка металла, сварка, контроль швов, антикоррозийная защита. Любой объём — от единичного изделия до серийной партии, в том числе нестандартная продукция по индивидуальному проекту.",
  },
  {
    icon: IconKeyTurn,
    step: "03",
    title: "Доставка и монтаж",
    text: "Доставка готовых конструкций авто- и железнодорожным транспортом. Монтаж резервуаров, дымовых труб, силосов и металлоконструкций «под ключ» силами собственных монтажных бригад в короткие сроки.",
  },
  {
    icon: IconGauge,
    step: "04",
    title: "Сервисное обслуживание",
    text: "Оперативное сервисное обслуживание произведённого оборудования: диагностика технического состояния, плановое и внеплановое обслуживание, ремонт и продление срока эксплуатации резервуарного парка.",
  },
];

// Дополнительные услуги — по данным разделов каталога mzrv.ru.
const extraServices = [
  {
    icon: IconKeyTurn,
    title: "Монтаж",
    text: "Монтаж металлоконструкций, дымовых труб и газоходов, резервуаров и силосов силами собственных бригад — на объекте заказчика по всей России.",
  },
  {
    icon: IconGauge,
    title: "Теплоизоляционные работы",
    text: "Тепловая изоляция трубопроводов, ёмкостей, теплотрасс и промышленных установок с защитным покрытием из металлических листов.",
  },
  {
    icon: IconSteel,
    title: "Плазменная резка металла",
    text: "Резка конструкционных, нержавеющих и цветных металлов толщиной от 1 до 100 мм с высокой точностью.",
  },
  {
    icon: IconSteel,
    title: "Резка металла на ленточнопильном станке",
    text: "Точная резка листа, профиля, труб и пакетов заготовок любых марок стали — точность 0,1–1,5 мм, ровный рез без заусенцев.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Услуги"
        title="Полный цикл — от чертежа до сдачи объекта"
        description="Берём на себя проектирование, изготовление, доставку, монтаж и обслуживание резервуаров, дымовых труб, силосов и металлоконструкций любой сложности."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            Как мы работаем
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-graphite">
            Ведём сделку «от и до» с закреплённым специалистом — от первой консультации до
            сервисного обслуживания готового объекта. Главная задача завода — качественная
            продукция в кратчайшие сроки.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
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

      <section className="bg-section">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            Услуги по направлениям
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-graphite">
            Полный цикл работ применяем к каждому направлению производства. Выберите категорию,
            чтобы посмотреть продукцию и характеристики.
          </p>
          <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/catalog/${category.slug}`}
                  className="group flex h-full flex-col gap-3 bg-white p-6 transition-colors hover:bg-section"
                >
                  <CategoryIcon
                    icon={category.icon}
                    className="h-9 w-9 text-rust"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display text-base font-bold uppercase leading-tight text-ink">
                    {category.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-graphite">{category.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-2 font-mono text-xs uppercase tracking-widest text-rust">
                    В каталог
                    <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            Дополнительные услуги
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {extraServices.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <Icon className="h-9 w-9 shrink-0 text-rust" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-lg font-bold uppercase leading-tight text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />

      <section className="bg-steel-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Нужен расчёт по вашей задаче?
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-graphite">
              Опишите параметры объекта — мы подготовим техническое решение и стоимость в течение
              1 рабочего дня. Реализованные работы можно посмотреть в портфолио.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-sm bg-rust px-6 text-base font-medium text-white hover:bg-rust-light"
              render={
                <Link href="/contacts">
                  Получить расчёт
                  <IconArrowRight className="ml-1 h-4 w-4" />
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="rounded-sm border-white/20 bg-transparent px-6 text-base font-medium text-white hover:bg-white/10 hover:text-white"
              render={<Link href="/portfolio">Смотреть проекты</Link>}
            />
          </div>
        </div>
      </section>
    </>
  );
}
