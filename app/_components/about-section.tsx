import React from 'react'
import ProgressSkill from '@/components/custom/progress-skill'
import TwoColSection from '@/components/layout/two-col-section'
import AvatarProfile from '@/components/custom/avatar-profile'
import SectionTitle from '@/components/custom/section-title'
import SectionDescription from '@/components/custom/section-description'
import { Shield, Server, Code2 } from 'lucide-react'

const SKILL_GROUPS = [
  {
    label: 'Security & Monitoring',
    icon: Shield,
    skills: [
      { name: 'Threat Monitoring & Incident Response', value: 85 },
      { name: 'Endpoint & Network Security', value: 80 },
    ],
  },
  {
    label: 'Systems & Cloud',
    icon: Server,
    skills: [
      { name: 'Azure MDM & System Administration', value: 80 },
    ],
  },
  {
    label: 'Development & Scripting',
    icon: Code2,
    skills: [
      { name: 'Python', value: 75 },
      { name: 'Web Development (HTML / CSS / JS)', value: 72 },
    ],
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
          content={`I am a Cybersecurity & Digital Forensics graduate from Nanyang Polytechnic with hands-on experience in IT operations, endpoint management, and incident escalation. During my role as an IT Support & Operations Assistant, I supported over 100 users weekly in a live environment, managed endpoint deployments, and resolved access-related and system issues while adhering to operational and security procedures.

Through both academic projects and operational support work, I developed a strong interest in threat monitoring, incident response, and the design of secure systems that prioritise accountability, auditability, and operational reliability.`}
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
              <div className="flex flex-col gap-2">
                {group.skills.map((skill) => (
                  <ProgressSkill key={skill.name} name={skill.name} value={skill.value} />
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
