import { useState } from "react"
import { useReveal } from "../hooks/useReveal"
import { SamplePreviewModal } from "../components/SamplePreviewModal"

export type SampleExperience = {
  id: string
  title: string
  mood: string
  tagline: string
  greeting: string
  message: string
  timeline: { date: string; text: string }[]
  closing: string
  gradient: string
}

const samples: SampleExperience[] = [
  {
    id: "romantic",
    title: "For Rafi, with love",
    mood: "Romantic",
    tagline: "an anniversary, just for us",
    greeting: "Hi love, happy three years.",
    message:
      "I wanted to give you something that couldn't get buried in a chat thread. So here's a little corner of the internet, just for the two of us.",
    timeline: [
      { date: "2023", text: "The rainy Tuesday we first met." },
      { date: "2024", text: "Our first trip, and the photo you hated." },
      { date: "Today", text: "Still choosing you, every single day." },
    ],
    closing: "Here's to every ordinary Sunday we get to share.",
    gradient: "from-rose/50 via-rose/20 to-taupe/30",
  },
  {
    id: "playful",
    title: "Happy Birthday, Nilufar!",
    mood: "Playful",
    tagline: "a birthday surprise",
    greeting: "Surprise! It's your day.",
    message:
      "We couldn't fit everything we love about you into a card, so we built you this instead. Scroll down — there's more.",
    timeline: [
      { date: "Then", text: "The friend group's unofficial mom." },
      { date: "Now", text: "Officially one year wiser (and louder)." },
      { date: "Always", text: "The reason our group chat never sleeps." },
    ],
    closing: "Go have the best year yet. We'll be right here cheering.",
    gradient: "from-sage/45 via-taupe/20 to-ivory",
  },
  {
    id: "elegant",
    title: "A Little Memory Book",
    mood: "Elegant",
    tagline: "for a dear friend",
    greeting: "For the friendship that never needed explaining.",
    message:
      "Ten years, three cities, and more memories than we could count. So we counted them anyway, and put them here.",
    timeline: [
      { date: "2015", text: "Strangers assigned to the same dorm room." },
      { date: "2019", text: "Still roommates, just further apart." },
      { date: "2026", text: "A decade of inside jokes and no explanations needed." },
    ],
    closing: "Here's to the next ten. Same chaos, same us.",
    gradient: "from-mauve/45 via-ivory to-rose/20",
  },
]

export function InteractiveSample() {
  const ref = useReveal<HTMLDivElement>()
  const [active, setActive] = useState<SampleExperience | null>(null)

  return (
    <section className="bg-ink px-6 py-24 text-ivory sm:px-8 sm:py-32 lg:px-12">
      <div ref={ref} className="mx-auto max-w-7xl reveal">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose">Try it yourself</p>
          <h2 className="font-display text-balance text-4xl italic sm:text-5xl">
            Not just a page. A little world of your own.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {samples.map((sample) => (
            <button
              key={sample.id}
              type="button"
              onClick={() => setActive(sample)}
              className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-ivory/15 bg-ivory/5 text-left transition-transform duration-400 hover:-translate-y-1"
            >
              <div className={`h-44 w-full bg-gradient-to-br ${sample.gradient} transition-transform duration-700 group-hover:scale-105`} />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose">{sample.mood}</span>
                <p className="mt-2 font-display text-xl italic text-ivory">{sample.title}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-ivory/90">
                  Preview the Experience
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && <SamplePreviewModal sample={active} onClose={() => setActive(null)} />}
    </section>
  )
}
