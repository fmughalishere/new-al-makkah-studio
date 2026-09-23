import './globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Playfair_Display } from 'next/font/google'
import { CONTACT, LOCATIONS, SITE_URL, iconImage, ogImage } from '@/src/lib/media'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', style: ['normal', 'italic'] })

const SITE_NAME = 'Al Makkah Studio'
const TITLE = 'Al Makkah Studio | Wedding & Cinematic Photography in Lahore & Phool Nagar'
const DESCRIPTION =
  'Al Makkah Studio — cinematic wedding films, bridal shoots & event photography across Punjab, with studios in Lahore (Mansoora) and Phool Nagar. Book your shoot today.'
const OG_IMAGE = ogImage('couple-shoot3')

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'Al Makkah Studio',
    'wedding photographer Lahore',
    'wedding photographer Phool Nagar',
    'wedding photography Punjab',
    'bridal photoshoot Lahore',
    'cinematic wedding films Pakistan',
    'wedding videographer Lahore',
    'best photography studio Lahore',
    'Mansoora Lahore photographer',
    'event photography Punjab',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Al Makkah Studio — cinematic wedding & bridal photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: iconImage('logo', 48), sizes: '48x48', type: 'image/png' },
      { url: iconImage('logo', 96), sizes: '96x96', type: 'image/png' },
      { url: iconImage('logo', 192), sizes: '192x192', type: 'image/png' },
    ],
    shortcut: [{ url: iconImage('logo', 48), sizes: '48x48', type: 'image/png' }],
    apple: [{ url: iconImage('logo', 180), sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
  category: 'photography',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#08090a' },
    { media: '(prefers-color-scheme: light)', color: '#faf7f0' },
  ],
}

// LocalBusiness structured data (JSON-LD) — one PhotographyBusiness entry
// per studio, so Google can surface both Lahore and Phool Nagar locations
// with the right address, phone, and map in search results.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': LOCATIONS.map((loc) => {
    const hasCoords = 'lat' in loc && 'lng' in loc
    return {
      '@type': 'PhotographyBusiness',
      '@id': `${SITE_URL}/#${loc.id}`,
      name: `${SITE_NAME} — ${loc.label}`,
      image: OG_IMAGE,
      url: SITE_URL,
      telephone: CONTACT.tel,
      email: CONTACT.email,
      priceRange: 'PKR 70,000+',
      address: {
        '@type': 'PostalAddress',
        streetAddress: loc.address,
        addressLocality: loc.id === 'lahore' ? 'Lahore' : 'Phool Nagar',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
      ...(hasCoords && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: (loc as { lat: number }).lat,
          longitude: (loc as { lng: number }).lng,
        },
      }),
      sameAs: [
        'https://www.instagram.com/almakkahstudio/',
        'https://www.facebook.com/people/Al-Makkah-Studio-Phool-Nagar/61574909946386/',
      ],
      areaServed: 'Punjab, Pakistan',
      founder: {
        '@type': 'Person',
        name: 'M. Hussnain Mughal',
      },
    }
  }),
}

// Runs before paint (beforeInteractive) so the saved theme applies with no
// flash: default is dark (the site's original look) unless the visitor
// has explicitly switched to light before.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var isDark = stored !== 'light';
    document.documentElement.classList.toggle('dark', isDark);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Script id="ld-json-local-business" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(structuredData)}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${playfair.variable} font-sans bg-paper-50 text-ink-950 dark:bg-ink-950 dark:text-white selection:bg-amber-500 selection:text-black transition-colors duration-300`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
