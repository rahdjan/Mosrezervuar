# Бэкенд МОСРЕЗЕРВУАР (МЗРО) — документация

Документация по серверной части сайта-каталога завода. Описывает стек, параметры,
портфолио, изображения, деплой и правки, внесённые в проект.

---

## 0. Актуальное состояние (обновлено 2026-07-11)

> **Форма заявок и весь серверный приём данных удалены.** Сайт больше **не собирает
> и не хранит персональные данные пользователей** — связь только по телефону и email.

Что удалено из кода:
- Форма обратной связи `components/ui/ContactForm.tsx` (была на главной и `/contacts`).
- API-эндпоинт `POST /api/leads` (`app/api/leads/route.ts`) — теперь отдаёт **404**.
- Почта `lib/mail.ts` (уведомление + автоответ), rate-limiter `lib/rate-limit.ts`,
  Zod-схема формы `lib/utils/validation.ts`.
- Все серверные логи заявок (`console.*`, включая лог payload с IP) — исчезли вместе с этими файлами.
- Запись заявок в БД (`prisma.lead.create` с IP/referer) — больше не выполняется.

Что появилось взамен:
- Телефоны обратной связи `8 (495) 755-39-01` и `8 (499) 755-62-12` — в шапке, на странице
  «Контакты» и в футере (кликабельные `tel:`-ссылки). Источник — `phones` в `lib/site-config.ts`.
- Email `zakaz@mzrv.ru` (без изменений).

Следствия:
- Неиспользуемые пакеты **удалены** из `package.json`: `nodemailer` (+ `@types/nodemailer`),
  `react-hook-form`, `@hookform/resolvers`, `zod`, а также `@prisma/client` и `prisma`.
  Переменные `DATABASE_URL`, `SMTP_*` приложением больше не читаются.
- **Prisma удалён целиком:** снесены `lib/prisma.ts` и каталог `prisma/` (схема с моделями
  Lead / Product / Project / User). База данных проектом больше не используется — сайт полностью статический.
- Разделы 1–14 ниже описывают исходную «Фазу 1» (приём заявок, БД, почта, деплой с Postgres) как
  **исторический контекст** — на текущий сайт они не распространяются, если противоречат этому разделу.
  В частности, шаги `npx prisma generate` / `migrate` в разделах 10 и 13 больше **не нужны** и не сработают.

---

## 1. Назначение (историческое — см. раздел 0)

Сайт — производственный B2B-каталог. Первоначальная **Фаза 1** предполагала приём заявок с формы
(валидация → сохранение → письма → защита от спама); этот функционал **удалён** (раздел 0).
Актуально: статический каталог/портфолио + прямые контакты (телефон/email), без серверного приёма данных.
Архитектура намеренно простая (монолит на Next.js, без отдельного сервиса).

---

## 2. Технический стек

| Компонент      | Технология / версия        |
| -------------- | -------------------------- |
| Framework      | Next.js **16.2.9** (App Router, Route Handlers) |
| Runtime        | React **19.2.4**, Node.js 20 LTS |
| ORM            | Prisma **6.19.3** (`@prisma/client` 6.19.3) |
| База данных    | PostgreSQL 16 (опционально на фазе 1) |
| Валидация      | Zod **4.4.3** (общая схема фронт + бэк) |
| Формы          | react-hook-form 7.79 + @hookform/resolvers |
| Почта          | Nodemailer **9.0** (SMTP) с фолбэком-заглушкой |
| Защита форм    | honeypot + in-memory rate limiting |

> **Важно про Prisma:** установка тянула Prisma 7, где `url = env(...)` в схеме запрещён
> (требует `prisma.config.ts` + driver-adapter). Закреплена стабильная линия **`^6`**,
> где работает классическая схема и singleton. См. раздел 9.

---

## 3. Переменные окружения

Шаблон — в [.env.example](.env.example). Скопируйте в `.env` (он в `.gitignore`).

