import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Roboto_Condensed } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

// Barlow Condensed has no Cyrillic glyphs in Google Fonts, so Roboto Condensed
// is used instead — same condensed/industrial weight range, full Cyrillic support.
const robotoCondensed = Roboto_Condensed({
  variable: "--font-display-raw",
  subsets: ["latin", "cyrillic"],
  weight: ["700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body-raw",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-raw",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.fullName}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.fullName}`,
    description: siteConfig.description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phones.map((p) => p.tel),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Волоколамское шоссе, д. 108, эт. цок., пом. VIII, к. 2, оф. 76",
    addressLocality: "Москва",
    addressCountry: "RU",
  },
  taxID: siteConfig.legal.inn,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${robotoCondensed.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
