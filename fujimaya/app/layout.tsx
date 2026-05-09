import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "横浜家系ラーメン 藤真家 | 稲田堤",
  description:
    "圧力釜で骨の髄まで炊き出した濃厚豚骨スープ。稲田堤駅徒歩1分。深夜0時まで営業。横浜家系ラーメン 藤真家（とうしんや）公式サイト。",
  keywords: "家系ラーメン, 横浜家系, 稲田堤, 藤真家, とうしんや, 川崎, ラーメン",
  openGraph: {
    title: "横浜家系ラーメン 藤真家",
    description: "骨の髄まで炊き出した本格濃厚家系 — 稲田堤駅1分",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${noto.variable} font-sans bg-cream antialiased`}>
        {children}
      </body>
    </html>
  );
}
