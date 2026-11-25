'use client'
import { useEffect, useState } from 'react'

const ROLES = [
  'Forward Deployed Engineer',
  'Software Engineer',
  'Full-Stack Developer',
  'Automation Builder',
]

export function TypingHeadline() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing')

  useEffect(() => {
    const current = ROLES[roleIndex]

    if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('deleting'), 2200)
      return () => clearTimeout(t)
    }

    if (phase === 'deleting') {
      if (displayed.length === 0) {
        setRoleIndex((i) => (i + 1) % ROLES.length)
        setPhase('typing')
        return
      }
      const t = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), 45)
      return () => clearTimeout(t)
    }

    // typing
    if (displayed.length === current.length) {
      setPhase('pausing')
      return
    }
    const t = setTimeout(
      () => setDisplayed(current.slice(0, displayed.length + 1)),
      75,
    )
    return () => clearTimeout(t)
  }, [displayed, phase, roleIndex])

  return (
    <>
      {displayed}
      <span className="inline-block w-[3px] h-[0.85em] bg-foreground ml-1 align-middle animate-pulse rounded-sm" />
    </>
  )
}