| Переменная     | Назначение | Поведение, если не задана |
| -------------- | ---------- | ------------------------- |
| `DATABASE_URL` | Подключение к PostgreSQL | Заявки **не пишутся в БД**, только лог + письмо. Форма работает. |
| `SMTP_HOST`    | SMTP-сервер | Почта работает **заглушкой** (лог в консоль). |
| `SMTP_PORT`    | Порт (`465` SSL / `587` STARTTLS) | `secure` ставится автоматически: `true` при 465. |
| `SMTP_USER`    | SMTP-логин | — |
| `SMTP_PASS`    | SMTP-пароль / ключ | — |
| `SMTP_FROM`    | Адрес отправителя, напр. `МОСРЕЗЕРВУАР <noreply@mzrv.ru>` | — |
| `NEXT_PUBLIC_ASSETS_BASE_URL` | Базовый URL для изображений (S3/CDN). Публичная (префикс `NEXT_PUBLIC_`). | Пусто → картинки берутся из `public/`. См. раздел 14. |

Переключение заглушка → реальная отправка происходит **автоматически** при заданном
`SMTP_HOST` — менять код не нужно.

---

## 4. Модель данных (Prisma) — УДАЛЕНО (раздел 0)

> Prisma и каталог `prisma/` удалены вместе с приёмом заявок. Ниже — историческое описание.
> На фазе 1 в коде использовалась только модель `Lead`;
> `Product` / `Project` / `User` были заведены заранее как задел на следующие фазы.

**Lead** (заявка): `id, name, company?, phone, email, productType, volume?, comment?, status, source?, ipAddress?, createdAt, updatedAt`
**LeadStatus** (enum): `NEW | IN_PROGRESS | CLOSED_WON | CLOSED_LOST | SPAM`

`productType` (строка) использует enum фронта:
`rvs | rgsp | rgsn | rgd | dymotruba | silos | oborudovanie | metallostruktury | other`

---

## 5. API

> **Удалено (раздел 0).** Эндпоинт `POST /api/leads` больше не существует — запрос к нему
> возвращает **404**. Никаких серверных API-маршрутов у сайта сейчас нет.
> Ниже — исходное описание для истории.

### `POST /api/leads` — приём заявки (УДАЛЁН)

Порядок обработки:
1. **Rate limit** — не более **5 заявок с IP за 10 минут** → иначе `429`.
2. **Zod-валидация** тела (`contactFormSchema`) → иначе `400`.
3. **Honeypot** — если скрытое поле `website` заполнено, тихо возвращаем `{ success: true }`
   (бот не узнаёт о фильтре), заявка не сохраняется и письма не шлются.
4. **Сохранение** — если задан `DATABASE_URL` → `prisma.lead.create`; иначе лог + объект в памяти.
5. **Письма** — уведомление на `zakaz@mzrv.ru` + автоответ клиенту, в `try/catch`
   (ошибка почты не валит ответ — заявка уже принята).
6. Ответ: `{ success: true }`.

Поля `website` (honeypot) и `consent` (согласие) в БД **не пишутся**.

---

## 6. Защита от спама

- **Honeypot** — скрытое поле `website` (off-screen, `tabIndex=-1`). Заполняется ботами.
- **Rate limiting** — [lib/rate-limit.ts](lib/rate-limit.ts), in-memory на `Map`.
  ⚠️ Для нескольких инстансов / serverless нужен Upstash Redis или иное общее хранилище.
- **Серверная валидация** — Zod-схема на сервере, данным фронта не доверяем.

---

## 7. Почта ([lib/mail.ts](lib/mail.ts))

- Интерфейс `Mailer` + два билдера писем: уведомление заводу и автоответ клиенту.
- `getMailer()` сам выбирает реализацию: `SMTP_HOST` задан → Nodemailer SMTP, иначе → консольная заглушка.
- Тексты/адреса берутся из [lib/site-config.ts](lib/site-config.ts).
- **Доставляемость:** рекомендуется transactional-сервис (Unisender Go / Mailgun / SendGrid)
  и настройка **SPF / DKIM / DMARC** для домена `mzrv.ru` — иначе письма уходят в спам.

---

## 8. Правовое (152-ФЗ)

> **Актуально (раздел 0):** сайт **не собирает и не хранит ПДн** (формы нет, серверного приёма
> данных нет, аналитики/трекеров нет). Требования 152-ФЗ к обработке/хранению ПДн (хостинг в РФ,
> согласие, уведомление Роскомнадзора) в текущем виде **не применяются**. Страница политики
> конфиденциальности [app/privacy/page.tsx](app/privacy/page.tsx) (`/privacy`) **переписана** под
> «данные не собираются» (связь только по телефону/email) и оставлена в `sitemap.xml`.

