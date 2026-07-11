import { siteConfig } from "@/lib/site-config";

export function ContactCta() {
  return (
    <section className="bg-steel-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Получить расчёт
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-graphite">
            Позвоните или напишите нам — инженеры подготовят технико-коммерческое предложение
            и рассчитают сроки изготовления в течение 1 рабочего дня.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-center sm:gap-16">
          <div className="text-center sm:text-left">
            <p className="font-mono text-xs uppercase tracking-widest text-white/40">
              Телефоны
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="font-mono text-xl font-medium text-white transition-colors hover:text-rust-light sm:text-2xl"
                >
                  {phone.display}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center sm:text-left">
            <p className="font-mono text-xs uppercase tracking-widest text-white/40">
              Email
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 inline-block font-mono text-xl text-white transition-colors hover:text-rust-light sm:text-2xl"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
