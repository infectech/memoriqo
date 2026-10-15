import { useReveal } from "../hooks/useReveal"

export function PersonalTouch() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="our-story" className="bg-ivory px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16"
      >
        <div
          data-reveal
          className="reveal aspect-[4/5] rounded-[1.75rem] bg-gradient-to-br from-taupe/40 via-ivory to-rose/25"
        />

        <div data-reveal style={{ animationDelay: "140ms" }} className="reveal">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">Why Memoriqo exists</p>
          <h2 className="font-display text-balance text-3xl italic text-ink sm:text-4xl lg:text-5xl">
            Because the smallest details often mean the most.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft">
            We believe the best gifts aren't always the biggest. Sometimes, they're the photographs you almost
            forgot, the words you've been meaning to say, and the little moments that mean everything to someone.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
            Memoriqo brings those pieces together in a place made just for them.
          </p>
          <p className="mt-6 font-display text-xl italic text-ink">
            A little thoughtful. A little unexpected. Entirely personal.
          </p>
        </div>
      </div>
    </section>
  )
}
