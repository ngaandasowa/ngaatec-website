import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ngaatec Online Store",
  description: "Explore our full product catalogue on WhatsApp.",
  openGraph: {
    title: "Ngaatec Online Store",
    description: "Explore our full product catalogue on WhatsApp.",
    type: "website",
    url: "https://ngaatec.co.zw.com/shop",
    images: [
      {
        url: "https://ngaatec.co.zw/online_store.webp",
        width: 1200,
        height: 630,
        alt: "Ngaatec Online Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngaatec Online Store",
    description: "Explore our full product catalogue on WhatsApp.",
    images: ["https://ngaatec.co.zw/online_store.webp"],
  },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
