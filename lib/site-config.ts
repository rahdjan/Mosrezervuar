export const siteConfig = {
  name: "МОСРЕЗЕРВУАР",
  fullName: "Московский Завод Резервуарного Оборудования",
  shortName: "МЗРО",
  description:
    "Производство резервуаров, дымовых труб, силосов и металлоконструкций любой сложности. Проектирование, изготовление, монтаж и обслуживание под ключ.",
  url: "https://mzrv.ru",
  email: "zakaz@mzrv.ru",
  phones: [
    { display: "8 (495) 755-39-01", tel: "+74957553901" },
    { display: "8 (499) 755-62-12", tel: "+74997556212" },
  ],
  foundedYear: 2014,
  legal: {
    inn: "7733899462",
    ogrn: "5147746255113",
    registeredAt: "21.10.2014",
  },
  stats: {
    yearsOnMarket: "10+",
    projectsDone: "500+",
    productTypes: "10+",
    maxVolume: "200 м³",
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
