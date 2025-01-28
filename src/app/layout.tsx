"use client";

import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";
import Notification from "./components/Notification";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Ngaatec</title>
        <meta name="description" content="the world of simple technology" />
        <meta property="og:title" content="Ngaatec" />
        <meta property="og:description" content="Ngaatec Private Limited official website." />
        
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <html lang="en">
        <body>
          {/* Notification */}
          <Notification />

          {/* Main Layout */}
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
