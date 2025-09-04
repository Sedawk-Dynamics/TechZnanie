import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "TechZnanie Innoversity - Master Future-Ready Skills | Top Tech Education",
  description:
    "Transform your career with industry-relevant programs at TechZnanie Innoversity. 60+ courses, 95% success rate, and job placement support. Join 500+ successful professionals today!",
  generator: "Next.js",
  keywords:
    "TechZnanie, Innoversity, tech education, online courses, engineering courses, computer science, electronics, electrical engineering, mechanical engineering, civil engineering, management courses, career transformation",
  authors: [{ name: "TechZnanie Innoversity" }],
  creator: "TechZnanie Innoversity",
  publisher: "TechZnanie Innoversity",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://techznanieinnoversity.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "TechZnanie Innoversity - Master Future-Ready Skills | Top Tech Education",
    description:
      "Transform your career with industry-relevant programs at TechZnanie Innoversity. 60+ courses, 95% success rate, and job placement support. Join 500+ successful professionals today!",
    url: "https://techznanieinnoversity.com",
    siteName: "TechZnanie Innoversity",
    images: [
      {
        url: "https://techznanieinnoversity.com/images/hero-backdrop.jpg",
        width: 1200,
        height: 630,
        alt: "TechZnanie Innoversity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "TechZnanie Innoversity - Master Future-Ready Skills | Top Tech Education",
    description:
      "Transform your career with industry-relevant programs at TechZnanie Innoversity. 60+ courses, 95% success rate, and job placement support.",
    images: ["https://techznanieinnoversity.com/images/hero-backdrop.jpg"],
    creator: "@techznanie",
    site: "@techznanie",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "TechZnanie Innoversity",
              url: "https://techznanieinnoversity.com",
              logo: "https://techznanieinnoversity.com/placeholder-logo.png",
              sameAs: [
                "https://www.facebook.com/techznanie",
                "https://www.linkedin.com/company/techznanie",
                "https://twitter.com/techznanie",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plot no 117, Gowtaminagar, Vanastalipuram",
                addressLocality: "Hyderabad",
                postalCode: "500070",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8919440316",
                contactType: "customer service",
                email: "info@techznanieinnoversity.com",
              },
              description:
                "Transform your career with industry-relevant programs at TechZnanie Innoversity. 60+ courses, 95% success rate, and job placement support.",
              offers: {
                "@type": "Offer",
                category: "Education & Training",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