Историческое (когда была форма):
- Чекбокс **согласия на обработку ПДн** в форме (обязателен, валидировался Zod).
- Перед публикацией: хранение данных на серверах в РФ, согласование текста с юристом,
  уведомление Роскомнадзора (шаблон политики — заготовка, не юр. консультация).

---

## 9. Внесённые правки (фаза 1)

**Новые файлы:**
- `prisma/schema.prisma` — модели данных
- `lib/prisma.ts` — singleton Prisma Client
- `lib/mail.ts` — почта (интерфейс + SMTP + заглушка)
- `lib/rate-limit.ts` — rate limiter
- `app/api/leads/route.ts` — обработчик заявок
- `app/privacy/page.tsx` — политика конфиденциальности
- `.env.example` — шаблон переменных окружения
- `BACKEND.md` — этот файл

**Изменённые файлы:**
- `lib/utils/validation.ts` — в `contactFormSchema` добавлены `website` (honeypot) и `consent` (согласие);
  у `comment` ограничение 2000 символов.
- `components/ui/ContactForm.tsx` — реальная отправка через `fetch('/api/leads')`, скрытый honeypot,
  чекбокс согласия со ссылкой на `/privacy`, обработка ошибок и `429`.
- `app/sitemap.ts` — добавлен маршрут `/privacy`.
- `package.json` — добавлены `@prisma/client`, `prisma` (закреплены на `^6`), `nodemailer`, `@types/nodemailer`.

**Отклонения от исходной инструкции:**
1. Prisma закреплён на v6 (v7 требует driver-adapter — лишняя сложность).
2. Honeypot: убрано `z.string().max(0)` у `website` — оно давало `400` и выдавало боту факт фильтрации;
   теперь заполненный honeypot обрабатывается в роуте (тихий `success`).

### 9.1. Портфолио — 70 реальных проектов

Демо-портфолио (5 SVG-«чертежей») заменено на **70 реальных проектов** МЗРО
(источник: `mzrv.ru/galereya-proektov`, заголовки/описания сохранены).

**Новые файлы:**
- `lib/images.ts` — резолвер URL изображений `getProjectImageUrl(key)` (задел под S3/CDN, см. раздел 14).
- `public/portfolio/gal-N.jpg` — **70 превью**, скачанных с mzrv.ru (имя по номеру альбома N).

**Изменённые файлы:**
- `lib/data/projects.ts` — массив `projects` переписан на 70 записей; в тип `Project` добавлены
  `image?` (ключ изображения) и `albumUrl?`, поля `client?`/`year?` сделаны опциональными.
- `components/ui/ProjectCard.tsx` — рендерит реальное фото (`<img object-cover>` в прежних габаритах/рамке);
  при отсутствии `image` — фолбэк на SVG `ProductIllustration`. Строка `client · year` собирается без висячего «·».
- `.env.example` — добавлена `NEXT_PUBLIC_ASSETS_BASE_URL`.

**Как заполнены поля (эвристика по тексту, можно править вручную в `projects.ts`):**
- `tag`/`category` по ключевым словам: силос → Силос; дымов/газоход/ствол → Дымовая труба;
  металлоконструк/магазин/конус → Металлоконструкция; иначе → Резервуар.
  Итог: 44 резервуара / 13 труб / 9 силосов / 4 металлоконструкции.
- `year` — из описания, где явно указан (35 из 70); `client` — где явно назван (Газпром, Транснефть, Knauf, Bosch).
- `featured: true` у трёх (`gal-75`, `gal-77`, `gal-62`) — показываются на главной (`LatestProjects`).

### 9.2. Удаление формы и приёма заявок (2026-07-11)

Причина: отказ от сбора и хранения персональных данных пользователей (мотив 152-ФЗ). См. раздел 0.

**Удалённые файлы:** `app/api/leads/route.ts` (и пустая `app/api/`), `components/ui/ContactForm.tsx`,
`lib/mail.ts`, `lib/rate-limit.ts`, `lib/utils/validation.ts`. Вместе с ними исчезли все `console.*`-логи
заявок и запись в БД.

