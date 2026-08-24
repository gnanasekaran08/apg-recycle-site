import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'

const categories = [
  {
    title: 'Ferrous Scrapyard Metal',
    icon: '⚙️',
    desc: 'While a small proportion of unprepared obsolete ferrous scrap can be directly used by consumers, the vast majority of purchased iron and steel scrap is sorted and processed by scrap recyclers.',
    items: ['Plates', 'Anchor Chain', 'Metal Buoys', 'Scrap Vessel', 'Wire-rope', 'Scrap Machinery', 'Metal Stamping', 'Steel Turning'],
  },
  {
    title: 'Non-Ferrous Scrapyard Metal',
    icon: '🔩',
    desc: 'The most commonly used non-ferrous metals are aluminium, copper, lead, zinc, nickel, titanium, cobalt, chromium and precious metals — recovered annually and used by smelters, refiners, ingot makers and foundries.',
    items: ['Aluminium', 'Copper', 'Lead', 'Zinc', 'Nickel', 'Titanium', 'Cobalt', 'Chromium'],
  },
  {
    title: 'Other Heavy Metal Scrap Steel',
    icon: '🏗️',
    desc: 'Industrial or commercial scrap steel such as cables/wires, air-con, radiator, motor, compressor, dynamo, transformer, plates, beams, columns and channels may also include scrap machinery and metal stampings.',
    items: ['Cables & Wires', 'Air-con Units', 'Radiators', 'Motors', 'Compressors', 'Dynamos', 'Transformers', 'Beams & Columns'],
  },
]

export default function Products() {
  return (
    <div>
      <Seo
        title="Scrap Materials Products"
        description="Explore ferrous, non-ferrous and heavy industrial scrap steel products handled by APG Recycling, sorted and prepared to commodity-grade specifications."
        path="/products"
      />
      <PageHero
        eyebrow="Products"
        title="Scrap Materials Products"
        description="Non-ferrous scrapyards metal, ferrous scrap and heavy industrial steel — sorted, processed and prepared to commodity-grade specifications."
      />

      <section className="mx-auto max-w-7xl space-y-16 px-5 py-20 sm:px-8">
        {categories.map((cat) => (
          <div key={cat.title} className="grid gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-3xl">
                {cat.icon}
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                {cat.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-700/80">{cat.desc}</p>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center rounded-xl border border-ink-900/5 bg-brand-50/50 px-3 py-6 text-center text-sm font-semibold text-ink-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
