// Сертификаты и разрешительная документация завода.
// Источник: mzrv.ru/o-zavode/sertifikat.html (см. MZRV_ZAVOD.md §4).
// Изображения скачаны локально в public/certificates/ (без хотлинка).

export interface Certificate {
  id: string;
  /** Название документа (alt-текст берётся отсюда). */
  title: string;
  /** Локальные пути к сканам (public/certificates/*.jpg). */
  images: string[];
}

export const certificates: Certificate[] = [
  {
    id: "sosudy",
    title: "Сертификат соответствия — сосуды и аппараты ёмкостные",
    images: ["/certificates/sert1-1-small.jpg", "/certificates/sert1-2-small.jpg"],
  },
  {
    id: "metallokonstrukcii",
    title: "Сертификат соответствия — металлоконструкции",
    images: ["/certificates/sert2-1-small.jpg", "/certificates/sert2-2-small.jpg"],
  },
  {
    id: "svecha",
    title: "Сертификат соответствия — свеча",
    images: ["/certificates/sert3-1-small.jpg"],
  },
  {
    id: "eaes",
    title: "Декларация о соответствии ЕАЭС",
    images: ["/certificates/eur-1.jpg", "/certificates/eur-2.jpg"],
  },
  {
    id: "iso-9001",
    title: "ГОСТ Р ИСО 9001-2015 (ISO 9001:2015)",
    images: ["/certificates/iso-1.jpg", "/certificates/iso-2.jpg", "/certificates/iso-3.jpg"],
  },
  {
    id: "registr-postavshchikov",
    title: "Регистр проверенных поставщиков",
    images: ["/certificates/kach1.jpg", "/certificates/kach2.jpg"],
  },
  {
    id: "proverennyy-postavshchik",
    title: "Проверенный поставщик",
    images: ["/certificates/registr.jpg"],
  },
];
