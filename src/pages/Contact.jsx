import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'

const initialForm = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <div>
      <Seo
        title="Contact Us"
        description="Get in touch with APG Recycling for a scrap metal quote, pick-up scheduling or recycling enquiries. Office at No 1 Soon Lee Street, Singapore 627605."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk Recycling"
        description="Reach out for a quote, scrap pick-up scheduling, or to discuss your recycling needs — our team responds quickly."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            {[
              {
                label: 'Office / Warehouse',
                value: 'No 1 Soon Lee Street, #01-11 Pioneer Centre, Singapore 627605',
                icon: '📍',
              },
              { label: 'Phone', value: '+65 6000 0000', icon: '📞', href: 'tel:+6560000000' },
              {
                label: 'Email',
                value: 'info@apgrecycling.com.sg',
                icon: '✉️',
                href: 'mailto:info@apgrecycling.com.sg',
              },
              { label: 'Working Hours', value: 'Mon – Sat: 8:30am – 6:00pm', icon: '🕒' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-ink-900/5 bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-100 text-xl">
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block font-semibold text-ink-900 hover:text-brand-700">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-semibold text-ink-900">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-ink-900/5 bg-white p-8 shadow-lg sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900">Send Us a Message</h2>
              <p className="mt-2 text-sm text-ink-700/70">
                Fill in the form and our team will get back to you within one business day.
              </p>

              {submitted && (
                <div className="mt-6 rounded-xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">
                  Thank you! Your message has been received.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="text-sm font-semibold text-ink-800">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-ink-900/10 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                    placeholder="John Tan"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="text-sm font-semibold text-ink-800">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-ink-900/10 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                    placeholder="+65 9000 0000"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="text-sm font-semibold text-ink-800">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-ink-900/10 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold text-ink-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-ink-900/10 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                    placeholder="Tell us about the scrap materials or service you need..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-glow transition hover:bg-brand-500 sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-ink-900/5 shadow-sm">
          <iframe
            title="APG Recycling Location"
            src="https://www.google.com/maps?q=No%201%20Soon%20Lee%20Street%2C%20Pioneer%20Centre%2C%20Singapore%20627605&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  )
}
