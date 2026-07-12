"use client";

import Link from "next/link";
import {
  CategoryIcon,
  IconArrowRight,
  IconChevronDown,
  IconLogoMark,
  IconMenu,
} from "@/components/icons";
import { categories } from "@/lib/data/categories";
import { mainNav, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-steel-dark/95 backdrop-blur-md">
      {/* Top contact bar */}
      <div className="hidden border-b border-white/10 md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-5 px-4 md:px-8">
          <span className="text-[13px] leading-none text-white/70">
            Завод включён в Регистр проверенных поставщиков.
          </span>
          <div className="flex items-center gap-5">
            {siteConfig.phones.map((phone) => (
              <a
                key={phone.tel}
                href={`tel:${phone.tel}`}
                className="font-mono text-[13px] font-medium leading-none text-white/80 transition-colors hover:text-white"
              >
                {phone.display}
              </a>
            ))}
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-mono text-[13px] leading-none text-white/80 transition-colors hover:text-white"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-white">
          <IconLogoMark className="h-7 w-7 text-rust" />
          <span className="font-display text-lg font-black uppercase leading-none tracking-wide whitespace-nowrap">
            МосРезервуар
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <Link
              href="/catalog"
              className="flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              Каталог
              <IconChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-0 top-full w-72 translate-y-1 rounded-sm border border-white/10 bg-steel-dark opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <ul className="p-2">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={`/catalog/${cat.slug}`}
                      className="flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <CategoryIcon icon={cat.icon} className="h-5 w-5 shrink-0 text-rust" />
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            className="rounded-sm bg-rust px-4 text-sm font-medium text-white hover:bg-rust-light"
            render={
              <Link href="/contacts">
                Получить расчёт
                <IconArrowRight className="ml-1 h-4 w-4" />
              </Link>
            }
          />
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger
            render={
              <button
                type="button"
                aria-label="Открыть меню"
                className="flex items-center justify-center rounded-sm p-2 text-white lg:hidden"
              />
            }
          >
            <IconMenu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-full max-w-sm flex-col gap-0 border-l border-white/10 bg-steel-dark p-0 text-white sm:max-w-sm [&_svg]:text-white"
          >
            <SheetHeader className="border-b border-white/10 px-5 py-4">
              <SheetTitle className="font-display text-lg font-black uppercase tracking-wide text-white">
                МосРезервуар
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
              <SheetClose
                render={<Link href="/catalog" />}
                className="block rounded-sm px-3 py-2.5 text-base font-medium text-white"
              >
                Каталог
              </SheetClose>
              <ul className="mb-2 ml-3 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <SheetClose
                      render={<Link href={`/catalog/${cat.slug}`} />}
                      className="flex items-center gap-2.5 rounded-sm px-3 py-2 text-sm text-white/70"
                    >
                      <CategoryIcon icon={cat.icon} className="h-4 w-4 shrink-0 text-rust" />
                      {cat.name}
                    </SheetClose>
                  </li>
                ))}
              </ul>
              {mainNav.map((item) => (
                <SheetClose
                  key={item.href}
                  render={<Link href={item.href} />}
                  className="block rounded-sm px-3 py-2.5 text-base font-medium text-white"
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
            <div className="flex flex-col gap-3 border-t border-white/10 p-4">
              <div className="flex flex-col gap-1">
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone.tel}
                    href={`tel:${phone.tel}`}
                    className="font-mono text-base font-medium text-white transition-colors hover:text-rust-light"
                  >
                    {phone.display}
                  </a>
                ))}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-mono text-sm text-white/70 transition-colors hover:text-rust-light"
                >
                  {siteConfig.email}
                </a>
              </div>
              <Button
                className="w-full rounded-sm bg-rust text-white hover:bg-rust-light"
                render={
                  <SheetClose render={<Link href="/contacts" />}>
                    Получить расчёт
                  </SheetClose>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
