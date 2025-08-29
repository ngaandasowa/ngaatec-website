import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Ngaatec",
  description:
    "Discover Ngaatec’s services: affordable web hosting, domain registration, custom website design, branding & graphic design, IT support, computer repairs, and data recovery. Reliable solutions for businesses and individuals.",
  openGraph: {
    title: "Ngaatec Services",
    description:
      "Ngaatec offers professional services including web hosting, domain registration, website design, branding, graphic design, IT support, computer repairs, and data recovery.",
    type: "website",
    url: "https://ngaatec.co.zw/services",
    images: [
      {
        url: "https://ngaatec.co.zw/services.webp",
        width: 1200,
        height: 630,
        alt: "Ngaatec professional services - hosting, web design, IT support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngaatec Services",
    description:
      "Ngaatec provides reliable services in web hosting, domain registration, website design, branding, graphic design, IT support, computer repairs, and data recovery.",
    images: ["https://ngaatec.co.zw/services.webp"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}