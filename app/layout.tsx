import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elmo DG | Autoridade Que Vende',
  description:
    'Forjamos identidades fortes que transmitem autoridade e grandeza. Método validado por +50 empresas B2B. Solicite seu Diagnóstico Estratégico gratuito.',
  keywords: ['branding B2B', 'autoridade de marca', 'posicionamento', 'identidade visual', 'consultoria estratégica'],
  authors: [{ name: 'Elmo DG' }],
  openGraph: {
    title: 'Elmo DG | Autoridade Que Vende',
    description: 'Forjamos identidades fortes que transmitem autoridade e grandeza.',
    url: 'https://elmodg.com.br',
    siteName: 'Elmo DG',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
