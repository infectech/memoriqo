import { themeSamples, themeAccentGradient } from "../data/content"
import { images } from "../data/images"
import { useReveal } from "../hooks/useReveal"

export function ThemeShowcase() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="themes" className="bg-paper px-6 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div ref={ref} data-reveal-group className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center reveal" data-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">Theme showcase</p>
          <h2 className="font-display text-balance text-4xl italic text-ink sm:text-5xl">
            Different stories. Different feelings. One thoughtful gift.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Eight starting points, each ready to be made entirely yours. Tap any theme to explore it in detail.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {themeSamples.map((theme, i) => (
            <a
              key={theme.id}
              href={`/themes/${theme.id}`}
              data-reveal
              style={{ animationDelay: `${(i % 3) * 100}ms` }}
              className="reveal hover-lift group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-ink/10 p-6 shadow-sm hover:-translate-y-2 hover:shadow-2xl sm:min-h-[420px] sm:p-7"
            >
              {theme.visual.kind === "image" ? (
                <img
                  src={images[theme.visual.image]}
                  alt={theme.title}
                  className="hover-zoom absolute inset-0 h-full w-full object-cover group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div
                  className={`hover-zoom absolute inset-0 bg-gradient-to-br ${themeAccentGradient[theme.accent]} group-hover:scale-110`}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />

              <div className="relative z-10">
                <span className="inline-block rounded-full border border-ivory/25 bg-ivory/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory backdrop-blur-sm">
                  {theme.mood}
                </span>
                <h3 className="mt-4 font-display text-3xl italic text-ivory sm:text-4xl">{theme.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ivory/85">{theme.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ivory">
                  View this theme
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ivory text-ink transition-transform duration-500 ease-out group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
