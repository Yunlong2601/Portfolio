"""Build Shen Yunlong's one-page CV (A4). Usage: python scripts/build_resume.py public/resume.pdf  (needs: pip install reportlab)"""
import sys

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable, KeepTogether, ListFlowable, ListItem, Paragraph,
    SimpleDocTemplate, Spacer, Table, TableStyle,
)

OUT = sys.argv[1]

ACCENT = HexColor('#EA580C')   # site orange
INK = HexColor('#111827')
MUTED = HexColor('#4B5563')
RULE = HexColor('#E5E7EB')

BASE = 'Helvetica'
BOLD = 'Helvetica-Bold'

name = ParagraphStyle('name', fontName=BOLD, fontSize=22, leading=26, textColor=INK, alignment=TA_CENTER)
role = ParagraphStyle('role', fontName=BOLD, fontSize=11, leading=14, textColor=ACCENT, alignment=TA_CENTER)
contact = ParagraphStyle('contact', fontName=BASE, fontSize=8.6, leading=11, textColor=MUTED, alignment=TA_CENTER)
h = ParagraphStyle('h', fontName=BOLD, fontSize=10.5, leading=13, textColor=ACCENT, spaceBefore=7, spaceAfter=1)
body = ParagraphStyle('body', fontName=BASE, fontSize=9, leading=11.8, textColor=INK)
small = ParagraphStyle('small', parent=body, fontSize=8.6, leading=11.2)
job = ParagraphStyle('job', fontName=BOLD, fontSize=9.6, leading=12, textColor=INK)
meta = ParagraphStyle('meta', fontName=BASE, fontSize=8.8, leading=11.5, textColor=MUTED, alignment=2)
org = ParagraphStyle('org', fontName=BASE, fontSize=8.8, leading=11.5, textColor=MUTED)


def section(title):
    return [Paragraph(title.upper(), h), HRFlowable(width='100%', thickness=0.6, color=RULE, spaceBefore=1, spaceAfter=4)]


def bullets(items, style=small):
    return ListFlowable(
        [ListItem(Paragraph(t, style), leftIndent=10, value='circle') for t in items],
        bulletType='bullet', bulletFontSize=5.5, bulletColor=ACCENT, leftIndent=10, bulletOffsetY=-1,
        spaceBefore=1, spaceAfter=3,
    )


