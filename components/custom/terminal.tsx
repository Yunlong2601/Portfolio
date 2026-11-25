'use client'
import {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
} from 'react'
import { TerminalIcon, X, ChevronRight } from 'lucide-react'

/* ─── types ─────────────────────────────────────────── */
type LineKind = 'input' | 'output' | 'success' | 'error' | 'dim' | 'system'
type Line = { id: string; kind: LineKind; text: string }

let _id = 0
const uid = () => String(++_id)

const line = (kind: LineKind, text: string): Line => ({ id: uid(), kind, text })

/* ─── banner ─────────────────────────────────────────── */
const BANNER: Line[] = [
  line('system', '╔══════════════════════════════════════════╗'),
  line('system', '║  shenyl@portfolio  ~  v1.0               ║'),
  line('system', '║  Forward Deployed Engineer  |  Singapore║'),
  line('system', '╚══════════════════════════════════════════╝'),
  line('dim',    ''),
  line('output', 'Welcome! Type  help  to see available commands.'),
  line('dim',    ''),
]

/* ─── command definitions ────────────────────────────── */
const COMMANDS: Record<string, () => Line[]> = {
  help: () => [
    line('output',  'Available commands:'),
    line('dim',     ''),
    line('success', '  whoami        → who am I?'),
    line('success', '  ls            → list portfolio sections'),
    line('success', '  ls projects   → show my projects'),
    line('success', '  cat skills    → view skill breakdown'),
    line('success', '  cat resume    → view experience'),
    line('success', '  contact       → get in touch'),
    line('success', '  sudo hire-me  → 🔑 special command'),
    line('success', '  ping shenyl   → test connection'),
    line('success', '  clear         → clear screen'),
    line('success', '  exit          → close terminal'),
    line('dim',     ''),
  ],

  whoami: () => [
    line('success', 'Shen Yunlong'),
    line('output',  'Role:     Forward Deployed Engineer @ Zalfion Consulting'),
    line('output',  '          Software Engineer Intern @ URA Singapore'),
    line('output',  'Degree:   Dip. Cybersecurity & Digital Forensics (NP)'),
    line('output',  'Location: Singapore 🇸🇬'),
    line('output',  'Email:    yunlong2601@gmail.com'),
    line('output',  'GitHub:   github.com/Yunlong2601'),
    line('output',  'LinkedIn: linkedin.com/in/shenyl'),
    line('dim',     ''),
  ],

  ls: () => [
    line('output',  'Portfolio sections:'),
    line('success', '  drwxr-xr-x  home/'),
    line('success', '  drwxr-xr-x  about/'),
    line('success', '  drwxr-xr-x  experience/'),
    line('success', '  drwxr-xr-x  skills/'),
    line('success', '  drwxr-xr-x  projects/'),
    line('success', '  drwxr-xr-x  contact/'),
    line('dim',     ''),
    line('dim',     'Try "ls projects" for project list.'),
    line('dim',     ''),
  ],

  'ls projects': () => [
    line('output',  'Projects:'),
    line('success', '  [1]  HR & Hiring Platform (F&B group)'),
    line('success', '  [2]  Property Operations Dashboard & WhatsApp Assistant'),
    line('success', '  [3]  Franchise Operations Platform'),
    line('success', '  [4]  Clinic Finance Dashboard'),
    line('success', '  [5]  FortiFile — Secure Document Storage Platform'),
    line('success', '  [6]  Digital Bookstore — User Account Management'),
    line('success', '  [7]  Japanese Exchange Programme 2025 (Leadership)'),
    line('dim',     ''),
  ],

  'cat skills': () => [
    line('output',  '[ Development ]'),
    line('success', '  Next.js · TypeScript · React · Python'),
    line('success', '  Supabase / PostgreSQL · Tailwind CSS'),
    line('dim',     ''),
    line('output',  '[ Integrations & Automation ]'),
    line('success', '  WhatsApp & Chatwoot · Email · AI agents · REST APIs'),
    line('dim',     ''),
    line('output',  '[ Engineering Practice ]'),
    line('success', '  Git & PRs · CI · DB migrations · Role-based access'),
    line('dim',     ''),
  ],

  'cat resume': () => [
    line('output',  '─── Work Experience ──────────────────────────────'),
    line('success', '  [Current] Forward Deployed Engineer'),
    line('output',  '            Zalfion Consulting'),
    line('dim',     '            Sep 2026 – Present · Singapore'),
    line('dim',     ''),
    line('success', '  [Current] Software Engineer Intern'),
    line('output',  '            Urban Redevelopment Authority (URA)'),
    line('dim',     '            Mar 2026 – Feb 2027 · Singapore'),
    line('dim',     ''),
    line('success', '  IT Support & Operations Assistant'),
    line('output',  '            Nanyang Polytechnic'),
    line('dim',     '            Oct 2024 – Feb 2026 · Singapore'),
    line('dim',     ''),
    line('output',  '─── Education ────────────────────────────────────'),
    line('success', '  Diploma in Cybersecurity & Digital Forensics'),
    line('output',  '            Nanyang Polytechnic  |  2022 – 2025'),
    line('dim',     ''),
    line('output',  '─── Certifications ───────────────────────────────'),
    line('success', '  🛡️  Cisco — Introduction to Cybersecurity (Jan 2026)'),
    line('success', '  🔐  IBM  — Cybersecurity Fundamentals (Jan 2026)'),
    line('success', '  🌐  IBM  — Web Development Fundamentals (Jan 2026)'),
    line('dim',     ''),
  ],

  contact: () => [
    line('output',  'Contact Shen Yunlong:'),
    line('dim',     ''),
    line('success', '  📧  yunlong2601@gmail.com'),
    line('success', '  💼  linkedin.com/in/shenyl'),
    line('success', '  💻  github.com/Yunlong2601'),
    line('dim',     ''),
    line('dim',     'Or scroll down to the contact form ↓'),
    line('dim',     ''),
  ],

  'sudo hire-me': () => [
    line('dim',     '[sudo] password for recruiter: ••••••••'),
    line('dim',     ''),
    line('success', '✓ Authentication successful.'),
    line('success', '✓ Privilege escalation granted.'),
    line('success', '✓ Initiating hire sequence...'),
    line('dim',     ''),
    line('output',  'Shen Yunlong is available for:'),
    line('success', '  → Software Engineer roles'),
    line('success', '  → Full-Stack Developer positions'),
    line('success', '  → Automation & integration projects'),
    line('dim',     ''),
    line('success', '📧 Send offer to: yunlong2601@gmail.com'),
    line('dim',     ''),
  ],

  'ping shenyl': () => [
    line('output',  'PING shenyl (yunlong2601@gmail.com) 56 bytes'),
    line('success', '64 bytes from shenyl: icmp_seq=1 ttl=64 time=12.3 ms'),
    line('success', '64 bytes from shenyl: icmp_seq=2 ttl=64 time=8.1 ms'),
    line('success', '64 bytes from shenyl: icmp_seq=3 ttl=64 time=10.7 ms'),
    line('dim',     ''),
    line('output',  '--- shenyl ping statistics ---'),
    line('success', '3 packets tx, 3 received, 0% packet loss'),
    line('success', 'Status: Open to new connections 🤝'),
    line('dim',     ''),
  ],

  nmap: () => [
    line('error',  '⚠  Starting Nmap scan on shenyl...'),
    line('error',  '   FIREWALL DETECTED — scan blocked.'),
    line('dim',    '   Tip: try "contact" instead of unauthorised recon.'),
    line('dim',    ''),
  ],

  pwd: () => [line('output', '/home/shenyl/portfolio'), line('dim', '')],

  date: () => [line('output', new Date().toUTCString()), line('dim', '')],

  uname: () => [
    line('output', 'Portfolio OS 1.0 (Next.js 15 / Turbopack) #1 SMP x86_64'),
    line('dim',    ''),
  ],
}

