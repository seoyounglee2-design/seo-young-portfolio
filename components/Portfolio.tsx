'use client'

import { useState, useEffect } from 'react'
import { content, Lang } from '@/lib/content'

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>('en')
  const [scrolled, setScrolled] = useState(false)
  const t = content[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#FAF8F5', color: '#1C1917' }}>

      {/* ── NAV ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(250,248,245,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: scrolled ? '1px solid #E7E3DC' : 'none',
        }}
      >
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold tracking-wide text-sm" style={{ color: '#92400E' }}>
            Portfolio
          </span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium" style={{ color: '#57534E' }}>
              {Object.entries(t.nav).map(([key, label]) => (
                <a key={key} href={`#${key}`} className="transition-colors hover:text-amber-800">
                  {label}
                </a>
              ))}
            </div>
            <button
              onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
              className="flex items-center gap-0 rounded-full border text-xs font-semibold overflow-hidden transition-all"
              style={{ borderColor: '#92400E' }}
            >
              <span
                className="px-3 py-1.5 transition-colors"
                style={{ background: lang === 'en' ? '#92400E' : 'transparent', color: lang === 'en' ? '#FAF8F5' : '#92400E' }}
              >
                EN
              </span>
              <span
                className="px-3 py-1.5 transition-colors"
                style={{ background: lang === 'ko' ? '#92400E' : 'transparent', color: lang === 'ko' ? '#FAF8F5' : '#92400E' }}
              >
                KO
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section
        id="about"
        className="min-h-screen flex items-center pt-20"
        style={{ background: 'linear-gradient(135deg, #FAF8F5 0%, #F5EFE6 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center w-full">

          {/* Avatar placeholder */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div
              className="flex items-center justify-center rounded-2xl shadow-2xl"
              style={{ width: 300, height: 300, background: '#E7E3DC', border: '4px solid #D6CFC4' }}
            >
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" fill="#B8AFA4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#B8AFA4" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="order-2 md:order-1 space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight" style={{ color: '#1C1917' }}>
                {t.hero.name}
              </h1>
              <p className="mt-3 text-xl font-medium" style={{ color: '#57534E' }}>
                {t.hero.title}
              </p>
            </div>
            <p className="text-base leading-relaxed" style={{ color: '#78716C' }}>
              {t.hero.tagline}
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#experience"
                className="px-6 py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ background: '#92400E', color: '#FAF8F5' }}
              >
                {t.hero.cta}
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg text-sm font-semibold border transition-colors hover:bg-stone-100"
                style={{ borderColor: '#92400E', color: '#92400E' }}
              >
                {lang === 'en' ? 'Contact' : '연락하기'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section style={{ background: '#92400E' }}>
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.about.highlights.map((h) => (
            <div key={h.label} className="text-center">
              <p className="text-3xl font-bold" style={{ color: '#FEF3C7' }}>{h.value}</p>
              <p className="mt-1 text-sm" style={{ color: '#FDE68A' }}>{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <SectionHeading title={t.about.heading} />
        <div className="mt-8 space-y-5 max-w-3xl">
          {t.about.body.map((p, i) => (
            <p key={i} className="text-lg leading-8" style={{ color: '#57534E' }}>{p}</p>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
        <SectionHeading title={t.experience.heading} />
        <div className="mt-12 space-y-16">
          {t.experience.items.map((job, i) => (
            <div key={i} className="relative pl-8 border-l-2" style={{ borderColor: '#E7E3DC' }}>
              <div
                className="absolute -left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2"
                style={{ background: '#92400E', borderColor: '#FAF8F5' }}
              />
              <div className="mb-4">
                <div className="flex flex-wrap items-start gap-2 mb-1">
                  <span className="font-bold text-lg" style={{ color: '#1C1917' }}>{job.company}</span>
                  <span className="text-sm px-2 py-0.5 rounded-full" style={{ background: '#FEF3C7', color: '#92400E' }}>
                    {job.location}
                  </span>
                </div>
                <p className="font-semibold text-base" style={{ color: '#44403C' }}>{job.role}</p>
                <p className="text-sm mt-1" style={{ color: '#92400E' }}>{job.period}</p>
              </div>

              {'subroles' in job && job.subroles && (
                <div className="mb-5 space-y-2">
                  {job.subroles.map((sr, j) => (
                    <div key={j} className="pl-4 border-l" style={{ borderColor: '#E7E3DC' }}>
                      <p className="text-sm font-semibold" style={{ color: '#44403C' }}>{sr.title}</p>
                      <p className="text-xs" style={{ color: '#92400E' }}>{sr.period}</p>
                      {sr.detail && <p className="text-xs mt-0.5" style={{ color: '#A8A29E' }}>{sr.detail}</p>}
                    </div>
                  ))}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#92400E' }}>
                    {lang === 'en' ? 'Key Responsibilities' : '주요 업무'}
                  </p>
                  <ul className="space-y-2">
                    {job.responsibilities.map((r, j) => (
                      <li key={j} className="flex gap-2 text-sm leading-6" style={{ color: '#57534E' }}>
                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: '#D97706' }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#92400E' }}>
                    {lang === 'en' ? 'Key Achievements' : '주요 성과'}
                  </p>
                  <ul className="space-y-2">
                    {job.achievements.map((a, j) => (
                      <li key={j} className="flex gap-2 text-sm leading-6" style={{ color: '#57534E' }}>
                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: '#92400E' }} />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── EDUCATION ── */}
      <section id="education" className="max-w-5xl mx-auto px-6 py-20">
        <SectionHeading title={t.education.heading} />
        <div className="mt-8 space-y-6">
          {t.education.items.map((edu, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-6 rounded-xl" style={{ background: '#F5EFE6', border: '1px solid #E7E3DC' }}>
              <div>
                <p className="font-bold text-lg" style={{ color: '#1C1917' }}>{edu.school}</p>
                <p className="text-sm mt-1" style={{ color: '#57534E' }}>{edu.degree}</p>
                <p className="text-sm mt-0.5" style={{ color: '#A8A29E' }}>{edu.location}</p>
              </div>
              <span className="text-sm font-semibold px-4 py-2 rounded-full shrink-0" style={{ background: '#92400E', color: '#FAF8F5' }}>
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── SKILLS ── */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
        <SectionHeading title={t.skills.heading} />
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {t.skills.categories.map((cat) => (
            <div key={cat.title}>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#92400E' }}>
                {cat.title}
              </p>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm px-3 py-2 rounded-lg" style={{ background: '#F5EFE6', color: '#44403C', border: '1px solid #E7E3DC' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── CONTACT ── */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
        <SectionHeading title={t.contact.heading} />
        <p className="mt-4 text-lg max-w-xl" style={{ color: '#57534E' }}>
          {t.contact.subheading}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <div
            className="flex items-center gap-3 px-6 py-4 rounded-xl"
            style={{ background: '#E7E3DC', color: '#A8A29E' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-medium text-sm">[이메일 비공개 / Email hidden]</span>
          </div>
          <div
            className="flex items-center gap-3 px-6 py-4 rounded-xl border"
            style={{ borderColor: '#E7E3DC', color: '#A8A29E' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="font-medium text-sm">[LinkedIn 비공개 / LinkedIn hidden]</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t py-8 text-center text-sm" style={{ borderColor: '#E7E3DC', color: '#A8A29E' }}>
        <p>© 2025 Portfolio</p>
      </footer>
    </div>
  )
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#1C1917' }}>{title}</h2>
      <div className="flex-1 h-px" style={{ background: '#E7E3DC' }} />
    </div>
  )
}

function Divider() {
  return <div className="max-w-5xl mx-auto px-6"><div className="h-px" style={{ background: '#E7E3DC' }} /></div>
}
