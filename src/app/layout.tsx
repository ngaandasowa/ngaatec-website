import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notification from "./components/Notification"; // still client component
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Ngaatec",
  description: "The world of simple technology",
  openGraph: {
    title: "Ngaatec",
    description: "Ngaatec Private Limited official website.",
    type: "website",
    url: "https://ngaatec.co.zw/ngaatec_motto.webp",
    images: [
      {
        url: "https://ngaatec.co.zw/ngaatec_motto.webp",
        width: 1200,
        height: 630,
        alt: "Ngaatec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngaatec",
    description: "The world of simple technology",
    images: ["https://ngaatec.co.zw/ngaatec_motto.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Client-only component */}
        <Notification />

        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