/* ─── colour map ─────────────────────────────────────── */
const KIND_CLASS: Record<LineKind, string> = {
  input:   'text-orange-400',
  output:  'text-green-300',
  success: 'text-green-400',
  error:   'text-red-400',
  dim:     'text-green-700',
  system:  'text-orange-300',
}

/* ─── component ──────────────────────────────────────── */
export function Terminal() {
  const [open, setOpen]       = useState(false)
  const [lines, setLines]     = useState<Line[]>(BANNER)
  const [input, setInput]     = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const [hint, setHint]       = useState(false)

  const inputRef  = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  // scroll to bottom on new lines
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  // focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  // show hint bubble after 4 s on first load
  useEffect(() => {
    const t = setTimeout(() => setHint(true), 4000)
    return () => clearTimeout(t)
  }, [])

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return

    // record history
    setHistory((h) => [cmd, ...h.slice(0, 49)])
    setHistIdx(-1)

    // echo input
    const echo = line('input', `$ ${cmd}`)

    if (cmd === 'clear') {
      setLines([...BANNER])
      setInput('')
      return
    }
    if (cmd === 'exit') {
      setLines((l) => [...l, echo, line('dim', 'Goodbye 👋'), line('dim', '')])
      setInput('')
      setTimeout(() => setOpen(false), 600)
      return
    }

    const handler = COMMANDS[cmd]
    const response = handler
      ? handler()
      : [
          line('error', `command not found: ${cmd}`),
          line('dim',   'Type "help" to see available commands.'),
          line('dim',   ''),
        ]

    setLines((l) => [...l, echo, ...response])
    setInput('')
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input)
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, history.length - 1)
      setHistIdx(next)
      setInput(history[next] ?? '')
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = histIdx - 1
      if (next < 0) { setHistIdx(-1); setInput(''); return }
      setHistIdx(next)
      setInput(history[next] ?? '')
    }
  }

  return (
    <>
      {/* Floating trigger button */}
      <div className="fixed bottom-20 right-4 z-50 flex flex-col items-end gap-2">
        {/* hint bubble */}
        {hint && !open && (
          <div
            className="bg-foreground text-background text-xs font-mono px-3 py-1.5 rounded-lg shadow-lg animate-bounce cursor-pointer select-none"
            onClick={() => { setOpen(true); setHint(false) }}
          >
            $ try the terminal
          </div>
        )}

        <button
          onClick={() => { setOpen((o) => !o); setHint(false) }}
          aria-label="Toggle terminal"
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200
            ${open
              ? 'bg-red-500 hover:bg-red-600 rotate-90'
              : 'bg-neutral-900 dark:bg-neutral-700 hover:bg-neutral-700 dark:hover:bg-neutral-600'
            }`}
        >
          {open
            ? <X className="w-5 h-5 text-white" />
            : <TerminalIcon className="w-5 h-5 text-green-400" />
          }
        </button>
      </div>

      {/* Terminal window */}
      {open && (
        <div
          className="fixed bottom-36 right-4 z-50 w-[min(680px,calc(100vw-2rem))] h-[min(420px,calc(100dvh-14rem))]
                     bg-neutral-950 border border-neutral-700 rounded-xl shadow-2xl
                     flex flex-col overflow-hidden font-mono text-sm"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-neutral-700 shrink-0">
            <button
              onClick={() => setOpen(false)}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
              aria-label="Close"
            />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-auto text-neutral-400 text-xs">
              shenyl@portfolio ~ bash
            </span>
          </div>

          {/* Output area */}
          <div
            className="flex-1 overflow-y-auto px-4 py-3 space-y-0.5 text-xs leading-5"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((l) => (
              <div key={l.id} className={KIND_CLASS[l.kind]}>
                {l.text || '\u00A0'}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input row */}
          <div className="shrink-0 flex items-center gap-2 px-4 py-3 border-t border-neutral-700 bg-neutral-950">
            <ChevronRight className="w-4 h-4 text-orange-400 shrink-0" />
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              className="flex-1 bg-transparent text-green-300 text-xs outline-none placeholder:text-neutral-600 caret-green-400"
              placeholder="type a command…"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
          </div>
        </div>
      )}
    </>
  )
}
