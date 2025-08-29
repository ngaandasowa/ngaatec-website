import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ngaatec | Digital Solutions",
  description:
    "Ngaatec Private Limited is a digital solutions company dedicated to making technology simple and impactful. We provide websites, hosting, branding, IT support, and computer repairs in Zimbabwe.",
  openGraph: {
    title: "About Ngaatec | Digital Solutions",
    description:
      "Discover Ngaatec Private Limited — your trusted partner for websites, hosting, branding, IT support, and computer repairs in Zimbabwe. Making technology simple and impactful since 2021.",
    type: "website",
    url: "https://ngaatec.co.zw/about",
    images: [
      {
        url: "https://ngaatec.co.zw/about_ngaatec.webp",
        width: 1200,
        height: 630,
        alt: "About Ngaatec - Digital Solutions Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ngaatec | Digital Solutions",
    description:
      "Ngaatec makes technology simple — from websites and hosting to branding, IT support, and computer repairs.",
    images: ["https://ngaatec.co.zw/about_ngaatec.webp"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}