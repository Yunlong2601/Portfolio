'use client'
import { useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'

/*
  Illustrations for confidential client work.
  Every name, number and address here is invented sample data — no client
  screens, branding or records are reproduced (Zalfion SOP 07 / PDPA).
*/

export type MockupKind = 'hr-forms' | 'property-ops' | 'franchise-ops' | 'clinic-finance'

type Tone = 'green' | 'amber' | 'red' | 'blue' | 'grey'

const TONE: Record<Tone, string> = {
  green: 'bg-green-500/15 text-green-700 dark:text-green-400',
  amber: 'bg-amber-500/15 text-amber-700 dark:text-amber-400',
  red: 'bg-red-500/15 text-red-700 dark:text-red-400',
  blue: 'bg-blue-500/15 text-blue-700 dark:text-blue-400',
  grey: 'bg-muted text-muted-foreground',
}

const Pill = ({ tone, children }: { tone: Tone; children: React.ReactNode }) => (
  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${TONE[tone]}`}>
    {children}
  </span>
)

const Stat = ({ label, value, hint }: { label: string; value: string; hint?: string }) => (
  <div className="min-w-0 flex-1 rounded-lg border bg-card p-2">
    <p className="truncate text-[10px] text-muted-foreground">{label}</p>
    <p className="text-base font-bold leading-tight tabular-nums">{value}</p>
    {hint && <p className="truncate text-[9px] text-muted-foreground">{hint}</p>}
  </div>
)

const Row = ({ title, sub, pill }: { title: string; sub: string; pill: React.ReactNode }) => (
  <div className="flex items-center justify-between gap-2 border-b px-2 py-1.5 last:border-b-0">
    <div className="min-w-0">
      <p className="truncate text-[11px] font-medium">{title}</p>
      <p className="truncate text-[10px] text-muted-foreground">{sub}</p>
    </div>
    {pill}
  </div>
)

const Title = ({ children, action }: { children: React.ReactNode; action?: string }) => (
  <div className="mb-2 flex items-center justify-between gap-2">
    <p className="text-sm font-bold">{children}</p>
    {action && (
      <span className="rounded-md bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
        {action}
      </span>
    )}
  </div>
)

/* ─── screens (sample data) ─────────────────────────── */

const HrScreen = () => (
  <>
    <Title action="New form">Forms</Title>
    <div className="mb-2 flex gap-2">
      <Stat label="Sent this week" value="24" />
      <Stat label="Signed" value="18" />
      <Stat label="Expiring soon" value="3" hint="links last 7 days" />
    </div>
    <div className="rounded-lg border bg-card">
      <Row title="Employment letter · Applicant A" sub="Brand 1 letterhead · signed 2 Nov" pill={<Pill tone="green">Signed</Pill>} />
      <Row title="Contract · Applicant B" sub="Brand 2 letterhead · expires in 5 days" pill={<Pill tone="amber">Awaiting signature</Pill>} />
      <Row title="Offer letter · Applicant C" sub="Brand 1 letterhead · link expired 30 Oct" pill={<Pill tone="red">Expired</Pill>} />
    </div>
  </>
)

const PropertyScreen = () => (
  <>
    <Title>My work · Enquiries</Title>
    <div className="mb-2 rounded-lg border bg-card p-2">
      <div className="mb-1 flex items-center justify-between text-[10px]">
        <span className="text-muted-foreground">WhatsApp follow-ups today</span>
        <span className="font-semibold tabular-nums">18 / 30</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-[60%] rounded-full bg-primary" />
      </div>
      <p className="mt-1 text-[9px] text-muted-foreground">Daily cap enforced by the database</p>
    </div>
    <div className="rounded-lg border bg-card">
      <Row title="Unit 12, Example Road" sub="Enquiry · assistant replied 2 min ago" pill={<Pill tone="blue">AI replied</Pill>} />
      <Row title="Unit 3, Sample Avenue" sub="Viewing Thu 3 pm · reminder set" pill={<Pill tone="green">Booked</Pill>} />
      <Row title="Unit 8, Demo Street" sub="Asked about price · needs the owner" pill={<Pill tone="amber">Needs a look</Pill>} />
    </div>
  </>
)

const SITES = [
  { x: 18, y: 30, fault: false },
  { x: 42, y: 22, fault: true },
  { x: 70, y: 35, fault: false },
  { x: 30, y: 62, fault: false },
  { x: 58, y: 70, fault: false },
  { x: 82, y: 60, fault: true },
]

const FranchiseScreen = () => (
  <>
    <Title>Sites &amp; faults</Title>
    <div className="flex gap-2">
      <div className="relative h-[150px] flex-1 overflow-hidden rounded-lg border bg-muted/60">
        {/* stylised map: roads + site bubbles */}
        <div className="absolute inset-x-0 top-1/2 h-1.5 bg-background/80" />
        <div className="absolute inset-y-0 left-[45%] w-1.5 bg-background/80" />
        <div className="absolute left-[10%] top-[15%] h-[70%] w-1 rotate-12 bg-background/60" />
        {SITES.map((s, i) => (
          <span
            key={i}
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
            className={`absolute flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[9px] font-bold text-white shadow ${
              s.fault ? 'bg-red-500' : 'bg-green-500'
            }`}
          >
            {s.fault ? '!' : ''}
          </span>
        ))}
      </div>
      <div className="w-[46%] min-w-0 rounded-lg border bg-card">
        <p className="border-b px-2 py-1 text-[10px] font-semibold">To do (3)</p>
        <Row title="Site B · coin jam" sub="1 day late, was due 20 Nov" pill={<Pill tone="red">Late</Pill>} />
        <Row title="Site F · refill" sub="Due today" pill={<Pill tone="amber">Today</Pill>} />
      </div>
    </div>
  </>
)

const BARS = [42, 55, 48, 63, 58, 71]

const ClinicScreen = () => (
  <>
    <Title>Company overview</Title>
    <div className="mb-2 flex gap-2">
      <Stat label="Invoiced (ex GST)" value="$48.2k" hint="incl GST $53.0k" />
      <Stat label="Outstanding" value="$6.1k" />
      <Stat label="Practitioners" value="12" />
    </div>
    <div className="rounded-lg border bg-card p-2">
      <p className="mb-1 text-[10px] text-muted-foreground">Billings by service month (sample)</p>
      <div className="flex h-[70px] items-end gap-2">
        {BARS.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-0.5">
            <div className="w-full rounded-t bg-primary/80" style={{ height: `${h}px` }} />
            <span className="text-[8px] text-muted-foreground">M{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  </>
)

/* ─── how it works (architecture) ───────────────────── */

type Step = { label: string; note?: string; accent?: boolean }

const FLOWS: Record<MockupKind, Step[]> = {
  'hr-forms': [
    { label: 'Manager picks a form', note: 'letter, contract, offer' },
    { label: 'Company letterhead', note: 'right entity logo' },
    { label: 'Email with 7-day link', note: 'from the HR mailbox', accent: true },
    { label: 'Drawn signature', note: 'on phone or laptop' },
    { label: 'Signed copy + history', note: 'emailed and filed' },
  ],
  'property-ops': [
    { label: 'WhatsApp enquiry' },
    { label: 'Listener', note: 'matches the listing' },
    { label: 'AI assistant', note: 'answers from listings data' },
    { label: 'Database cap', note: '30 messages / day', accent: true },
    { label: 'Team dashboard', note: 'owner / staff roles' },
  ],
  'franchise-ops': [
    { label: 'Machine sales & faults' },
    { label: 'Supabase', note: 'one visit-clock rule', accent: true },
    { label: 'Live map & alerts' },
    { label: 'Technician to-do' },
    { label: 'Monthly statement PDF', note: 'franchisee portal' },
  ],
  'clinic-finance': [
    { label: 'Practice system A' },
    { label: 'Practice system B', note: 'exports' },
    { label: 'Python importer', note: 'attribute by service date', accent: true },
    { label: 'Finance dashboard', note: 'ex / incl GST' },
    { label: 'Directors & staff views', note: 'role-based' },
  ],
}

const Flow = ({ steps }: { steps: Step[] }) => (
  <div className="flex h-full flex-col items-stretch justify-center gap-0.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-1.5">
    {steps.map((s, i) => (
      <div key={s.label} className="flex flex-col items-center sm:flex-row sm:gap-1.5">
        <div
          className={`w-full rounded-lg border px-2.5 py-1 text-center sm:w-auto ${
            s.accent ? 'border-primary bg-primary/10' : 'bg-card'
          }`}
        >
          <p className="text-[11px] font-semibold leading-tight">{s.label}</p>
          {s.note && <p className="text-[9px] leading-tight text-muted-foreground">{s.note}</p>}
        </div>
        {i < steps.length - 1 && (
          <>
            <ArrowDown className="h-3 w-3 text-muted-foreground sm:hidden" />
            <ArrowRight className="hidden h-3 w-3 text-muted-foreground sm:block" />
          </>
        )}
      </div>
    ))}
  </div>
)

const SCREENS: Record<MockupKind, () => React.ReactElement> = {
  'hr-forms': HrScreen,
  'property-ops': PropertyScreen,
  'franchise-ops': FranchiseScreen,
  'clinic-finance': ClinicScreen,
}

export function ProjectMockup({ kind }: { kind: MockupKind }) {
  const [view, setView] = useState<'screen' | 'flow'>('screen')
  const Screen = SCREENS[kind]

  return (
    <div className="flex h-[320px] w-full flex-col overflow-hidden rounded-xl border bg-muted/40 shadow-sm">
      {/* window bar + tabs */}
      <div className="flex items-center justify-between gap-2 border-b bg-card px-3 py-1.5">
        <div className="flex gap-1" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
        </div>
        <div className="flex gap-1" role="tablist" aria-label="Illustration view">
          {(['screen', 'flow'] as const).map((v) => (
            <button
              key={v}
              type="button"
              role="tab"
              aria-selected={view === v}
              onClick={() => setView(v)}
              className={`rounded-md px-2 py-0.5 text-[10px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                view === v ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {v === 'screen' ? 'Screen' : 'How it works'}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden p-3">
        {view === 'screen' ? <Screen /> : <Flow steps={FLOWS[kind]} />}
      </div>

      <p className="border-t bg-card px-3 py-1 text-[9px] text-muted-foreground">
        Illustration with sample data — not a client screen
      </p>
    </div>
  )
}
