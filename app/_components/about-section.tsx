import React from 'react'
import TwoColSection from '@/components/layout/two-col-section'
import AvatarProfile from '@/components/custom/avatar-profile'
import SectionTitle from '@/components/custom/section-title'
import SectionDescription from '@/components/custom/section-description'
import { Shield, Server, Code2 } from 'lucide-react'

// Tools used in real work, shown as tags rather than self-rated percentages
const SKILL_GROUPS = [
  {
    label: 'Development',
    icon: Code2,
    skills: ['Next.js', 'TypeScript', 'React', 'Python', 'Supabase / PostgreSQL', 'Tailwind CSS'],
  },
  {
    label: 'Integrations & Automation',
    icon: Server,
    skills: ['WhatsApp & Chatwoot', 'Email Automation', 'AI Agent Workflows', 'Google Sheets', 'REST APIs'],
  },
  {
    label: 'Engineering Practice',
    icon: Shield,
    skills: ['Git & Pull Requests', 'CI / GitHub Actions', 'Database Migrations', 'Role-Based Access', 'Code Review'],
  },
]

const AboutSection = () => {
  return (
    <TwoColSection id="about">
      <div className="flex justify-center md:justify-start items-center">
        <AvatarProfile src="/images/profile/avatar.png" alt="shen-yunlong-avatar" />
      </div>
      <div>
        <SectionTitle name="About Me" />
        <SectionDescription
          content={`I am a Forward Deployed Engineer at Zalfion Consulting: I work directly with client teams to build the operations platforms Singapore businesses run on every day — HR and hiring, property enquiries, franchise operations and finance dashboards. I work across the stack in Next.js, Supabase and Python, shipping through reviewed pull requests to live systems.

I am also completing a software engineering internship at the Urban Redevelopment Authority (URA). I studied Cybersecurity & Digital Forensics at Nanyang Polytechnic and supported 100+ users weekly in IT operations, so I care about getting the basics right: the right access for each person, careful handling of client data, and systems people can rely on.`}
        />

        <div className="mt-6 flex flex-col gap-6">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <div className="flex items-center gap-2 mb-3">
                <group.icon className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {group.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium bg-primary/10 text-foreground border border-primary/20 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </TwoColSection>
  )
}

export default AboutSection
