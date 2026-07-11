import Link from "next/link";
import { IconLogoMark } from "@/components/icons";
import { categories } from "@/lib/data/categories";
import { footerNav, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-steel-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <IconLogoMark className="h-7 w-7 text-rust" />
              <span className="font-display text-lg font-black uppercase leading-none tracking-wide">
                МосРезервуар
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {siteConfig.fullName} ({siteConfig.shortName}). Производство и монтаж резервуаров,
              дымовых труб, силосов и металлоконструкций.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-white/40">Навигация</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-white/40">Каталог</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/catalog/${cat.slug}`}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-white/40">Контакты</h3>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="font-medium transition-colors hover:text-white"
                >
                  {phone.display}
                </a>
              ))}
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                {siteConfig.email}
              </a>
              <p>Москва, Волоколамское ш., 108</p>
              <p className="text-white/50">{siteConfig.workingHours}</p>
              <Link
                href="/contacts"
                className="inline-flex font-medium text-rust-light transition-colors hover:text-rust"
              >
                Все контакты →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 font-mono text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2021 {siteConfig.legalName}. {siteConfig.fullName}.
          </p>
          <p>ИНН {siteConfig.legal.inn} · ОГРН {siteConfig.legal.ogrn}</p>
        </div>
      </div>
    </footer>
  );
}
