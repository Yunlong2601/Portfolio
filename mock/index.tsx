import { CertificationItem, ExperienceItem, ProjectItem, Service } from '@/types'
import {
  Monitor,
  Database,
  Workflow,
  Cloud,
  ShieldCheck,
  Server,
} from 'lucide-react'

/* =========================
   EXPERIENCE
========================= */
export const EXPERIENCE: ExperienceItem[] = [
  {
    type: 'work',
    title: 'Software Engineer Intern',
    organisation: 'Urban Redevelopment Authority of Singapore (URA)',
    period: 'Mar 2026 – Present',
    location: 'Singapore',
    current: true,
    description:
      'Contributing to the design and development of internal software systems at one of Singapore\'s key government statutory boards, working alongside cross-functional teams to deliver reliable and maintainable solutions.',
    highlights: ['Software Design', 'System Development', 'Government Tech', 'Agile'],
  },
  {
    type: 'work',
    title: 'IT Support & Operations Assistant',
    organisation: 'Nanyang Polytechnic',
    period: 'Oct 2024 – Feb 2026',
    location: 'Singapore',
    description:
      'Provided frontline IT support to 100+ users weekly in a live operational environment. Managed endpoint deployments, resolved access and system issues, and adhered to operational security procedures including incident escalation and logging.',
    highlights: ['Endpoint Management', 'Azure MDM', 'Incident Escalation', 'User Support'],
  },
  {
    type: 'education',
    title: 'Diploma in Cybersecurity & Digital Forensics',
    organisation: 'Nanyang Polytechnic',
    period: '2022 – 2025',
    location: 'Singapore',
    description:
      'Specialised diploma covering threat monitoring, digital forensics, network security, incident response, and secure software development. Completed multiple hands-on projects in authentication systems, access control, and security analysis.',
    highlights: ['Threat Monitoring', 'Digital Forensics', 'Network Security', 'Secure Development'],
  },
]

/* =========================
   CERTIFICATIONS
========================= */
export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Jan 2026',
    credentialUrl: 'https://www.linkedin.com/posts/shenyl_introduction-to-cybersecurity-was-issued-activity-7418527029261803520-v6PY',
    icon: '🛡️',
  },
  {
    name: 'Cybersecurity Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Jan 2026',
    credentialUrl: 'https://www.linkedin.com/posts/shenyl_cybersecurity-fundamentals-was-issued-by-activity-7418527479562244096-Uc4b',
    icon: '🔐',
  },
  {
    name: 'Web Development Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Jan 2026',
    credentialUrl: 'https://www.linkedin.com/posts/shenyl_web-development-fundamentals-was-issued-by-activity-7418527696575414272-OpXw',
    icon: '🌐',
  },
]

/* =========================
   SERVICES
========================= */

export const SERVICES: Service[] = [
  {
    key: 'security-ops',
    title: 'Security Operations',
    description:
      'Monitor and respond to security incidents using structured procedures.',
    icon: ShieldCheck,
    highlights: ['Threat Monitoring', 'Incident Response', 'SOP Adherence'],
  },
  {
    key: 'it-support',
    title: 'IT Support & Operations',
    description:
      'Support users and systems to ensure operational continuity.',
    icon: Monitor,
    highlights: ['User Support', 'Troubleshooting', 'Documentation'],
  },
  {
    key: 'endpoint',
    title: 'Endpoint Management',
    description:
      'Deploy and manage endpoints using standardized configurations.',
    icon: Server,
    highlights: ['Device Imaging', 'Azure MDM', 'Policy Enforcement'],
  },
  {
    key: 'network',
    title: 'Network & Access Control',
    description:
      'Apply access control and monitoring practices in networked environments.',
    icon: Cloud,
    highlights: ['Access Control', 'Monitoring', 'Security Policies'],
  },
  {
    key: 'automation',
    title: 'Task Automation',
    description:
      'Automate routine IT tasks to improve efficiency and consistency.',
    icon: Workflow,
    highlights: ['Python Scripts', 'Process Automation'],
  },
  {
    key: 'system-admin',
    title: 'System Administration',
    description:
      'Maintain system reliability through preventive maintenance.',
    icon: Database,
    highlights: ['Maintenance', 'System Updates', 'Uptime'],
  },
]

