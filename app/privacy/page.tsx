import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Сайт МОСРЕЗЕРВУАР носит информационный характер и не собирает персональные данные пользователей. Связь — по телефону и email.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Правовая информация"
        title="Политика конфиденциальности"
        description="Сайт носит информационный характер и не собирает персональные данные пользователей."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-8 lg:py-24">
          <div className="flex flex-col gap-6 text-sm leading-relaxed text-graphite">
            <p>
              Настоящая политика описывает, как {siteConfig.fullName} (далее — «Компания»)
              обращается с данными посетителей сайта {siteConfig.url}.
            </p>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                1. Мы не собираем персональные данные
              </h2>
              <p className="mt-2">
                Сайт носит информационный характер. На нём нет форм обратной связи, регистрации,
                личного кабинета или онлайн-оплаты. Мы не собираем, не храним и не передаём третьим
                лицам персональные данные посетителей, а также не используем системы веб-аналитики
                и рекламные трекеры для сбора данных о вас.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                2. Обратная связь
              </h2>
              <p className="mt-2">
                Связаться с Компанией можно по телефону или электронной почте, указанным на сайте.
                Если вы напишете нам сами, ваши контактные данные и текст обращения будут
                использованы исключительно для ответа на ваш запрос и не будут переданы третьим
                лицам или использованы для рассылок.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                3. Ваши права
              </h2>
              <p className="mt-2">
                Если вы обращались к нам по email и хотите узнать о судьбе своего обращения или
                попросить удалить переписку, напишите на{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-rust hover:text-rust-light">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                4. Реквизиты компании
              </h2>
              <dl className="mt-2 flex flex-col gap-1 font-mono text-[13px] text-ink">
                <div className="flex flex-wrap gap-2">
                  <dt className="text-graphite">Оператор:</dt>
                  <dd>{siteConfig.fullName}</dd>
                </div>
                <div className="flex flex-wrap gap-2">
                  <dt className="text-graphite">ИНН:</dt>
                  <dd>{siteConfig.legal.inn}</dd>
                </div>
                <div className="flex flex-wrap gap-2">
                  <dt className="text-graphite">ОГРН:</dt>
                  <dd>{siteConfig.legal.ogrn}</dd>
                </div>
                <div className="flex flex-wrap gap-2">
                  <dt className="text-graphite">Email:</dt>
                  <dd>{siteConfig.email}</dd>
                </div>
              </dl>
            </div>

            <p className="text-xs text-graphite/70">
              Если в будущем на сайте появятся формы или иные способы сбора данных, эта политика
              будет обновлена, а текст согласован с юристом по 152-ФЗ.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
