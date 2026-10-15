import { themeSamples, themeAccentGradient } from "../data/content"
import { images } from "../data/images"
import { useReveal } from "../hooks/useReveal"

const sizeClasses: Record<(typeof themeSamples)[number]["size"], string> = {
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
  square: "",
}

export function ThemeShowcase() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="bg-paper px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div ref={ref} data-reveal-group className="mx-auto max-w-7xl">
        <div className="max-w-2xl reveal" data-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">Theme showcase</p>
          <h2 className="font-display text-balance text-4xl italic text-ink sm:text-5xl">
            Different stories. Different feelings. One thoughtful gift.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">Eight starting points, each ready to be made entirely yours.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px]">
          {themeSamples.map((theme, i) => (
            <a
              key={theme.id}
              href={`?theme=${theme.id}#inquire`}
              data-reveal
              style={{ animationDelay: `${Math.min(i, 6) * 80}ms` }}
              className={`reveal group relative flex flex-col justify-end overflow-hidden rounded-[1.5rem] border border-ink/10 p-6 transition-transform duration-500 hover:-translate-y-1 ${sizeClasses[theme.size]}`}
            >
              {theme.visual.kind === "image" ? (
                <img
                  src={images[theme.visual.image]}
                  alt={theme.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${themeAccentGradient[theme.accent]} transition-transform duration-700 group-hover:scale-105`}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />

              <div className="relative z-10">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose">
                  {theme.occasion}
                </span>
                <h3 className="mt-2 font-display text-2xl italic text-ivory">{theme.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/85">{theme.description}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ivory">
                  Choose this theme
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
