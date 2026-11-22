'use client'
import SectionDescription from '@/components/custom/section-description'
import SectionTitle from '@/components/custom/section-title'
import AppSection from '@/components/layout/app-section'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Linkedin, Github, Send } from 'lucide-react'

const ContactSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Enquiry from ${name}`)
    const body = encodeURIComponent(
      `Hi Shen Yunlong,\n\nMy name is ${name} (${email}).\n\n${message}\n\nBest regards,\n${name}`
    )
    window.open(`mailto:yunlong2601@gmail.com?subject=${subject}&body=${body}`)
  }

  const inputBase =
    'w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition'

  return (
    <AppSection id="contact">
      <div className="w-full md:w-2/3 mx-auto mb-20 md:mb-32 text-center">
        <SectionTitle name={"Let's Connect"} />
        <SectionDescription
          content={`I am open to cybersecurity opportunities and professional discussions related to threat monitoring, incident response, and security operations. Feel free to reach out through the channels below or drop me a message directly.`}
        />

        {/* Quick links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-card rounded-lg p-6 flex flex-col items-center gap-3">
            <Linkedin className="text-primary" />
            <p className="font-semibold">LinkedIn</p>
            <Link
              href="https://www.linkedin.com/in/shenyl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:underline"
            >
              linkedin.com/in/shenyl
            </Link>
          </div>

          <div className="bg-card rounded-lg p-6 flex flex-col items-center gap-3">
            <Mail className="text-primary" />
            <p className="font-semibold">Email</p>
            <a
              href="mailto:yunlong2601@gmail.com"
              className="text-sm font-semibold text-primary hover:underline"
            >
              yunlong2601@gmail.com
            </a>
          </div>

          <div className="bg-card rounded-lg p-6 flex flex-col items-center gap-3">
            <Github className="text-primary" />
            <p className="font-semibold">GitHub</p>
            <Link
              href="https://github.com/Yunlong2601"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:underline"
            >
              github.com/Yunlong2601
            </Link>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="mt-14 text-left bg-card rounded-2xl p-6 md:p-10 space-y-5 border border-border"
        >
          <h3 className="text-xl font-bold text-center">Send a Message</h3>
          <p className="text-sm text-muted-foreground text-center -mt-2">
            This will open your email client with your message pre-filled.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold" htmlFor="contact-name">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="Jane Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputBase}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold" htmlFor="contact-email">
                Your Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="jane@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputBase}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              placeholder="Hi Shen, I'd like to connect about..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputBase} resize-none`}
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 font-bold h-12 px-8 gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </AppSection>
  )
}

export default ContactSection
