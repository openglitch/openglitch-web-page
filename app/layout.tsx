import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ScrollReveal from '@/components/ScrollReveal';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OpenGlitch — El glitch no es el error. Es la señal.',
  description:
    'Fábrica de producto distribuida entre Colombia y Canadá. Construimos SaaS verticales con inteligencia artificial para los sectores colombianos que operan con herramientas que nunca fueron hechas para ellos.',
  openGraph: {
    title: 'OpenGlitch — El glitch no es el error. Es la señal.',
    description:
      'Fábrica de producto distribuida entre Colombia y Canadá. SaaS verticales con IA para la realidad colombiana.',
    locale: 'es_CO',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-CO"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        />
      </head>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
