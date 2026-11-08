import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { themeSamples, themeAccentGradient } from "../data/content"
import { images } from "../data/images"

export function ThemePage({ themeId }: { themeId: string }) {
  const theme = themeSamples.find((sample) => sample.id === themeId)

  if (!theme) {
    return (
      <>
        <Navbar />
        <main className="bg-paper px-6 py-32 text-center sm:px-8">
          <p className="font-display text-3xl italic text-ink">Theme not found</p>
          <p className="mt-3 text-sm text-ink-soft">This theme doesn't exist yet — let's find you another one.</p>
          <a
            href="/#themes"
            className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-ink/90"
          >
            Browse all themes
          </a>
        </main>
        <Footer />
      </>
    )
  }

  const related = themeSamples.filter((sample) => sample.id !== theme.id).slice(0, 3)

  return (
    <>
      <Navbar />
      <main className="bg-paper">
        {/* Hero */}
        <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-ink px-6 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12">
          {theme.visual.kind === "image" ? (
            <img
              src={images[theme.visual.image]}
              alt={theme.title}
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${themeAccentGradient[theme.accent]} opacity-80`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <a href="/#themes" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-ivory/80 transition-colors hover:text-ivory">
              ← All themes
            </a>
            <span className="inline-block rounded-full border border-ivory/25 bg-ivory/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory backdrop-blur-sm">
              {theme.occasion}
            </span>
            <h1 className="mt-5 font-display text-5xl italic leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              {theme.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/85 sm:text-lg">{theme.tagline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/#inquire"
                className="rounded-full bg-ivory px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-transform duration-300 hover:scale-[1.03]"
              >
                Create Your Gift
              </a>
              <span className="rounded-full border border-ivory/30 bg-ivory/10 px-5 py-3 text-sm text-ivory backdrop-blur-sm">
                {theme.mood}
              </span>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">About this theme</p>
              <h2 className="mt-4 font-display text-3xl italic text-ink sm:text-4xl">{theme.description}</h2>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-ink/10 bg-ivory p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-deep">Best for</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{theme.bestFor}</p>
                </div>
                <div className="rounded-[1.5rem] border border-ink/10 bg-ivory p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-deep">Made to feel</p>
                  <p className="mt-3 font-display text-2xl italic text-ink">{theme.mood}</p>
                  <p className="mt-2 text-sm text-ink-soft">Every detail — typography, colour and motion — is matched to this feeling.</p>
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[1.75rem] bg-ink p-7 text-ivory sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose">What's included</p>
                <ul className="mt-5 space-y-3.5">
                  {theme.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ivory/85">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose/20 text-xs text-rose">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/#inquire"
                  className="mt-8 block rounded-full bg-ivory px-6 py-3.5 text-center text-sm font-semibold tracking-wide text-ink transition-transform duration-300 hover:scale-[1.02]"
                >
                  Choose this theme
                </a>
                <p className="mt-3 text-center text-xs text-ivory/60">No commitment — we'll confirm details in your inquiry.</p>
              </div>
            </aside>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-ink/10 px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">Keep exploring</p>
                <h2 className="mt-3 font-display text-3xl italic text-ink sm:text-4xl">You might also love</h2>
              </div>
              <a href="/#themes" className="text-sm font-semibold text-ink underline decoration-rose decoration-2 underline-offset-4">
                View all themes →
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((sample) => (
                <a
                  key={sample.id}
                  href={`/themes/${sample.id}`}
                  className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-ink/10 p-6 shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  {sample.visual.kind === "image" ? (
                    <img
                      src={images[sample.visual.image]}
                      alt={sample.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${themeAccentGradient[sample.accent]} transition-transform duration-700 group-hover:scale-105`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose">{sample.mood}</span>
                    <h3 className="mt-2 font-display text-3xl italic text-ivory">{sample.title}</h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ivory">
                      View theme
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
