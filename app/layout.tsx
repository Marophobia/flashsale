import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "3-Day Website Flash Sale | Professional Web Design | Maro Orode",
  description:
    "🚀 Limited Time Offer: Get your professional website built in just 3 days! Only 10 slots available at ₦100,000. Includes responsive design, free domain & hosting, WhatsApp integration, SEO setup. Perfect for small businesses, professionals, churches & creatives. Book now!",
  keywords: [
    "website design",
    "web development",
    "professional website",
    "responsive design",
    "mobile-friendly website",
    "small business website",
    "church website",
    "creative portfolio",
    "fast website delivery",
    "affordable web design",
    "Nigeria web designer",
    "Lagos web development",
    "custom website",
    "business website",
    "professional web design",
    "website flash sale",
    "3 day website",
    "quick website delivery"
  ],
  authors: [{ name: "Maro Orode", url: "https://api.whatsapp.com/send?phone=2348112949474&text=Hello%20Maro,%20I'm%20interested%20in%20the%203-day%20website%20flash%20sale" }],
  creator: "Maro Orode",
  publisher: "Maro Orode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://flashsale.maroorode.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "3-Day Website Flash Sale | Professional Web Design | Maro Orode",
    description: "🚀 Limited Time Offer: Get your professional website built in just 3 days! Only 10 slots available at ₦100,000. Includes responsive design, free domain & hosting, WhatsApp integration, SEO setup. Perfect for small businesses, professionals, churches & creatives.",
    url: 'https://flashsale.maroorode.com',
    siteName: 'Maro Orode Web Design',
    images: [
      {
        url: '/snip.jpg',
        width: 1200,
        height: 630,
        alt: '3-Day Website Flash Sale - Professional Web Design by Maro Orode',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "3-Day Website Flash Sale | Professional Web Design | Maro Orode",
    description: "🚀 Limited Time Offer: Get your professional website built in just 3 days! Only 10 slots available at ₦100,000. Includes responsive design, free domain & hosting, WhatsApp integration, SEO setup.",
    images: ['/snip.jpg'],
    creator: '@maro_orode',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "3-Day Website Flash Sale",
    "description": "Professional website design and development service delivered in just 3 days. Includes responsive design, free domain & hosting, WhatsApp integration, and SEO setup.",
    "provider": {
      "@type": "Person",
      "name": "Maro Orode",
      "url": "https://api.whatsapp.com/send?phone=2348112949474&text=Hello%20Maro,%20I'm%20interested%20in%20the%203-day%20website%20flash%20sale"
    },
    "offers": {
      "@type": "Offer",
      "price": "100000",
      "priceCurrency": "NGN",
      "availability": "https://schema.org/LimitedAvailability",
      "validFrom": new Date().toISOString(),
      "description": "Professional website design package"
    },
    "serviceType": "Web Design",
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Responsive Website Design",
            "description": "Mobile and desktop friendly website design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domain & Hosting",
            "description": "Free domain registration and web hosting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WhatsApp Integration",
            "description": "WhatsApp chat integration for customer communication"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Setup",
            "description": "Search engine optimization setup"
          }
        }
      ]
    }
  }

  return (
    <html lang="en" className="dark">
      <head>
        {/* Facebook Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '873263338358363');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=873263338358363&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Facebook Pixel Code */}
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="theme-color" content="#00d9ff" />
        <meta name="msapplication-TileColor" content="#00d9ff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Maro Orode Web Design" />
        <meta name="application-name" content="Maro Orode Web Design" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
