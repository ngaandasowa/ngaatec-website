export const metadata = {
  title: "Contact Ngaatec | Get in Touch Today",
  description:
    "Reach out to Ngaatec Private Limited for all your IT services, website development, hosting, branding, and tech support needs. Call, WhatsApp, or email us — we're here to help.",
  openGraph: {
    title: "Contact Ngaatec | Get in Touch Today",
    description:
      "Need IT services, website development, branding, or computer repairs? Contact Ngaatec today via email, WhatsApp, or visit us at our Chitungwiza office.",
    url: "https://www.ngaatec.co.zw/contact",
    siteName: "Ngaatec",
    type: "website",
    locale: "en_ZW",
    images: [
      {
        url: "https://ngaatec.co.zw/contact.webp",
        width: 1200,
        height: 630,
        alt: "Contact Ngaatec | Get in Touch Today",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ngaatec | Get in Touch Today",
    description:
      "Get in touch with Ngaatec Private Limited for professional IT services, website solutions, hosting, branding, and reliable tech support.",
  },
  alternates: {
    canonical: "https://www.ngaatec.co.zw/contact",
  },
  keywords: [
    "Ngaatec contact",
    "IT services Zimbabwe",
    "website development Zimbabwe",
    "computer repair Chitungwiza",
    "branding and hosting",
    "tech support Zimbabwe",
    "digital solutions Zimbabwe",
    "contact Ngaatec",
  ],
  images: ["https://ngaatec.co.zw/contact.webp"],
};
export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}   