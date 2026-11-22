import AppContainer from '@/components/layout/app-container'
import AppFooter from '@/components/layout/app-footer'
import AppHeader from '@/components/layout/app-header'
import IntroductionSection from './_components/introduction-section'
import AboutSection from './_components/about-section'
import ExperienceSection from './_components/experience-section'
import ServiceSection from './_components/service-section'
import ProjectSection from './_components/project-section'
import ContactSection from './_components/contact-section'
import { FadeIn } from '@/components/motion/fade-in'
import { SlideUp } from '@/components/motion/slide-up'
import { StatsBar } from '@/components/custom/stats-bar'

export default async function Home() {
  return (
    <>
      <AppHeader />
      <AppContainer>
        <main className="flex min-h-screen flex-col items-center justify-between">
          {/* introduce */}
          <FadeIn>
            <IntroductionSection />
          </FadeIn>
          {/* stats bar */}
          <StatsBar />
          {/* about me */}
          <SlideUp>
            <AboutSection />
          </SlideUp>
          {/* experience & education */}
          <SlideUp>
            <ExperienceSection />
          </SlideUp>
          {/* services / core skills */}
          <SlideUp>
            <ServiceSection />
          </SlideUp>
          {/* projects */}
          <SlideUp>
            <ProjectSection />
          </SlideUp>
          {/* contact */}
          <SlideUp>
            <ContactSection />
          </SlideUp>
        </main>
      </AppContainer>
      <AppFooter />
    </>
  )
}
