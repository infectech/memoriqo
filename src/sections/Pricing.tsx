import { pricing, inquiryUrl } from "../data/content"
import { useReveal } from "../hooks/useReveal"

export function Pricing() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="bg-paper px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl reveal" data-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">Personalization</p>
          <h2 className="font-display text-balance text-4xl italic text-ink sm:text-5xl">
            A thoughtful gift, made your way.
          </h2>
        </div>

        <div ref={ref} data-reveal-group className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div
            data-reveal
            className="reveal flex flex-col rounded-[1.75rem] border border-ink/10 bg-ivory p-9"
          >
            <h3 className="font-display text-2xl italic text-ink">{pricing.signature.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{pricing.signature.description}</p>
            <div className="mt-8">
              <span className="text-xs uppercase tracking-wide text-ink-soft/70">{pricing.signature.priceLabel}</span>
              <p className="font-display text-4xl italic text-ink">{pricing.signature.price}</p>
            </div>
            <a
              href={inquiryUrl}
              className="mt-7 inline-block rounded-full bg-ink px-7 py-3 text-center text-sm font-medium tracking-wide text-ivory transition-transform duration-300 hover:-translate-y-0.5"
            >
              {pricing.signature.cta}
            </a>
          </div>

          <div
            data-reveal
            style={{ animationDelay: "120ms" }}
            className="reveal flex flex-col rounded-[1.75rem] border border-ink/10 bg-ink p-9 text-ivory"
          >
            <h3 className="font-display text-2xl italic">{pricing.custom.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory/75">{pricing.custom.description}</p>
            <div className="mt-8">
              <span className="text-xs uppercase tracking-wide text-ivory/60">{pricing.custom.priceLabel}</span>
              <p className="font-display text-4xl italic">{pricing.custom.price}</p>
            </div>
            <a
              href={inquiryUrl}
              className="mt-7 inline-block rounded-full border border-ivory/60 px-7 py-3 text-center text-sm font-medium tracking-wide text-ivory transition-transform duration-300 hover:-translate-y-0.5 hover:bg-ivory hover:text-ink"
            >
              {pricing.custom.cta}
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-ink-soft/70">{pricing.note}</p>
      </div>
    </section>
  )
}
