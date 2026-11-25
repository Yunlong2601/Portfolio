export type Service = {
  key: string
  title: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  highlights?: string[]
  href?: string
}

export type ProjectItem = {
  /** Client work shown without media: "Industry · Company" */
  client?: string
  /** Built-in illustration (sample data) used instead of a screenshot */
  mockup?: 'hr-forms' | 'property-ops' | 'franchise-ops' | 'clinic-finance'
  frontImage?: string
  backImage?: string
  title?: string
  topics?: string[]
  problemScope?: string
  roleAndSolution?: string
  workProcess?: string
  outcomeResults?: string
  github?: string
  link?: string
}

export type ExperienceItem = {
  type: 'work' | 'education'
  title: string
  organisation: string
  period: string
  location?: string
  description: string
  highlights?: string[]
  current?: boolean
}

export type CertificationItem = {
  name: string
  issuer: string
  date: string
  credentialUrl?: string
  icon?: string
}

export interface Testimonial {
  content: string
  name: string
  profession?: string
  avatar?: string
}

export interface HeaderItem {
  id: string
  name: string
  link: string
}
