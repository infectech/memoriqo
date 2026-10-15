import { inquiryUrl } from "../data/content"
import { images } from "../data/images"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-rose/20 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-sage/15 blur-3xl sm:h-80 sm:w-80"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10 lg:px-12">
        {/* Text column */}
        <div className="relative z-10 max-w-xl animate-fade-rise" style={{ animationDelay: "80ms" }}>
          <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">
            A little something, made just for them
          </p>
          <h1 className="font-display text-balance text-[2.75rem] italic leading-[1.08] text-ink sm:text-6xl lg:text-[4.2rem]">
            Some feelings deserve more than a message.
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">
            Turn your favorite memories, heartfelt words, and special moments into a beautiful little website made
            just for someone you love.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href={inquiryUrl}
              className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium tracking-wide text-ivory transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Create a Gift
            </a>
            <a
              href="#experiences"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink"
            >
              Explore the Experiences
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          <p className="mt-8 font-hand text-xl text-ink-soft/80">
            personalized with your photos, your words, your story.
          </p>
        </div>

        {/* Visual collage column */}
        <div className="relative z-10 h-[420px] sm:h-[480px] lg:h-[560px]">
          {/* Card 1: anniversary timeline preview */}
          <div
            className="absolute left-0 top-0 w-[62%] -rotate-[4deg] rounded-[1.4rem] border border-ink/10 bg-paper p-5 shadow-[0_30px_60px_-20px_rgba(36,34,31,0.25)] animate-fade-rise sm:w-[58%]"
            style={{ animationDelay: "260ms" }}
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-rose" />
              <span className="h-2 w-2 rounded-full bg-mauve" />
              <span className="h-2 w-2 rounded-full bg-sage" />
            </div>
            <p className="font-display text-lg italic text-ink">Three years, today.</p>
            <img
              src={images.heroSilhouette}
              alt="A couple embracing at sunset"
              className="mt-3 aspect-[4/3] w-full rounded-xl object-cover"
              loading="eager"
            />
            <p className="mt-3 text-xs leading-relaxed text-ink-soft">
              From that rainy Tuesday to every ordinary Sunday since —
            </p>
          </div>

          {/* Card 2: birthday surprise preview */}
          <div
            className="absolute right-0 top-10 w-[54%] rotate-[3deg] rounded-[1.4rem] border border-ink/10 bg-paper p-5 shadow-[0_30px_60px_-20px_rgba(36,34,31,0.22)] animate-fade-rise sm:top-6"
            style={{ animationDelay: "420ms" }}
          >
            <p className="font-display text-base italic text-ink">Happy birthday, Nilufar 🎉</p>
            <img
              src={images.heroBouquet}
              alt="Celebration flowers in warm light"
              className="mt-3 aspect-square w-full rounded-xl object-cover"
              loading="eager"
            />
          </div>

          {/* Card 3: small handwritten note, overlapping */}
          <div
            className="absolute bottom-6 left-10 w-[46%] rotate-[-2deg] rounded-[1.2rem] border border-ink/10 bg-paper p-5 shadow-[0_24px_50px_-18px_rgba(36,34,31,0.2)] animate-fade-rise sm:bottom-0 sm:left-14"
            style={{ animationDelay: "560ms" }}
          >
            <p className="font-hand text-lg text-ink-soft">to the best friend a person could ask for —</p>
            <p className="mt-2 font-hand text-sm text-ink-soft/70">open when you miss me.</p>
          </div>

          {/* Small floating date tag */}
          <div
            className="absolute bottom-16 right-2 flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-4 py-2 text-xs font-medium tracking-wide text-ink-soft shadow-md animate-fade-rise sm:right-6"
            style={{ animationDelay: "680ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-rose-deep" />
            14 Feb
          </div>
        </div>
      </div>
    </section>
  )
}
