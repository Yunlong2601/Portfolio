'use client'
import { useEffect, useRef, useState } from 'react'
import { Users, Award, FolderKanban, Building2 } from 'lucide-react'

type Stat = {
  icon: React.ElementType
  value: number
  suffix: string
  label: string
}

const STATS: Stat[] = [
  { icon: Users,         value: 100, suffix: '+',    label: 'Users Supported Weekly' },
  { icon: Award,         value: 3,   suffix: '',      label: 'Industry Certifications' },
  { icon: FolderKanban,  value: 4,   suffix: '+',     label: 'Client Systems Built' },
  { icon: Building2,     value: 12,  suffix: ' mo',   label: 'Internship at URA' },
]

function useCountUp(target: number, duration = 1400, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) { setCount(0); return }
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])
  return count
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, 1400, active)
  const Icon = stat.icon
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-6 flex-1 min-w-[140px]">
      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <p className="text-3xl font-extrabold tabular-nums leading-none">
        {count}
        <span className="text-primary">{stat.suffix}</span>
      </p>
      <p className="text-xs text-muted-foreground font-medium text-center">{stat.label}</p>
    </div>
  )
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="w-full bg-card border-y border-border"
    >
      <div className="app-container">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={[
                /* right border between columns */
                i % 2 === 0 ? 'border-r border-border' : '',
                /* on ≥sm 4-col: add right border except last */
                i < 3 ? 'sm:border-r sm:border-border' : 'sm:border-r-0',
                /* bottom border on first row of 2-col layout */
                i < 2 ? 'border-b border-border sm:border-b-0' : '',
              ].join(' ')}
            >
              <StatItem stat={stat} active={active} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
