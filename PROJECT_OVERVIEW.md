# MOSREZERVUAR — обзор проекта

Сайт-каталог компании «МОСРЕЗЕРВУАР» (Московский завод резервуарного оборудования).
Проект — **Next.js 16 (App Router) + React 19 + TypeScript**, единое фронтенд-приложение без отдельного backend.

## Стек

- Next.js 16.2.9 (App Router, RSC)
- React 19 / TypeScript
- Tailwind CSS 4 + shadcn/ui (стиль "base-nova", иконки lucide)
- framer-motion — анимации

> Форма обратной связи и приём заявок удалены (см. [BACKEND.md](BACKEND.md), раздел 0) —
> сайт не собирает персональные данные. Связь только по телефону/email.

## Где что лежит

### Фронтенд (страницы) — `app/`
Роутинг через App Router, каждая папка = маршрут:
- `app/page.tsx` — главная
- `app/about/page.tsx` — о заводе
- `app/services/page.tsx` — услуги
- `app/portfolio/page.tsx` — портфолио проектов
- `app/contacts/page.tsx` — контакты (телефоны, email, реквизиты)
- `app/catalog/page.tsx` — каталог категорий
- `app/catalog/[category]/page.tsx` — список продукции по категории
- `app/catalog/[category]/[product]/page.tsx` — карточка конкретного продукта
- `app/layout.tsx` — общий layout (шрифты, метатеги, JSON-LD, Header/Footer)
- `app/globals.css` — глобальные стили / Tailwind / дизайн-токены
- `app/sitemap.ts`, `app/robots.ts` — SEO-файлы

### Компоненты — `components/`
- `components/layout/` — `Header.tsx`, `Footer.tsx`
- `components/sections/` — секции страниц: `HeroSection`, `WhyUs`, `StatCounter`, `CatalogPreview`, `CatalogView`, `LatestProjects`, `SteelStrip`, `ContactCta`, `PageHeader`
- `components/ui/` — базовые UI-компоненты (shadcn): `button`, `card`, `input`, `select`, `sheet`, `slider`, `badge`, `label`, `separator`, `textarea`, плюс кастомные `ProductCard.tsx`, `ProjectCard.tsx`
- `components/icons/index.tsx` — набор кастомных SVG-иконок (как React-компоненты)
- `components/illustrations/index.tsx` — кастомные SVG-иллюстрации продукции (как React-компоненты, например `ProductIllustration`)

### "Бэкенд" / данные
Отдельного backend и API **нет**. Весь контент (категории, продукты, проекты, конфиг сайта) — статические TypeScript-данные:
- `lib/site-config.ts` — название компании, реквизиты, навигация, статистика
- `lib/data/categories.ts` — категории продукции (резервуары, дымовые трубы, силосы и т.д.)
- `lib/data/products.ts` — карточки продукции с характеристиками
- `lib/data/projects.ts` — кейсы/проекты для портфолио
- `lib/utils.ts` — общие хелперы (cn и т.п.)

### Изображения / медиа — `public/`
Реальных фотографий/растровых изображений в проекте нет. В `public/` лежат только дефолтные SVG из шаблона `create-next-app` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`), не используются по контенту.
Вся визуальная часть продукции выполнена как **inline SVG-иллюстрации** в `components/illustrations/index.tsx` и иконки в `components/icons/index.tsx`.

### Конфигурация
- `package.json` — зависимости и npm-скрипты (`dev`, `build`, `start`, `lint`)
- `next.config.ts` — конфиг Next.js (пока пустой/дефолтный)
- `tsconfig.json` — настройки TypeScript
- `components.json` — конфиг shadcn/ui
- `eslint.config.mjs`, `postcss.config.mjs` — линтер и PostCSS/Tailwind
- `.next/` — сборочный кэш Next.js (генерируется автоматически, в git не попадает)
- `AGENTS.md` / `CLAUDE.md` — заметка о том, что в этой версии Next.js есть breaking changes, документацию см. в `node_modules/next/dist/docs/`

## Запуск

```bash
npm install
npm run dev    # localhost:3000
npm run build
npm run start
npm run lint
```

## Итог
Это монолитный фронтенд-проект на Next.js: страницы в `app/`, UI в `components/`, весь "контент базы данных" — статические файлы в `lib/data/`, изображений как файлов нет — вместо них SVG-компоненты.
