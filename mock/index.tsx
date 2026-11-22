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
    // DRAFT: confirm job title and start month
    type: 'work',
    title: 'Software Engineer',
    organisation: 'Zalfion Consulting',
    period: 'Sep 2026 – Present',
    location: 'Singapore',
    current: true,
    description:
      'Building and maintaining operations platforms, dashboards and WhatsApp automations for Singapore SMEs in F&B, property, retail and health. Work spans full-stack features, role-based access, integrations with third-party systems, and shipping through reviewed pull requests to live production apps.',
    highlights: ['Next.js', 'TypeScript', 'Supabase', 'Python', 'Access Control', 'AI Automation'],
  },
  {
    type: 'work',
    title: 'Software Engineer Intern',
    organisation: 'Urban Redevelopment Authority of Singapore (URA)',
    period: 'Mar 2026 – Feb 2027',
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
    key: 'dashboards',
    title: 'Business Dashboards',
    description:
      'Turn data from several systems into clear dashboards for owners, managers and staff.',
    icon: Monitor,
    highlights: ['Reporting', 'Finance Views', 'Data Integration'],
  },
  {
    key: 'backend',
    title: 'Databases & APIs',
    description:
      'Design database schemas, migrations and APIs that keep business data consistent.',
    icon: Server,
    highlights: ['PostgreSQL', 'Supabase', 'REST APIs'],
  },
  {
    key: 'access',
    title: 'Accounts & Access',
    description:
      'Set up logins and roles so each person sees only what they need.',
    icon: ShieldCheck,
    highlights: ['Role-Based Access', 'Password Reset', 'Rate Limits'],
  },
  {
    key: 'it-support',
    title: 'IT Support & Operations',
    description:
      'Support users and systems to keep day-to-day operations running.',
    icon: Cloud,
    highlights: ['User Support', 'Troubleshooting', 'Azure MDM'],
  },
  {
    key: 'automation',
    title: 'Automation & Integrations',
    description:
      'Connect business tools and automate follow-ups with WhatsApp, email and AI assistants, within safe limits.',
    icon: Workflow,
    highlights: ['WhatsApp', 'Email', 'AI Assistants', 'Python'],
  },
  {
    key: 'full-stack',
    title: 'Full-Stack Web Apps',
    description:
      'Build dashboards and operations platforms with role-based access and a clean, mobile-friendly UI.',
    icon: Database,
    highlights: ['Next.js', 'Supabase', 'TypeScript'],
  },
]

/* =========================
   PROJECTS
========================= */
export const PROJECTS: ProjectItem[] = [
  /* Client work at Zalfion Consulting — anonymised: no client names, people or data
     (Zalfion SOP 07, PDPA). No screenshots: the card shows a confidential placeholder. */
  {
    client: 'F&B group · Zalfion Consulting',
    title: 'HR & Hiring Platform — Digital Forms and Workforce Planning',
    topics: ['Next.js', 'Supabase', 'E-signature', 'Email Automation'],
    problemScope:
      'A multi-brand F&B group ran hiring, employment letters and staff planning on paper and spreadsheets. Contracts and letters had to go out under the right company letterhead, be signed remotely, and be tracked — while weekly rosters needed a clear view of labour cost.',
    roleAndSolution:
      'As part of the Zalfion team, I worked on the group\'s HR platform: digital forms with drawn signatures, applicant tracking, and a workforce-planning view for managers.',
    workProcess:
      'Features were delivered as small, reviewed pull requests against the live system. The forms module sends each document from the right mailbox with the right entity logo, emails a signed copy back, and expires response links after 7 days so stale links cannot be reused. Workforce planning splits front- and back-of-house hours and shows labour as a percentage of sales with an hourly-rate breakdown. Database changes went through numbered migrations, coordinated with other open pull requests.',
    outcomeResults:
      'Contracts and letters are issued, signed and filed in one place with a full history, instead of by hand. Managers plan each week against labour cost before the roster goes out.',
  },
  {
    client: 'Property agency · Zalfion Consulting',
    title: 'Property Operations Dashboard & WhatsApp Assistant',
    topics: ['Access Control', 'Rate Limiting', 'WhatsApp', 'AI Assistant'],
    problemScope:
      'A property agency handled listings, enquiries and viewings across WhatsApp and several tools, with one shared login for the whole team. Finance pages were visible to everyone, and follow-ups depended on someone remembering.',
    roleAndSolution:
      'As part of the Zalfion team, I contributed to the agency\'s operations dashboard and its WhatsApp assistant, with a focus on accounts, access control and safe automation.',
    workProcess:
      'Replaced the shared login with per-user accounts and owner/staff roles, blocking staff from finance pages and raw data. Added self-service password change and reset with per-user and per-IP rate limits and generic error messages, so the login form does not reveal which usernames exist. Embedded the team inbox in the dashboard on the company\'s own domain, and built a WhatsApp re-engagement campaign whose 30-messages-a-day cap is enforced in the database rather than only in code. The container base image was pinned and updated promptly after a Node.js security release.',
    outcomeResults:
      'Each staff member now signs in with their own account and sees only what their role allows. Enquiries, viewings and reminders run from one dashboard, with the AI assistant kept within agreed limits.',
  },
  {
    client: 'Vending franchise · Zalfion Consulting',
    title: 'Franchise Operations Platform — Faults, Visits and Statements',
    topics: ['Next.js', 'Supabase', 'Live Map', 'PDF Statements'],
    problemScope:
      'A vending-machine franchise needed to track machine faults, technician visits, refunds and monthly franchisee statements across many sites, which were scattered across chats and spreadsheets.',
    roleAndSolution:
      'As part of the Zalfion team, I contributed to the operations platform used by the office, technicians and franchisees.',
    workProcess:
      'Built features including a live site map that flags faulty machines, role-based logins, a technician to-do list driven by one shared visit-clock rule, and refund approvals. On the finance side: monthly statements that can be edited line by line before they are generated, rent percentage and GST handling, carried-forward cost offsets, and downloadable invoices. Franchisees see their own statement and sales in a portal.',
    outcomeResults:
      'Faults, visits and statements live in one system. Overdue work is shown consistently everywhere, and franchisees get clear monthly statements instead of manual spreadsheets.',
  },
  {
    client: 'Allied-health clinic · Zalfion Consulting',
    title: 'Clinic Finance Dashboard',
    topics: ['Python', 'Data Integration', 'Dashboards', 'GST Reporting'],
    problemScope:
      'A multi-state allied-health practice pulled billing data from more than one practice-management system and needed a single, trustworthy view of cash flow, practitioner billings and outstanding client balances.',
    roleAndSolution:
      'I contributed to the finance dashboard for the practice\'s directors and staff, covering data attribution, reporting and payroll timesheets.',
    workProcess:
      'Attributed billings by service date across data sources, showed amounts both excluding and including GST, and added a paged client-value list with total outstanding. Built payroll timesheets with a month grid prefilled from the practice system and a draft/submit flow. Director-only headline figures are hidden from other roles, and the layout was cleaned up to show three headline cards with details behind toggles.',
    outcomeResults:
      'Directors get one consistent view of the business across data sources, and payroll timesheets start prefilled instead of from scratch.',
  },
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