def entry(title, organisation, dates, location, items):
    head = Table(
        [[Paragraph(title, job), Paragraph(dates, meta)],
         [Paragraph(organisation, org), Paragraph(location, meta)]],
        colWidths=['72%', '28%'],
    )
    head.setStyle(TableStyle([
        ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    return KeepTogether([head, bullets(items)])


def kv(label, text):
    return Paragraph(f'<font name="{BOLD}">{label}:</font> {text}', small)


story = [
    Paragraph('SHEN YUNLONG', name),
    Paragraph('Forward Deployed Engineer', role),
    Spacer(1, 3),
    Paragraph(
        'yunlong2601@gmail.com &nbsp;|&nbsp; +65 8899 5594 &nbsp;|&nbsp; '
        '<link href="https://www.linkedin.com/in/shenyl/">linkedin.com/in/shenyl</link> &nbsp;|&nbsp; '
        '<link href="https://github.com/Yunlong2601">github.com/Yunlong2601</link><br/>Portfolio: '
        '<link href="https://yunlong2601.github.io/Portfolio/">yunlong2601.github.io/Portfolio</link>',
        contact,
    ),
    Spacer(1, 2),
]

story += section('Summary')
story.append(Paragraph(
    'Forward Deployed Engineer at Zalfion Consulting, working directly with client teams to build the operations '
    'platforms, dashboards and automations Singapore businesses run on, and a software engineering intern at URA. '
    'Works across the stack in Next.js, TypeScript, Supabase and Python, shipping through reviewed pull requests to '
    'live production systems. Background in Cybersecurity &amp; Digital Forensics and IT operations, which shows in '
    'careful access control, handling of client data and reliable delivery.',
    body,
))

story += section('Experience')
story.append(entry(
    'Forward Deployed Engineer', 'Zalfion Consulting', 'Sep 2026 – Present', 'Singapore',
    [
        'Build and maintain operations platforms, dashboards and WhatsApp/AI automations for SMEs in F&amp;B, '
        'property, retail and health, working directly with client teams.',
        'HR platform for a multi-brand F&amp;B group: digital forms with drawn signatures and company letterheads, '
        '7-day expiring response links, applicant tracking, and weekly workforce planning against labour cost.',
        'Property operations dashboard: per-user accounts with owner/staff roles, rate-limited password reset, '
        'embedded team inbox, and a WhatsApp assistant with a database-enforced 30-messages-a-day cap.',
        'Franchise operations and finance: live fault map, technician to-do list, refund approvals and editable '
        'monthly statements with PDF invoices; clinic finance dashboard combining billings across systems with GST reporting.',
    ],
))
story.append(entry(
    'Software Engineer Intern', 'Urban Redevelopment Authority of Singapore (URA)', 'Mar 2026 – Feb 2027', 'Singapore',
    [
        'Contribute to the design and development of internal software systems, working with cross-functional '
        'teams in an Agile setting to deliver reliable, maintainable solutions.',
    ],
))
story.append(entry(
    'IT Support &amp; Operations Assistant', 'Nanyang Polytechnic', 'Oct 2024 – Feb 2026', 'Singapore',
    [
        'Supported 100+ users weekly in high-usage teaching labs, resolving device and access issues with NetSupport '
        'to keep lessons running.',
        'Ran PC imaging with FOG Project and iMac Time Machine backups during refresh cycles; handled account and '
        'device policy tasks in Azure MDM under established procedures.',
    ],
))

story += section('Selected Projects')
story.append(entry(
    'FortiFile — Secure Document Storage Platform', 'Nanyang Polytechnic (team project)', 'Nov 2025 – Feb 2026', 'Singapore',
    [
        'Implemented session-based authentication and RBAC for users and administrators, audit logging of logins '
        'and key actions, and an admin dashboard for log review and export.',
    ],
))

story += section('Skills')
story += [
    kv('Development', 'Next.js, TypeScript, React, Python, Supabase / PostgreSQL, Tailwind CSS, HTML, CSS'),
    kv('Integrations &amp; automation', 'WhatsApp &amp; Chatwoot, email automation, AI agent workflows, Google Sheets, REST APIs'),
    kv('Engineering practice', 'Git &amp; pull requests, CI / GitHub Actions, database migrations, role-based access, code review'),
    kv('IT operations', 'Azure MDM, NetSupport, FOG Project, incident escalation'),
]

story += section('Education')
edu = Table(
    [
        [Paragraph('Diploma in Cybersecurity &amp; Digital Forensics — Nanyang Polytechnic', job), Paragraph('2022 – 2025', meta)],
        [Paragraph('GCE Ordinary Level — Holy Innocents’ High School', job), Paragraph('Jan 2023', meta)],
    ],
    colWidths=['78%', '22%'],
)
edu.setStyle(TableStyle([
    ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ('TOPPADDING', (0, 0), (-1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
]))
story.append(edu)

story += section('Leadership, Certifications &amp; Awards')
story.append(bullets([
    'Vice President, Chinese Cultural Group, Nanyang Polytechnic (Apr 2025 – Apr 2026): co-organised Spring Gala 2026 '
    '(400+ participants) and the Japanese Exchange Programme 2025 (55 visiting students).',
    'Cisco Networking Academy — Introduction to Cybersecurity (Jan 2026); IBM SkillsBuild — Cybersecurity '
    'Fundamentals and Web Development Fundamentals (Jan 2026).',
    'BuildingBloCS Hackathon Silver Award (2023); Youth Cyber Exploration Proficiency Certificate (2023); '
    'Edusave EAGLES Award (2023).',
]))

doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=16 * mm, rightMargin=16 * mm, topMargin=12 * mm, bottomMargin=11 * mm,
    title='Shen Yunlong — Forward Deployed Engineer — CV', author='Shen Yunlong',
    subject='Curriculum vitae', creator='Shen Yunlong',
)
doc.build(story)
print('written', OUT)
