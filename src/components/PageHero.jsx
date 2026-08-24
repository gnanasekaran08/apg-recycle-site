export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(20,184,166,0.5), transparent 40%), radial-gradient(circle at 80% 0%, rgba(163,230,53,0.3), transparent 45%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">{eyebrow}</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">{description}</p>
        )}
      </div>
    </section>
  )
}
