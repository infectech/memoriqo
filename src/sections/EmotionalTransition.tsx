import { useReveal } from "../hooks/useReveal"

export function EmotionalTransition() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="bg-ivory px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div ref={ref} className="mx-auto max-w-3xl text-center reveal">
        <p className="font-display text-balance text-3xl italic leading-snug text-ink sm:text-4xl lg:text-5xl">
          Some moments are too special to disappear into a chat.
        </p>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          A birthday you planned for weeks. A story only the two of you understand. A friendship filled with
          memories. A milestone worth remembering forever.
        </p>
        <p className="mt-6 font-display text-xl italic text-rose-deep">Give those moments a place of their own.</p>
      </div>
    </section>
  )
}