/* =========================
   PROJECTS
========================= */
export const PROJECTS: ProjectItem[] = [
  {
    frontImage: '/images/project/fortifiles.mp4',
    backImage: '/images/project/fortifiles.mp4',
    title: 'FortiFile — Secure Document Storage Platform',
    topics: ['Authentication', 'RBAC', 'Audit Logging', 'Security'],
    problemScope:
      'This team-based project addressed the need for a secure document storage platform that enforces controlled access to sensitive documents while maintaining traceability of user actions across different user roles. The objective was to design a system that supports accountability, security monitoring, and investigation readiness in a collaborative development environment.',
    roleAndSolution:
      'As a member of the project team, I contributed to the development of the system by focusing on the security-related components. My responsibilities included supporting the implementation of authentication mechanisms, role-based access control (RBAC), and activity logging, working closely with other team members to ensure that the security features were aligned with the overall system design.',
    workProcess:
      'Working collaboratively with the project team, I implemented session-based authentication to support secure user access across the platform. I assisted in enforcing role-based access control (RBAC) for multiple user roles, including standard users and administrators, to ensure that system functions were restricted based on assigned privileges.To support accountability and security monitoring, I developed audit logging mechanisms to capture login attempts and key user actions. I also collaborated with teammates on an administrative dashboard that allowed logs to be reviewed and exported for monitoring and post-incident analysis.',
    outcomeResults:
      'The completed team solution enabled controlled access to documents and full traceability of user activities across all user roles. Through the integration of RBAC and audit logging, the project demonstrated how access control and activity monitoring enhance accountability, support incident investigation, and reflect security practices commonly applied in real-world operational environments.',
  },

  {
    frontImage: '/images/project/bookstore.mp4',
    backImage: '/images/project/bookstore.mp4',
    title: 'Digital Bookstore — User Account Management System',
    topics: ['Authentication', 'User Management', 'OOP', 'Flask'],
    problemScope:'This team-based project required the development of a centralized user account management system to support secure authentication and clear role separation for multiple user types. The primary objective was to ensure that users and administrators could be authenticated reliably while maintaining appropriate separation of privileges within the system.',
    roleAndSolution:
      'As part of the development team, I contributed to the implementation of the system’s core access management features. My responsibilities focused on supporting authentication mechanisms, role-based login functionality, and user profile management, working in coordination with other team members to align these features with the overall system design.',
    workProcess:
      'Working collaboratively within the team, I developed login and profile management workflows that supported multiple user roles. I enforced access separation between standard users and administrators to ensure that system functions were restricted based on assigned privileges. I also structured backend logic using object-oriented programming principles to support maintainability, clarity, and secure access control.',
    outcomeResults:
      'The completed team solution enabled consistent and secure user management with clear separation of privileges across different user roles. By implementing role-based authentication and structured backend logic, the system reinforced secure access control while supporting a maintainable and scalable backend design.',
  },

  {
    frontImage: '/images/project/it-lab-1.mp4',
    backImage: '/images/project/it-lab-1.mp4',
    title: 'Password Security & Authentication Risk Analysis',
    topics: ['Authentication Security'

             ,'Password Risk Analysis'

             ,'Cybersecurity Fundamentals'

             ,'Security Awareness'],
    problemScope:
      'Weak password practices and poor authentication hygiene remain a common cause of security breaches. This personal cybersecurity study examined common password-related risks and evaluated how different authentication practices affect account security. The objective was to understand real-world authentication weaknesses and explore mitigation strategies through analysis and demonstration.',
    roleAndSolution:
      'As an individual learner, I conducted an independent cybersecurity study focused on password security and authentication risks. As part of this study, I designed and built a small educational demo to visually demonstrate common authentication weaknesses and mitigation concepts, supporting my analysis and learning.',
    workProcess:
      'I researched common authentication-related threats such as weak passwords, password reuse, brute-force attacks, and credential stuffing using publicly available cybersecurity guidelines. Based on this research, I analysed patterns that contribute to password compromise and compared different authentication approaches, including password-only authentication, password complexity enforcement, account lockout policies, and multi-factor authentication (MFA).To reinforce this analysis, I created a self-built demo application that illustrates password strength evaluation, common attack scenarios, and mitigation concepts in a controlled, educational context. The demo was used to visualise how authentication weaknesses can be exploited and how layered controls reduce risk.',
    outcomeResults:
      'This project strengthened my understanding of authentication-related risks and the importance of layered security controls. By combining analysis with a self-created demo, I developed a stronger security mindset when evaluating authentication systems and improved my ability to explain security concepts clearly, supporting readiness for entry-level cybersecurity and Cyber Analyst roles.',
  },

  
  {
    frontImage: '/images/project/japan_exchange.jpeg',
    backImage: '/images/project/japan_exchange.jpeg',
    title: 'Japanese Exchange Programme 2025',
    topics: ['Leadership', 'Programme Management', 'Cross-Cultural'],
    problemScope:
      'The Chinese Cultural Group organised a cultural exchange programme with students from Haguro High School (Japan) to foster meaningful interaction and cross-cultural understanding. The programme required careful coordination of activities, logistics, and manpower to support a large group of visiting students within a limited time frame, while ensuring that activities were engaging, culturally relevant, and well-structured.',
    roleAndSolution:
      'As Vice President of the Chinese Cultural Group and Overall in charge of the organising committee, I contributed to the planning and execution of the exchange programme. My responsibilities included co-drafting the event proposal, supporting programme planning, and assisting with on-site coordination in collaboration with other EXCO members and student helpers.',
    workProcess:
      'Working together with the organising committee, I drafted the proposal outlining the programme aims, objectives, schedule, activities, manpower requirements, and logistics. I collaborated with other EXCO members to plan the programme flow, including cultural performances, ice-breaker games, and interactive activities such as calligraphy sessions and group games.During the event, I supported on-site operations by assisting with coordination between activity stations, performers, and helpers, and helped ensure that the programme followed the planned schedule while adapting to minor adjustments as needed.',
    outcomeResults:
      'The exchange programme was successfully conducted on 1 December 2025, involving 55 Japanese students and accompanying teachers, along with CCG members and student helpers. The event met its objectives of promoting cultural exchange and meaningful interaction, and provided participants with an engaging and positive experience through structured activities and collaborative teamwork.',
  },
]
