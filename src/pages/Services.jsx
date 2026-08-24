import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const services = [
  {
    title: 'Industrial Scrap',
    icon: '🏭',
    desc: 'We ensure that your scrap material is properly removed in a safe, efficient manner — minimizing downtime and disruption to your operations.',
  },
  {
    title: 'Demolition Project',
    icon: '🧱',
    desc: 'We have teams of demolition experts who travel the country helping companies get the job done quickly, safely and responsibly.',
  },
  {
    title: 'Machinery Removal & Transport',
    icon: '🚛',
    desc: 'Our specialists can help you develop a plan to transport your large machinery from one location to another.',
  },
]

export default function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Services to Recycling Industries"
        description="We provide full recycler services for recycling industries, offering a wide range of recycling solutions across Singapore."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600">Manage Scrap</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Comprehensive Scrap Management Solutions
            </h2>
            <p className="mt-5 leading-relaxed text-ink-700/80">
              APG Recycling Services has access to huge recycling space in strategic locations in
              Singapore. We offer complete, customized solutions for all of your business needs
              for recycling industrials.
            </p>
            <p className="mt-4 leading-relaxed text-ink-700/80">
              When you create a scrap recycling plan, you need to trust the company that handles
              your scrap metal needs. At APG Recycling Pte Ltd, we have provided recycling services
              for over a decade. Today, we service over 500 clients with comprehensive scrap
              management solutions.
            </p>
          </div>
          <div className="rounded-3xl bg-ink-900 p-8 shadow-lg">
            <ul className="space-y-5 text-white">
              {['Transparent digital weighing', 'Flexible payment terms', 'Custom equipment & containers', 'Next-day pick-up scheduling'].map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-600 text-sm font-bold">✓</span>
                  <span className="text-sm font-medium text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink-900/[0.02] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="rounded-2xl border border-ink-900/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-3xl">
                  {service.icon}
                </div>
                <span className="mt-5 block text-xs font-bold uppercase tracking-widest text-brand-600">
                  {`Service 0${idx + 1}`}
                </span>
                <h3 className="mt-2 text-lg font-bold text-ink-900">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-700/70">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 p-10 shadow-glow sm:flex-row sm:items-center sm:justify-between sm:p-14">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Need a custom recycling plan?</h2>
            <p className="mt-2 max-w-xl text-white/80">
              Tell us about your project and we'll design a scrap management solution around it.
            </p>
          </div>
          <Link
            to="/contact"
            className="whitespace-nowrap rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-brand-700 shadow-lg transition hover:bg-brand-50"
          >
            Talk to Our Team
          </Link>
        </div>
      </section>
    </div>
  )
}
