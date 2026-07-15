import { IconGauge, IconKeyTurn, IconRuble } from "@/components/icons";

const reasons = [
  {
    icon: IconRuble,
    title: "Низкая цена",
    text: "Гарантируем низкую и прозрачную цену на всех этапах производства",
  },
  {
    icon: IconGauge,
    title: "Высокотехнологичное производство",
    text: "Собственная производственная площадка, современное сварочное и метрологическое оборудование, контроль качества на каждом этапе изготовления.",
  },
  {
    icon: IconKeyTurn,
    title: "Монтаж под ключ",
    text: "Проектирование, изготовление, доставка, монтаж и пусконаладка — берём на себя весь цикл работ и отвечаем за результат перед заказчиком.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-section">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
          Почему МосРезервуар
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {reasons.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col gap-4">
              <Icon className="h-10 w-10 text-rust" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold uppercase leading-tight text-ink">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-graphite">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