**Изменённые файлы:** `lib/site-config.ts` (добавлен массив `phones`), `components/sections/ContactCta.tsx`
и `app/contacts/page.tsx` (форма убрана, вместо неё контактный блок с телефонами и email),
`components/layout/Header.tsx` и `components/layout/Footer.tsx` (добавлены телефоны).

**Удалены неиспользуемые зависимости** (`npm uninstall`): `nodemailer`, `@types/nodemailer`,
`react-hook-form`, `@hookform/resolvers`, `zod`, `@prisma/client`, `prisma`. Вместе с Prisma удалены
осиротевшие `lib/prisma.ts` и каталог `prisma/`. Остались только реально используемые пакеты
(`next`, `react`, `@base-ui/react`, `framer-motion`, `lucide-react`, `shadcn`, `clsx`,
`class-variance-authority`, `tailwind-merge`, `tw-animate-css` и dev-инструменты).

**Проверено:** `npm run build` проходит, `POST /api/leads` → 404, на страницах нет `<form>` и клиентских
`fetch` на сервер, телефоны и email отображаются в шапке/футере/контактах.

---

## 10. Запуск и проверка

```bash
npm install
npx prisma generate          # генерация Prisma Client

npm run dev                  # разработка
# или
npm run build && npm start   # прод

# Проверки качества:
npx tsc --noEmit             # типы
npm run lint                 # eslint
npm run build                # сборка
```

**Подключение БД (когда появится Postgres):**
```bash
# задать DATABASE_URL в .env, затем:
npx prisma migrate dev --name init
```

> **Формы больше нет (раздел 0).** Проверять приём заявок/письма не нужно — соответствующий код удалён.
> Смоук-тест контактов: `npm run dev` → на главной, `/contacts`, в шапке и футере видны телефоны
> (`tel:`) и email (`mailto:`); `POST /api/leads` отдаёт 404. Настраивать `DATABASE_URL`/`SMTP_*` не требуется.

---

## 11. Вне объёма фазы 1 (следующие этапы)

- `GET /api/products`, `/api/products/[slug]`, `/api/projects` — каталог/портфолио из БД + seed
  из текущих TS-файлов (`lib/data/*`). Сейчас каталог статичен.
- Админ-панель `/admin` (NextAuth credentials, bcrypt, middleware, `prisma/seed.ts`),
  управление заявками/каталогом, экспорт заявок в Excel.

---

## 12. Состояние проверок (на момент написания)

| Проверка             | Результат |
| -------------------- | --------- |
| `tsc --noEmit`       | ✅ без ошибок |
| `npm run lint`       | ✅ без ошибок и предупреждений |
| `npm run build`      | ✅ собирается |
| `npm audit`          | ⚠️ 2 moderate — транзитивный `postcss` внутри Next.js, **не критично** (см. ниже) |

**Про `npm audit`:** уязвимость в `postcss <8.5.10` (XSS при stringify CSS) приходит транзитивно
через Next.js. `npm audit fix --force` предлагает откатить Next до 9.x — это неверно, делать не нужно.
Для статического каталога без пользовательского CSS-ввода риск неактуален; закроется при обновлении Next.

---

## 13. Деплой сайта на реальный сервер

Сейчас сайт работает локально (`npm start`, `http://localhost:3137`). Ниже — перенос в прод.

### 13.1. Где хостить (важно для 152-ФЗ)
Собираются ПДн граждан РФ → сервер и БД **должны быть в РФ**. Подходят: **Selectel, Timeweb Cloud,
Yandex Cloud, VK Cloud**. Берём: VPS/облачный сервер (Node 20) + **управляемый PostgreSQL 16** у того же
провайдера (с автоматическими ежедневными бэкапами).

### 13.2. Подготовка
1. Node.js 20 LTS на сервере.
2. Залить код (git clone / CI). `.env` **не коммитить** — создать на сервере из `.env.example` с реальными
   значениями: `DATABASE_URL`, `SMTP_*`, при S3 — `NEXT_PUBLIC_ASSETS_BASE_URL`.
3. Установка и сборка:
   ```bash
   npm ci
   npx prisma generate
   npx prisma migrate deploy     # применяет миграции в проде (НЕ migrate dev)
   npm run build
   ```
   > Перед первым `migrate deploy` нужно один раз создать миграцию локально:
   > `npx prisma migrate dev --name init` (создаст `prisma/migrations/`, который коммитится в репозиторий).

