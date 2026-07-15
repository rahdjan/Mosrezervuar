export const siteConfig = {
  name: "МОСРЕЗЕРВУАР",
  fullName: "Московский Завод Резервуарного Оборудования",
  shortName: "МЗРО",
  description:
    "Производство резервуаров, дымовых труб, силосов и металлоконструкций любой сложности. Проектирование, изготовление, монтаж и обслуживание под ключ.",
  url: "https://mzrv.ru",
  legalName: "ООО «МОСРЕЗЕРВУАР»",
  email: "zakaz@mzrv.ru",
  emails: {
    orders: "zakaz@mzrv.ru",
    supply: "snab@mzrv.ru",
    accounting: "buh@mzrv.ru",
    hr: "rabota@mzrv.ru",
  },
  phones: [
    { display: "8 (495) 755-39-01", tel: "+74957553901" },
    { display: "8 (499) 755-62-12", tel: "+74997556212" },
  ],
  address: "г. Москва, Волоколамское шоссе, д. 108, эт. цок., пом. VIII, к. 2, оф. 76",
  workingHours: "Пн–Пт, 9:00–19:00",
  legal: {
    inn: "7733899462",
    ogrn: "5147746255113",
    registeredAt: "21.10.2014",
  },
  stats: {
    // Максимальный объём резервуара из каталога (см. lib/data/categories.ts, диапазон РВС).
    maxVolume: "5 000 м³",
  },
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Услуги", href: "/services" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "О заводе", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export const footerNav: NavLink[] = [
  { label: "Главная", href: "/" },
  { label: "Каталог", href: "/catalog" },
  { label: "Услуги", href: "/services" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "О заводе", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];
