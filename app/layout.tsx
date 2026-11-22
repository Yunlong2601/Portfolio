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
  title: 'Shen Yunlong | Software Engineer',
  description:
    'Portfolio of Shen Yunlong — software engineer at Zalfion Consulting building full-stack operations platforms, dashboards and automations. Diploma in Cybersecurity & Digital Forensics.',
  openGraph: {
    title: 'Shen Yunlong | Software Engineer',
    description:
      'Software engineer building production systems for Singapore businesses with Next.js, Supabase and Python.',
    type: 'website',
  },
  keywords: [
    'Software Engineer',
    'Full-Stack Developer',
    'Next.js',
    'Supabase',
    'TypeScript',
    'Python',
    'Dashboards',
    'Automation',
    'Shen Yunlong',
    'Cybersecurity & Digital Forensics',
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
