import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const SLIDE_DURATION = 6000

const slides = [
  {
    eyebrow: 'Transparent Metal Recycling · Singapore',
    title: 'Recycling Solutions Built for a',
    highlight: 'Sustainable Tomorrow',
    desc: 'APG Recycling Pte Ltd buys and sells all types of scrap materials with an ethical, honest business model and the most transparent pricing and weighing processes in Singapore.',
    icon: '♻️',
    cta: { label: 'Request a Free Quote', to: '/contact' },
    secondary: { label: 'Explore Our Services', to: '/services' },
    glow: 'radial-gradient(circle at 15% 10%, rgba(20,184,166,0.35), transparent 35%), radial-gradient(circle at 85% 30%, rgba(163,230,53,0.25), transparent 40%)',
  },
  {
    eyebrow: 'Ferrous & Non-Ferrous Scrap',
    title: 'Fair Prices for Every',
    highlight: 'Grade of Scrap Metal',
    desc: 'From aluminium and copper to steel plates and machinery, our digital weighing process gives customers full visibility on every transaction.',
    icon: '⚙️',
    cta: { label: 'View Our Products', to: '/products' },
    secondary: { label: 'How It Works', to: '/about' },
    glow: 'radial-gradient(circle at 80% 15%, rgba(45,212,191,0.35), transparent 35%), radial-gradient(circle at 10% 80%, rgba(20,184,166,0.25), transparent 40%)',
  },
  {
    eyebrow: 'Demolition & Machinery Removal',
    title: 'Full-Service Support for',
    highlight: 'Industrial Projects',
    desc: 'Our teams handle industrial scrap collection, demolition projects and heavy machinery transport — safely, quickly and responsibly.',
    icon: '🏗️',
    cta: { label: 'See Our Services', to: '/services' },
    secondary: { label: 'Get a Quote', to: '/contact' },
    glow: 'radial-gradient(circle at 25% 80%, rgba(163,230,53,0.3), transparent 35%), radial-gradient(circle at 90% 20%, rgba(20,184,166,0.3), transparent 40%)',
  },
  {
    eyebrow: 'ISRI-Standard Processing',
    title: 'Trusted by 500+ Clients',
    highlight: 'Across Singapore',
    desc: 'All scrap processing follows internationally recognized ISRI guidelines, with flexible payment terms and next-day pick-ups.',
    icon: '🤝',
    cta: { label: 'Talk to Our Team', to: '/contact' },
    secondary: { label: 'About APG', to: '/about' },
    glow: 'radial-gradient(circle at 50% 0%, rgba(20,184,166,0.35), transparent 40%), radial-gradient(circle at 15% 90%, rgba(163,230,53,0.2), transparent 40%)',
  },
]

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const goTo = useCallback((index) => {
    setActive((index + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => goTo(active + 1), [active, goTo])
  const prev = useCallback(() => goTo(active - 1), [active, goTo])

  useEffect(() => {
    if (paused) return undefined
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timerRef.current)
  }, [paused, active])

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-ink-900 via-ink-900 to-ink-800"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* All slides sit side by side on one track; a single transform glides them together */}
      <div
        className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ width: `${slides.length * 100}%`, transform: `translateX(-${active * (100 / slides.length)}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.highlight} className="relative shrink-0" style={{ width: `${100 / slides.length}%` }}>
            <div className="absolute inset-0" style={{ backgroundImage: slide.glow }} />
            <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300">
                  <span aria-hidden="true">{slide.icon}</span>
                  {slide.eyebrow}
                </span>
                <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {slide.title}{' '}
                  <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-lime-400 bg-clip-text text-transparent">
                    {slide.highlight}
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">{slide.desc}</p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    to={slide.cta.to}
                    className="rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-3.5 text-center text-sm font-bold text-white shadow-glow transition hover:brightness-110"
                  >
                    {slide.cta.label}
                  </Link>
                  <Link
                    to={slide.secondary.to}
                    className="rounded-xl border border-white/20 px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    {slide.secondary.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="relative mx-auto flex max-w-7xl items-center gap-6 px-5 pb-10 sm:px-8 sm:pb-14">
        <div className="flex gap-2.5">
          {slides.map((s, index) => (
            <button
              key={s.highlight}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
              className="group relative h-1.5 w-10 overflow-hidden rounded-full bg-white/15"
            >
              <span
                className="absolute inset-y-0 left-0 block rounded-full bg-brand-400 transition-[width] duration-300 ease-out"
                style={{ width: index === active ? '100%' : '0%' }}
              />
              {index === active && !paused && (
                <span
                  key={active}
                  className="absolute inset-y-0 left-0 block rounded-full bg-white/70"
                  style={{ animation: `slideProgress ${SLIDE_DURATION}ms linear forwards` }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="ml-auto flex gap-2 sm:ml-0">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition duration-300 hover:bg-white/10 active:scale-90"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition duration-300 hover:bg-white/10 active:scale-90"
          >
            ›
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .transition-transform { transition-duration: 0ms !important; }
        }
      `}</style>
    </section>
  )
}
