import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Ngaatec",
  description: "Discover Ngaatec’s professional services in web development, computer repair, satellite installations, and more. Reliable solutions tailored for you.",
  openGraph: {
    title: "Ngaatec Services",
    description: "Explore Ngaatec’s trusted technology services – from web development and computer repair to satellite dish installations.",
    type: "website",
    url: "https://ngaatec.co.zw/services",
    images: [
      {
        url: "https://ngaatec.co.zw/services.webp",
        width: 1200,
        height: 630,
        alt: "Ngaatec professional technology services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngaatec Services",
    description: "Explore Ngaatec’s trusted technology services – from web development and computer repair to satellite dish installations.",
    images: ["https://ngaatec.co.zw/services.webp"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}