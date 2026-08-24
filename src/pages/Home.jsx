import { Link } from 'react-router-dom'

const stats = [
  { label: 'Years of Trust', value: '10+' },
  { label: 'Clients Served', value: '500+' },
  { label: 'Tonnes Recycled', value: '20K+' },
  { label: 'Metal Categories', value: '15+' },
]

const materials = [
  {
    title: 'Ferrous Scrap Metal',
    desc: 'Plates, anchor chains, metal buoys, scrap vessels, wire-rope, machinery and steel turnings prepared to commodity-grade specifications.',
    icon: '⚙️',
  },
  {
    title: 'Non-Ferrous Scrap Metal',
    desc: 'Aluminium, copper, lead, zinc, nickel, titanium, cobalt, chromium and precious metals recovered for smelters and refiners.',
    icon: '🔩',
  },
  {
    title: 'Industrial Scrap Steel',
    desc: 'Cables/wires, air-con units, radiators, motors, compressors, dynamos, transformers, beams, columns and channels.',
    icon: '🏗️',
  },
]

const services = [
  {
    title: 'Industrial Scrap Collection',
    desc: 'We ensure your scrap material is removed safely and efficiently, with transparent weighing on-site.',
  },
  {
    title: 'Demolition Projects',
    desc: 'Our demolition experts help companies clear sites and reclaim scrap value quickly and responsibly.',
  },
  {
    title: 'Machinery Removal & Transport',
    desc: 'Specialists plan and execute the safe transport of heavy machinery between locations.',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink-900 via-ink-900 to-ink-800">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 10%, rgba(20,184,166,0.35), transparent 35%), radial-gradient(circle at 85% 30%, rgba(163,230,53,0.25), transparent 40%)',
          }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:flex-row lg:items-center lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300">
              Transparent Metal Recycling · Singapore
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Recycling Solutions Built for a{' '}
              <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-lime-400 bg-clip-text text-transparent">
                Sustainable Tomorrow
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              APG Recycling Pte Ltd buys and sells all types of scrap materials with an ethical,
              honest business model and the most transparent pricing and weighing processes in
              Singapore.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-3.5 text-center text-sm font-bold text-white shadow-glow transition hover:brightness-110"
              >
                Request a Free Quote
              </Link>
              <Link
                to="/services"
              className="rounded-xl border border-white/20 px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-brand-400/30"
              >
                <div className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600">Who we are</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Recycling Planning, Organized by Section, Category & Grade
            </h2>
            <p className="mt-5 leading-relaxed text-ink-700/80">
              APG Recycling was established to promote trade in the recycling industry, organized
              by section, category and grade of recycled commodities. We recycle ferrous,
              non-ferrous, cables/wires, air-con, radiator, motor, compressor, dynamo and
              transformer scrap metals.
            </p>
            <p className="mt-4 leading-relaxed text-ink-700/80">
              We buy from a wide range of sources: the general public, other scrap metal
              merchants, construction and demolition contractors, local trades &amp; businesses,
              manufacturers, blue-chip organisations and government bodies — from contracts of
              hundreds of tonnes to small individual deliveries.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-800"
            >
              Learn more about us
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ['Ethical & Honest', 'Business model built on trust and transparency.'],
              ['Fair Weighing', 'Digital weight indicators for easy customer viewing.'],
              ['ISRI Guidelines', 'Scrap processing follows internationally recognized standards.'],
              ['Any Volume', 'From bulk contracts to small individual deliveries.'],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-ink-900/5 bg-brand-50/50 p-5 shadow-sm"
              >
                <h3 className="font-bold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-ink-900/[0.02] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600">Our materials</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              A Full Range of Scrap Materials
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {materials.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-ink-900/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-2xl">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-700/70">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-ink-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-ink-800"
            >
              View All Products
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-600">What we do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Full Recycler Services for Recycling Industries
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="relative overflow-hidden rounded-2xl bg-ink-900 p-7 text-white shadow-lg"
            >
              <span className="text-5xl font-bold text-white/10">{`0${idx + 1}`}</span>
              <h3 className="mt-3 text-lg font-bold">{service.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/60">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 p-10 shadow-glow sm:flex-row sm:items-center sm:justify-between sm:p-14">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to recycle your scrap the right way?
            </h2>
            <p className="mt-2 max-w-xl text-white/80">
              Get in touch for competitive rates, next-day pick-ups and flexible payment terms.
            </p>
          </div>
          <Link
            to="/contact"
            className="whitespace-nowrap rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-brand-700 shadow-lg transition hover:bg-brand-50"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}
