import { images } from "../data/images"
import { useReveal } from "../hooks/useReveal"

const scenarios = [
  {
    title: "A partner opening a surprise anniversary page",
    detail: "Three years of memories, a timeline, and a message they'll read more than once.",
    image: images.experienceAnniversary,
  },
  {
    title: "A friend discovering a collection of shared memories",
    detail: "Every inside joke, every late night, gathered into one small, nostalgic world.",
    image: images.experienceFriendship,
  },
  {
    title: "A graduate receiving a personalized celebration",
    detail: "Years of effort, finally given a page that feels as significant as the moment itself.",
    image: images.experienceMilestones,
  },
  {
    title: "A loved one opening a birthday experience",
    detail: "A playful reveal, their favorite photos, and a message made just for them.",
    image: images.experienceBirthday,
  },
]

export function EmotionalProof() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="bg-ivory px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div ref={ref} data-reveal-group className="mx-auto max-w-7xl">
        <div className="max-w-2xl reveal" data-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">Concept scenarios</p>
          <h2 className="font-display text-balance text-4xl italic text-ink sm:text-5xl">
            Imagine the moment they open it.
          </h2>
          <p className="mt-5 text-sm text-ink-soft/70">
            Illustrative scenarios — imagined examples of how a Memoriqo experience might be used.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {scenarios.map((s, i) => (
            <div
              key={s.title}
              data-reveal
              style={{ animationDelay: `${i * 90}ms` }}
              className="reveal flex gap-5 rounded-[1.5rem] border border-ink/10 bg-paper p-6"
            >
              <img
                src={s.image}
                alt=""
                className="h-20 w-20 flex-shrink-0 rounded-xl object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="font-display text-lg italic text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
