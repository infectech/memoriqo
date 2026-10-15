import { useState } from "react"
import { faqs } from "../data/content"
import { useReveal } from "../hooks/useReveal"

export function FAQ() {
  const ref = useReveal<HTMLDivElement>()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-paper px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div ref={ref} data-reveal-group className="mx-auto max-w-3xl">
        <div className="reveal" data-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">FAQ</p>
          <h2 className="font-display text-balance text-4xl italic text-ink sm:text-5xl">
            Questions you might have.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-ink/10 border-t border-ink/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.question} data-reveal style={{ animationDelay: `${Math.min(i, 6) * 40}ms` }} className="reveal">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg italic text-ink sm:text-xl">{faq.question}</span>
                  <span
                    className={`flex-shrink-0 text-xl text-ink-soft transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-8 text-sm leading-relaxed text-ink-soft">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
