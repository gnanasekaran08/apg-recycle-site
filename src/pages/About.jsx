import PageHero from '../components/PageHero.jsx'

const focusList = [
  'Knowledgeable staff',
  'Service personnel assigned to your account',
  'Next day pick-ups',
  'Competitive offerings for your scrap',
  'Flexible payment terms',
  'Custom equipment and containers',
]

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="A Goal Setting to the Future"
        description="One-stop solutions from steel material rental to scrap metal recycling for your projects."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
              Successful Venture
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Value-Added Recycling Solutions
            </h2>
            <p className="mt-5 leading-relaxed text-ink-700/80">
              Together with a wide range of steel material available, we offer you one-stop
              solutions from steel material rental to scrap metal recycling for your projects. We
              provide value-added services to our customers and create viable recycling solutions.
              APG Recycling can help your business with all recycling needs with a focus on metals.
            </p>
            <p className="mt-4 leading-relaxed text-ink-700/80">
              APG Recycling Pte Ltd provides recycling services to customers through both
              dedicated and shared facilities. Incorporated on 4 December 2014, we have grown into
              a trusted Limited Exempt Private Company serving the recycling needs of businesses
              across Singapore.
            </p>
            <p className="mt-4 leading-relaxed text-ink-700/80">
              All our scrap processing is carried out in strict accordance with internationally
              recognized guidelines set out by the Institute of Scrap Recycling Industries (ISRI).
              Our system uses digital weight indicators so customers can easily view the entire
              weighing process.
            </p>
          </div>

          <div className="rounded-3xl border border-ink-900/5 bg-brand-50/60 p-8 shadow-sm">
            <h3 className="text-lg font-bold text-ink-900">Our focus on your needs ensures we provide:</h3>
            <ul className="mt-6 space-y-4">
              {focusList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-600 text-[10px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-ink-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink-900 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 text-center sm:px-8 md:grid-cols-4">
          {[
            ['2014', 'Founded'],
            ['500+', 'Clients Served'],
            ['ISRI', 'Standards Followed'],
            ['100%', 'Transparent Weighing'],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-3xl font-bold text-brand-400 sm:text-4xl">{value}</div>
              <div className="mt-1 text-sm font-medium text-white/60">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
