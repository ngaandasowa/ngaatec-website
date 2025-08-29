import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Follow Ngaatec on Social Media | Stay Connected",
  description:
    "Stay connected with Ngaatec Private Limited! Follow us on LinkedIn, X (Twitter), Instagram, Facebook, and our WhatsApp Channel to get updates, special offers, and tech tips.",
  openGraph: {
    title: "Follow Ngaatec on Social Media",
    description:
      "Connect with Ngaatec on LinkedIn (2K+ followers), X/Twitter (700 followers), Instagram (368 followers), Facebook (89 followers), and our WhatsApp Channel for latest updates and offers.",
    type: "website",
    url: "https://ngaatec.co.zw/socials",
    images: [
      {
        url: "https://ngaatec.co.zw/1738321665221.webp", // OG image showing social icons or followers
        width: 1200,
        height: 630,
        alt: "Ngaatec Social Media Connections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Follow Ngaatec on Social Media",
    description:
      "Stay updated with Ngaatec: LinkedIn (2K+ followers), X/Twitter (700), Instagram (368), Facebook (89), and WhatsApp Channel for tech tips and special offers.",
    images: ["https://ngaatec.co.zw/1738321665221.webp"],
  },
};
export default function SocialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}