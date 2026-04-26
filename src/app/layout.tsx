import type { Metadata } from "next";
import { Jura, Inter } from "next/font/google";
import "./globals.css";

const jura = Jura({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Секрет Казанови — натуральний стимулятор для чоловіків",
  description: "Поверніть впевненість у собі з натуральним стимулятором Секрет Казанови. 100% натуральний склад, ефект до 72 годин, повна анонімність та безпека.",
  keywords: "стимулятор для чоловіків, натуральна потенція, секрет казанови, чоловіче здоров'я, лібідо",
  openGraph: {
    title: "Секрет Казанови — натуральний стимулятор для чоловіків",
    description: "100% натуральний склад, ефект до 72 годин, повна анонімність та безпека.",
    images: ['/images/og-image.png'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Секрет Казанови",
    "image": "https://myck-project-2026.vercel.app/images/product.png",
    "description": "Натуральний стимулятор для чоловіків на основі 9 цілющих екстрактів.",
    "brand": {
      "@type": "Brand",
      "name": "Секрет Казанови"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "UAH",
      "lowPrice": "595",
      "highPrice": "1495",
      "offerCount": "3"
    }
  };

  return (
    <html
      lang="uk"
      className={`${jura.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
