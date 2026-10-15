import { inquiryUrl } from "../data/content"
import { useReveal } from "../hooks/useReveal"

export function FinalCTA() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 text-ivory sm:px-8 sm:py-32 lg:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-rose/15 blur-3xl"
      />
      <div ref={ref} className="reveal mx-auto max-w-3xl text-center">
        <h2 className="font-display text-balance text-4xl italic sm:text-5xl lg:text-6xl">
          Make something they'll remember.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">
          Your favorite memories. Your words. Your story. A little corner of the internet made just for someone
          special.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <a
            href={inquiryUrl}
            className="rounded-full bg-ivory px-8 py-3.5 text-sm font-medium tracking-wide text-ink transition-transform duration-300 hover:-translate-y-0.5"
          >
            Create a Gift
          </a>
          <a href="#experiences" className="text-sm font-medium tracking-wide text-ivory/90 underline-offset-4 hover:underline">
            Explore the Experiences
          </a>
        </div>

        <p className="mt-10 font-hand text-xl text-ivory/60">made just for someone, by you.</p>
      </div>
    </section>
  )
}