### 13.3. Вариант A — PM2 + Nginx + HTTPS (рекомендуется для VPS)
1. Запуск приложения под менеджером процессов (автоперезапуск, логи):
   ```bash
   npm i -g pm2
   pm2 start "npm run start" --name mzrv     # слушает 127.0.0.1:3000
   pm2 save && pm2 startup                    # автозапуск при перезагрузке
   ```
2. **Nginx** как reverse-proxy на домен `mzrv.ru` → `proxy_pass http://127.0.0.1:3000;`.
3. **HTTPS** обязателен: `certbot --nginx` (Let's Encrypt) или сертификат провайдера.

### 13.4. Вариант B — Docker
`output: "standalone"` в `next.config.ts` уменьшает образ. Dockerfile (Node 20-alpine): `npm ci` →
`prisma generate` → `npm run build` → запуск `node server.js` (или `npm start`). БД — внешний управляемый
Postgres (в контейнер не кладём). `docker compose` с reverse-proxy (nginx/traefik) для HTTPS.

### 13.5. После деплоя — проверить
- Открывается по `https://mzrv.ru` (HTTPS, редирект с http).
- В шапке/футере/на `/contacts` видны телефоны (`tel:`) и email `zakaz@mzrv.ru`; `/api/leads` → 404.
- `/sitemap.xml`, `/robots.txt`, `/portfolio` (70 проектов с фото) отдаются.

> Сайт не собирает ПДн и не пишет в БД — управляемый Postgres, `DATABASE_URL`/`SMTP_*` и бэкапы БД
> для текущего функционала не нужны (разделы 0, 8). Они актуальны только при возврате приёма заявок.

---

## 14. Изображения и переезд на S3/CDN

### 14.1. Как сейчас
- Файлы лежат в `public/portfolio/gal-N.jpg` (70 шт.), отдаются Next.js со своего домена.
- В данных (`lib/data/projects.ts`) хранится только **ключ**: `image: "/portfolio/gal-80.jpg"`.
- В разметке URL собирает `getProjectImageUrl(key)` из [lib/images.ts](lib/images.ts):
  `base + key`, где `base = NEXT_PUBLIC_ASSETS_BASE_URL ?? ""`. Пустая база → отдаётся из `public/`.

### 14.2. Добавить/заменить фото проекта
1. Положить файл в `public/portfolio/` (имя-ключ, напр. `gal-81.jpg`).
2. В нужном объекте `projects` указать `image: "/portfolio/gal-81.jpg"`.
   Если `image` не задан — карточка покажет SVG-иллюстрацию (фолбэк).

### 14.3. Переезд на облако (S3-совместимое хранилище / CDN)
Цель — отдавать картинки не с Node-сервера, а из объектного хранилища (Selectel Object Storage,
Yandex Object Storage, VK Cloud — все S3-совместимы), опционально через CDN.

1. Создать **бакет** с публичным доступом на чтение (или подключить CDN перед ним).
2. Залить туда **всё содержимое `public/portfolio/`, сохранив те же пути-ключи**
   (`/portfolio/gal-80.jpg` и т.д.). Пример (s3cmd/aws-cli с S3-эндпоинтом провайдера):
   ```bash
   aws s3 sync public/portfolio/ s3://<bucket>/portfolio/ --endpoint-url https://<s3-endpoint>
   ```
3. Задать переменную окружения (без слэша в конце):
   ```env
   NEXT_PUBLIC_ASSETS_BASE_URL="https://<bucket-или-cdn-домен>"
   ```
4. Пересобрать (`npm run build`) и перезапустить. Теперь `getProjectImageUrl` вернёт
   `https://<cdn>/portfolio/gal-80.jpg`. **Код и данные менять не нужно** — только переменная.

> Откат: убрать `NEXT_PUBLIC_ASSETS_BASE_URL` → снова отдача из `public/`.

### 14.4. Примечания
- Сейчас используется обычный `<img>` (не `next/image`) — это снимает зависимость от
  `images.remotePatterns` и работает с любым внешним доменом без правок конфига.
- Если позже захотите оптимизацию `next/image` с внешним хостом — добавьте домен в
  `images.remotePatterns` в `next.config.ts`.
