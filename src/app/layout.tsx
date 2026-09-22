import './globals.css'
import Script from 'next/script'
import { Inter, Montserrat, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', style: ['normal', 'italic'] })

export const metadata = {
  title: 'Al Makkah Studio | Photography & Cinematography',
  description:
    'Al Makkah Studio — cinematic wedding films & bridal photography in Punjab, with studios in Lahore and Phool Nagar. Capturing Moments, Creating Stories.',
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
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${playfair.variable} font-sans bg-paper-50 text-ink-950 dark:bg-ink-950 dark:text-white selection:bg-amber-500 selection:text-black transition-colors duration-300`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
