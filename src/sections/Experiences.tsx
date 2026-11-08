import { experiences, type Experience } from "../data/content"
import { images } from "../data/images"
import { useReveal } from "../hooks/useReveal"

const accentStyles: Record<Experience["accent"], string> = {
  rose: "bg-rose/15 text-rose-deep border-rose/20",
  sage: "bg-sage/15 text-[#6f7d63] border-sage/25",
  mauve: "bg-mauve/15 text-[#8a718c] border-mauve/25",
  taupe: "bg-taupe/20 text-[#8a7a63] border-taupe/30",
}

export function Experiences() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="experiences" className="bg-paper px-6 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div ref={ref} data-reveal-group className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center reveal" data-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">
            Explore experiences
          </p>
          <h2 className="font-display text-balance text-4xl italic text-ink sm:text-5xl">
            What are we celebrating?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Whatever the occasion, let's make it feel personal.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <a
              key={exp.id}
              href={exp.id === "our-story" ? "#our-story" : `?occasion=${exp.id}#inquire`}
              data-reveal
              style={{ animationDelay: `${(i % 3) * 100}ms` }}
              className="reveal hover-lift group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-ink/10 shadow-sm hover:-translate-y-2 hover:shadow-2xl sm:min-h-[380px]"
            >
              <img
                src={images[exp.image]}
                alt={exp.title}
                className="hover-zoom absolute inset-0 h-full w-full object-cover group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/50 to-paper/5" />

              <div className="relative z-10 p-6 sm:p-7">
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 font-display text-sm italic ${accentStyles[exp.accent]}`}
                >
                  {exp.index}
                </span>
                <h3 className="mt-4 font-display text-3xl italic text-ink">{exp.title}</h3>
                <p className="mt-2 line-clamp-2 max-w-sm text-sm leading-relaxed text-ink-soft">{exp.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                  {exp.cta}
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-ivory transition-transform duration-500 ease-out group-hover:translate-x-1.5">
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
