import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jahid Hasan — Data Analyst & Aspiring AI/ML Engineer",
    template: "%s | Jahid Hasan",
  },
  description:
    "Final-year Software Engineering student (Data Science specialization) at Daffodil International University. Building AI/ML systems, data visualizations, and full-stack applications.",
  keywords: [
    "Data Analyst",
    "AI ML Engineer",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Data Visualization",
    "Next.js",
    "Bangladesh",
    "Portfolio",
    "Jahid Hasan",
  ],
  authors: [{ name: "Jahid Hasan", url: "https://github.com/jahidstm" }],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://personal-portfolio-jahidstm.vercel.app"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Jahid Hasan Portfolio",
    title: "Jahid Hasan — Data Analyst & Aspiring AI/ML Engineer",
    description:
      "Final-year Software Engineering student specializing in Data Science. Building AI/ML systems, data visualizations, and full-stack applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahid Hasan — Data Analyst & Aspiring AI/ML Engineer",
    description:
      "Final-year Software Engineering student specializing in Data Science. Building AI/ML systems, data visualizations, and full-stack applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-bg-base text-text-primary font-sans antialiased min-h-screen selection:bg-accent-primary/20 selection:text-accent-glow flex flex-col">
        {children}
      </body>
    </html>
  );
}
