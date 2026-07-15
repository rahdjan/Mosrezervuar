export type CategoryId =
  | "reservuary"
  | "emkostnye"
  | "silosy"
  | "dymotruby"
  | "metallostruktury";

export type IconKey =
  | "tank-vertical"
  | "tank-horizontal"
  | "pipe"
  | "silo"
  | "equipment"
  | "frame"
  | "steel"
  | "certificate"
  | "key"
  | "gauge";

export interface Category {
  id: CategoryId;
  slug: CategoryId;
  name: string;
  title: string;
  description: string;
  icon: IconKey;
}

export const categories: Category[] = [
  {
    id: "reservuary",
    slug: "reservuary",
    name: "Резервуары, ёмкости и баки",
    title: "Резервуары, ёмкости и баки",
    description:
      "Вертикальные (РВС) и горизонтальные (РГСП, РГСН, РГД) резервуары, баки-аккумуляторы горячей воды (БАГВ) и подземные дренажные ёмкости (ЕП) объёмом от 1 до 5000 м³.",
    icon: "tank-vertical",
  },
  {
    id: "emkostnye",
    slug: "emkostnye",
    name: "Ёмкостные аппараты",
    title: "Ёмкостные аппараты",
    description:
      "Стальные ёмкостные аппараты для химической и пищевой промышленности: горизонтальные и вертикальные аппараты различных конструкций, в том числе с рубашкой обогрева.",
    icon: "equipment",
  },
  {
    id: "silosy",
    slug: "silosy",
    name: "Металлические силосы",
    title: "Металлические силосы",
    description:
      "Цельносварные стальные силосы для цемента, минерального порошка и зерна объёмом от 20 до 120 м³ в комплектации с лестницей, люком-лазом и ограждением.",
    icon: "silo",
  },
  {
    id: "dymotruby",
    slug: "dymotruby",
    name: "Дымовые трубы и газоходы",
    title: "Дымовые трубы и газоходы",
    description:
      "Проектирование и изготовление промышленных дымовых труб: самонесущие, фермённые, колонные, фасадные, на растяжках, мачтовые и многоствольные конструкции.",
    icon: "pipe",
  },
  {
    id: "metallostruktury",
    slug: "metallostruktury",
    name: "Металлоконструкции",
    title: "Металлоконструкции",
    description:
      "Производство металлоконструкций любой сложности: каркасы зданий, фермы, колонны, опоры, эстакады, ангары, склады, бункера и промышленные конструкции.",
    icon: "frame",
  },
];

export interface CatalogHighlight {
  id: string;
  name: string;
  shortName: string;
  description: string;
  range: string;
  href: string;
  icon: IconKey;
}

export const catalogHighlights: CatalogHighlight[] = [
  {
    id: "rvs",
    name: "Резервуары вертикальные стальные",
    shortName: "РВС",
    description: "Хранение нефтепродуктов, воды и пищевого сырья",
    range: "от 2 до 5000 м³",
    href: "/catalog/reservuary",
    icon: "tank-vertical",
  },
  {
    id: "rg",
    name: "Горизонтальные резервуары и баки",
    shortName: "РГСП / РГСН / РГД / БАГВ",
    description: "Подземные, наземные, двустенные и баки-аккумуляторы",
    range: "от 1 до 5000 м³",
    href: "/catalog/reservuary",
    icon: "tank-horizontal",
  },
  {
    id: "emkostnye",
    name: "Ёмкостные аппараты",
    shortName: "ГЭЭ / ВКЭ / ВПП",
    description: "Для химической и пищевой промышленности, с обогревом",
    range: "нерж. / углерод. сталь",
    href: "/catalog/emkostnye",
    icon: "equipment",
  },
  {
    id: "silosy",
    name: "Металлические силосы",
    shortName: "Силосы",
    description: "Для цемента, минерального порошка и зерна",
    range: "от 20 до 120 м³",
    href: "/catalog/silosy",
    icon: "silo",
  },
  {
    id: "dymotruby",
    name: "Дымовые трубы и газоходы",
    shortName: "Дымовые трубы",
    description: "Самонесущие, мачтовые, многоствольные",
    range: "проект под объект",
    href: "/catalog/dymotruby",
    icon: "pipe",
  },
  {
    id: "metallostruktury",
    name: "Металлоконструкции",
    shortName: "Металлоконструкции",
    description: "Каркасы, фермы, опоры, ангары, бункера",
    range: "любой сложности",
    href: "/catalog/metallostruktury",
    icon: "frame",
  },
];

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
