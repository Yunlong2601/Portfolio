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

const SITE_URL = 'https://yunlong2601.github.io/Portfolio/'

// Structured profile for search engines and AI assistants (schema.org Person)
const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shen Yunlong',
  url: SITE_URL,
  email: 'mailto:yunlong2601@gmail.com',
  jobTitle: 'Software Engineer',
  description:
    'Software engineer at Zalfion Consulting building operations platforms, dashboards and automations for Singapore businesses; software engineering intern at URA.',
  worksFor: [
    { '@type': 'Organization', name: 'Zalfion Consulting' },
    { '@type': 'Organization', name: 'Urban Redevelopment Authority of Singapore (URA)' },
  ],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Nanyang Polytechnic' },
  address: { '@type': 'PostalAddress', addressCountry: 'SG' },
  knowsAbout: [
    'Next.js', 'TypeScript', 'React', 'Python', 'Supabase', 'PostgreSQL',
    'Role-based access control', 'WhatsApp automation', 'AI agent workflows',
    'Business dashboards', 'Cybersecurity',
  ],
  sameAs: ['https://www.linkedin.com/in/shenyl/', 'https://github.com/Yunlong2601'],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  title: 'Shen Yunlong | Software Engineer',
  description:
    'Portfolio of Shen Yunlong — software engineer at Zalfion Consulting building full-stack operations platforms, dashboards and automations. Diploma in Cybersecurity & Digital Forensics.',
  openGraph: {
    title: 'Shen Yunlong | Software Engineer',
    description:
      'Software engineer building production systems for Singapore businesses with Next.js, Supabase and Python.',
    type: 'profile',
    url: SITE_URL,
    siteName: 'Shen Yunlong',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
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
