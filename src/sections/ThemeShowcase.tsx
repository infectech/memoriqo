import { themeSamples, inquiryUrl } from "../data/content"
import { images } from "../data/images"
import { useReveal } from "../hooks/useReveal"

export function ThemeShowcase() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="bg-paper px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl reveal" data-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">Theme showcase</p>
          <h2 className="font-display text-balance text-4xl italic text-ink sm:text-5xl">
            Different stories. Different feelings. One thoughtful gift.
          </h2>
        </div>

        <div ref={ref} data-reveal-group className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {themeSamples.map((theme, i) => (
            <div
              key={theme.id}
              data-reveal
              style={{ animationDelay: `${i * 100}ms` }}
              className="reveal group flex flex-col overflow-hidden rounded-[1.5rem] border border-ink/10 bg-paper"
            >
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={images[theme.image]}
                  alt={theme.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft/70">{theme.mood}</span>
                <h3 className="mt-2 font-display text-2xl italic text-ink">{theme.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{theme.description}</p>
                <a
                  href={inquiryUrl}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink"
                >
                  Preview this theme
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
