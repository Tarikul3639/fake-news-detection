import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

const BASE_URL = "https://fakeguard.vercel.app"; // TODO: Update with your actual deployed URL when available

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "FakeGuard | AI-Powered Fake News Detector",
    template: "%s | FakeGuard",
  },
  description:
    "FakeGuard is a machine learning-powered fake news detection tool trained on 44,898 labeled news articles. Paste any article to instantly detect whether it is fake or real with a confidence score.",

  keywords: [
    "FakeGuard",
    "Fake News Detector",
    "AI News Verification",
    "Machine Learning News Classification",
    "Misinformation Detection",
    "NLP Text Classifier",
    "Logistic Regression Text Classification",
    "TF-IDF News Analysis",
    "Real vs Fake News",
    "Data Mining Project",
  ],

  authors: [{ name: "Tarikul Islam", url: "https://tarikul-islam.me" }],
  creator: "Tarikul Islam",
  publisher: "Tarikul Islam",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "FakeGuard",
    title: "FakeGuard — AI-Powered Fake News Detector",
    description:
      "Paste any news article and let our ML model tell you if it's fake or real — with confidence score.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "FakeGuard Fake News Detection Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FakeGuard — Fake News Detector",
    description:
      "ML-powered fake news detection trained on 44,898 articles. Instant results with confidence score.",
    images: ["/og"],
  },

  // ── PWA & Icons ──
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "FakeGuard",
  },

  // ── Icons ──
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png", sizes: "48x48" },
    ],
    apple: "/apple-icon.png",
    other: [
      { rel: "mask-icon", url: "/icon0.svg", color: "#E24B4A" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FakeGuard",
    url: BASE_URL,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    description:
      "FakeGuard is an AI-powered fake news detection web application. It uses a Logistic Regression model trained on 44,898 labeled news articles with TF-IDF vectorization to classify news as fake or real with a confidence score.",
    author: {
      "@type": "Person",
      name: "Tarikul Islam",
      url: "https://tarikul-islam.me",
      sameAs: [
        "https://www.linkedin.com/in/tarikul3639",
        "https://www.github.com/tarikul3639",
      ],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    keywords: [
      "FakeGuard",
      "Fake News Detector",
      "AI News Verification",
      "Machine Learning News Classification",
      "Misinformation Detection",
      "NLP Text Classifier",
      "TF-IDF News Analysis",
      "Data Mining Project",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${dmSans.className} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}