import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MainContent } from "@/components/MainContent";
import { brand } from "@/lib/brand";
import { getDevLoginEmails } from "@/lib/auth-helpers";
import { metadataBase } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${brand.wordmark} | Systems Thinking for Mission-Critical Technology`,
    template: `%s | ${brand.wordmark}`,
  },
  description:
    "Lucien designs, builds, and operates mission-critical technology systems with analytical rigor.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: brand.wordmark,
    description:
      "Systems architecture and execution for complex, high-stakes environments.",
    url: `https://${brand.domain}`,
    siteName: brand.wordmark,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${brand.wordmark} OpenGraph`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.wordmark,
    description:
      "Systems architecture and execution for complex, high-stakes environments.",
    images: ["/og.png"],
  },
};

export const viewport = {
  themeColor: brand.colors.nearBlack,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const devLoginEmails = getDevLoginEmails();

  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/app/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/app/favicon.svg" />
        <link rel="shortcut icon" href="/app/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/app/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Lucien" />
        <link rel="manifest" href="/app/site.webmanifest" />
      </head>
      <body className="min-h-screen bg-ink text-ash antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-ash focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Header devLoginEmails={devLoginEmails} />
        <MainContent>{children}</MainContent>
        <Footer />
        {process.env.VERCEL === "1" ? <Analytics /> : null}
        {process.env.VERCEL === "1" ? <SpeedInsights /> : null}
      </body>
    </html>
  );
}
