'use client'
import AvatarProfile from '@/components/custom/avatar-profile'
import TwoColSection from '@/components/layout/two-col-section'
import { Button } from '@/components/ui/button'
import React from 'react'
import GithubIcon from '@/components/icons/github-icon'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import Link from 'next/link'
import { SlideUp } from '@/components/motion/slide-up'
import { ZoomIn } from '@/components/motion/zoom-in'
import { Download } from 'lucide-react'
import { TypingHeadline } from '@/components/custom/typing-headline'

const IntroductionSection = () => {
  return (
    <TwoColSection id="home">
      <div className="order-2 md:order-1">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Software Engineer Intern @ URA Singapore
        </div>

        <p className="text-lg font-semibold">Hi I am</p>
        <h1 className="text-3xl font-bold text-orange-500 mb-4">Shen Yunlong</h1>

        <SlideUp>
          {/* Typewriter headline — desktop */}
          <h2 className="hidden md:block md:text-6xl lg:text-7xl font-extrabold mb-6 min-h-[1.2em]">
            <TypingHeadline />
          </h2>

          {/* Typewriter headline — mobile */}
          <h2 className="block md:hidden text-4xl font-extrabold mb-4 min-h-[1.4em]">
            <TypingHeadline />
          </h2>

          {/* Short punchy tagline */}
          <p className="text-primary font-semibold mb-3 text-sm md:text-base">
            Threat Monitoring · Incident Response · Secure Development
          </p>

          <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
            Cybersecurity & Digital Forensics graduate from Nanyang Polytechnic, currently
            interning as a Software Engineer at the Urban Redevelopment Authority of Singapore.
            Experienced in IT operations, endpoint security, and incident escalation — with a
            strong interest in security monitoring, forensics, and cyber defence.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact">
              <Button className="bg-orange-500 hover:bg-orange-600">Contact Me</Button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </a>
          </div>
        </SlideUp>
      </div>

      <div className="order-1 md:order-2 flex justify-center md:justify-end">
        <ZoomIn>
          <div className="flex flex-col items-center space-y-5">
            <AvatarProfile src={'/images/profile/avatar-2.png'} alt={'Shen Yunlong avatar'} priority />
            <div className="flex space-x-5">
              <Link href={'https://linkedin.com/in/shenyl'} target="_blank">
                <LinkedinIcon className="social-icon" />
              </Link>
              <Link href={'https://github.com/Yunlong2601'} target="_blank">
                <GithubIcon className="social-icon" />
              </Link>
            </div>
          </div>
        </ZoomIn>
      </div>
    </TwoColSection>
  )
}

export default IntroductionSection
