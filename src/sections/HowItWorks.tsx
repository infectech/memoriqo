import { steps } from "../data/content"
import { useReveal } from "../hooks/useReveal"

export function HowItWorks() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="how-it-works" className="bg-ivory px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div ref={ref} data-reveal-group className="mx-auto max-w-7xl">
        <div className="max-w-2xl reveal" data-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">How it works</p>
          <h2 className="font-display text-balance text-4xl italic text-ink sm:text-5xl">
            Made with your memories. Created with care.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              data-reveal
              style={{ animationDelay: `${i * 120}ms` }}
              className="reveal relative"
            >
              <span className="font-display text-6xl italic text-taupe/60">{step.number}</span>
              <h3 className="mt-4 font-display text-2xl italic text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.description}</p>

              {i < steps.length - 1 && (
                <span className="absolute -right-6 top-5 hidden h-px w-12 bg-ink/15 sm:block" aria-hidden />
              )}
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-xl text-sm text-ink-soft/80">
          No coding, no design software, no technical knowledge needed — just your story. Every website is
          personalized and created by hand by the Memoriqo team.
        </p>
      </div>
    </section>
  )
}
