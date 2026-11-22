'use client'
import SectionDescription from '@/components/custom/section-description'
import SectionTitle from '@/components/custom/section-title'
import AppSection from '@/components/layout/app-section'
import MediaLightbox from '@/components/custom/media-lightbox'
import { PROJECTS } from '@/mock'
import React from 'react'
import { ExternalLink, Github, CheckCircle2, Briefcase, Lock } from 'lucide-react'
import Link from 'next/link'

const ProjectSection = () => {
  const projectData = PROJECTS

  return (
    <AppSection id="projects">
      <div className="w-full md:w-2/3 mx-auto mb-10">
        <SectionTitle name="My Projects" />
        <SectionDescription
          content="Client systems I have helped build at Zalfion Consulting, followed by academic and leadership projects. Client work is described without names or data to respect confidentiality."
        />
      </div>
      <div className="space-y-16">
        {projectData.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}
          >
            <div className="w-full md:w-2/5">
              {project.frontImage ? (
                <MediaLightbox
                  src={project.frontImage}
                  title={project.title || ''}
                  thumbClassName="relative w-full h-[280px] overflow-hidden rounded-xl bg-primary/10"
                />
              ) : (
                <div className="relative w-full h-[280px] rounded-xl bg-primary/10 border border-primary/20 flex flex-col items-center justify-center gap-3 p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  {project.client && (
                    <p className="text-sm font-semibold text-foreground">{project.client}</p>
                  )}
                  <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Lock className="w-3.5 h-3.5" />
                    Client work — screenshots withheld for confidentiality
                  </p>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.topics?.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 px-3 py-1 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Project links */}
              {(project.github || project.link) && (
                <div className="flex gap-3 mt-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </Link>
                  )}
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                  )}
                </div>
              )}
            </div>

            <div className="w-full md:w-3/5 space-y-4">
              <h3 className="text-2xl font-bold text-primary">{project.title}</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-500 mb-1">Problem / Scope</h4>
                  <p className="text-sm text-muted-foreground">{project.problemScope}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-500 mb-1">My Role & Solution</h4>
                  <p className="text-sm text-muted-foreground">{project.roleAndSolution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-500 mb-1">Work Process</h4>
                  <p className="text-sm text-muted-foreground">{project.workProcess}</p>
                </div>

                {/* Outcome highlighted box */}
                <div className="rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <h4 className="font-bold text-orange-600 dark:text-orange-400 text-sm uppercase tracking-wide">
                      Outcome & Results
                    </h4>
                  </div>
                  <p className="text-sm text-orange-900 dark:text-orange-200">
                    {project.outcomeResults}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppSection>
  )
}

export default ProjectSection
