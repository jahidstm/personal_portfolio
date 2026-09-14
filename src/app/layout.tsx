import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Jahid Hasan — Data Analyst & Aspiring AI/ML Engineer',
    template: '%s | Jahid Hasan',
  },
  description:
    'Final-year Software Engineering student (Data Science specialization) at Daffodil International University. Building AI/ML systems, data visualizations, and full-stack applications.',
  keywords: [
    'Data Analyst',
    'AI ML Engineer',
    'Python',
    'Machine Learning',
    'Deep Learning',
    'Data Visualization',
    'Next.js',
    'Bangladesh',
    'Portfolio',
    'Jahid Hasan',
  ],
  authors: [{ name: 'Jahid Hasan', url: 'https://github.com/jahidstm' }],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://personal-portfolio-jahidstm.vercel.app'
  ),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Jahid Hasan Portfolio',
    title: 'Jahid Hasan — Data Analyst & Aspiring AI/ML Engineer',
    description:
      'Final-year Software Engineering student specializing in Data Science. Building AI/ML systems, data visualizations, and full-stack applications.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jahid Hasan — Data Analyst & AI/ML Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jahid Hasan — Data Analyst & Aspiring AI/ML Engineer',
    description:
      'Final-year Software Engineering student specializing in Data Science. Building AI/ML systems, data visualizations, and full-stack applications.',
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

// FOUC prevention — inject before React hydrates
const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent FOUC on theme toggle */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg-base text-text-primary font-sans antialiased min-h-screen flex flex-col selection:bg-accent-primary/20 selection:text-accent-glow">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
