import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/custom/theme-provider'
import ScrollToTopButton from '@/components/custom/scroll-top-button'
import { ScrollProgress } from '@/components/custom/scroll-progress'
import { Terminal } from '@/components/custom/terminal'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Shen Yunlong | Cybersecurity Analyst',
  description:
    'Portfolio of Shen Yunlong — Cybersecurity & Digital Forensics graduate specialising in threat monitoring, incident response, endpoint security, and security operations.',
  openGraph: {
    title: 'Shen Yunlong | Cybersecurity Analyst',
    description:
      'Cybersecurity & Digital Forensics graduate with hands-on experience in IT operations, endpoint security, and incident response. Open to cybersecurity and SOC analyst roles.',
    type: 'website',
  },
  keywords: [
    'Cybersecurity Analyst',
    'Shen Yunlong',
    'Digital Forensics',
    'SOC Analyst',
    'Incident Response',
    'Threat Monitoring',
    'Endpoint Security',
    'IT Operations',
    'Singapore',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          {children}
          <ScrollToTopButton />
          <Terminal />
        </ThemeProvider>
      </body>
    </html>
  )
}
