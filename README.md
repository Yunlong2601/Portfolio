# Shen Yunlong — Portfolio

**🌐 Live site: [yunlong2601.github.io/Portfolio](https://yunlong2601.github.io/Portfolio/)**  
**📄 CV (PDF): [resume.pdf](https://yunlong2601.github.io/Portfolio/resume.pdf)** · **🤖 AI-readable profile: [llms.txt](https://yunlong2601.github.io/Portfolio/llms.txt)**

Forward Deployed Engineer at Zalfion Consulting, building operations platforms, dashboards and automations for Singapore businesses. Previously Software Engineer Intern at URA. Diploma in Cybersecurity & Digital Forensics, Nanyang Polytechnic.

[LinkedIn](https://www.linkedin.com/in/shenyl/) · [Email](mailto:yunlong2601@gmail.com)

---

## About this site

Next.js 16 (App Router, static export), TypeScript, Tailwind CSS v4 and shadcn/ui, deployed to GitHub Pages by [GitHub Actions](.github/workflows/deploy-pages.yml) on every push to `main`.

Client projects are shown with illustrations that use invented sample data. No client screens, names or records are included.

### Run locally

```bash
npm install
npm run dev      # http://localhost:5000
```

### Where things are

| What | File |
| --- | --- |
| Experience, projects, skills | `mock/index.tsx` |
| Page sections | `app/_components/` |
| Client project illustrations | `components/custom/project-mockups.tsx` |
| AI / search profile | `public/llms.txt`, JSON-LD in `app/layout.tsx` |
| CV | `public/resume.pdf`, regenerate with `python scripts/build_resume.py public/resume.pdf` |
