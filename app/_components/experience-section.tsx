import AppSection from '@/components/layout/app-section'
import SectionTitle from '@/components/custom/section-title'
import SectionDescription from '@/components/custom/section-description'
import { CERTIFICATIONS, EXPERIENCE } from '@/mock'
import { Briefcase, GraduationCap, ExternalLink, MapPin, Calendar } from 'lucide-react'
import Link from 'next/link'

const ExperienceSection = () => {
  return (
    <AppSection id="experience">
      <div className="w-full md:w-2/3 mx-auto mb-12 text-center">
        <SectionTitle name="Experience & Education" />
        <SectionDescription content="My professional journey, academic background, and industry certifications." />
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

        <div className="space-y-10">
          {EXPERIENCE.map((item, index) => {
            const isLeft = index % 2 === 0
            const Icon = item.type === 'work' ? Briefcase : GraduationCap

            return (
              <div
                key={item.title + item.organisation}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10 mt-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      item.current
                        ? 'bg-primary border-primary text-white'
                        : 'bg-background border-border text-muted-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Card — offset left on mobile, alternating on desktop */}
                <div
                  className={`ml-14 md:ml-0 w-full md:w-[calc(50%-2.5rem)] ${
                    isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}
                >
                  <div className="bg-card rounded-xl border border-border p-5 hover:border-primary/40 transition-colors">
                    <div
                      className={`flex items-start gap-2 flex-wrap mb-1 ${
                        isLeft ? 'md:justify-end' : ''
                      }`}
                    >
                      <h3 className="font-bold text-base text-foreground">{item.title}</h3>
                      {item.current && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>

                    <p className="text-primary font-semibold text-sm">{item.organisation}</p>

                    <div
                      className={`flex items-center gap-3 mt-1 text-xs text-muted-foreground flex-wrap ${
                        isLeft ? 'md:justify-end' : ''
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {item.description}
                    </p>

                    {item.highlights && (
                      <div
                        className={`flex flex-wrap gap-1.5 mt-3 ${
                          isLeft ? 'md:justify-end' : ''
                        }`}
                      >
                        {item.highlights.map((h) => (
                          <span
                            key={h}
                            className="text-[11px] bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded-full"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty spacer for opposite side on desktop */}
                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </div>
            )
          })}
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-20 max-w-3xl mx-auto">
        <h3 className="text-center text-lg font-bold mb-2">Certifications</h3>
        <p className="text-center text-sm text-muted-foreground mb-8">
          Industry-recognised credentials earned through Cisco and IBM SkillsBuild.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="bg-card rounded-xl border border-border p-5 flex flex-col gap-2 hover:border-primary/40 transition-colors"
            >
              <div className="text-3xl">{cert.icon}</div>
              <p className="font-bold text-sm leading-snug">{cert.name}</p>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
                <span className="text-xs text-muted-foreground">{cert.date}</span>
                {cert.credentialUrl && (
                  <Link
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-semibold"
                  >
                    Verify <ExternalLink className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppSection>
  )
}

export default ExperienceSection
