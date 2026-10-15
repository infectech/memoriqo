import { experiences, type Experience } from "../data/content"
import { images } from "../data/images"
import { useReveal } from "../hooks/useReveal"

const accentText: Record<Experience["accent"], string> = {
  rose: "text-rose-deep",
  sage: "text-[#6f7d63]",
  mauve: "text-[#8a718c]",
  taupe: "text-[#8a7a63]",
}

const sizeClasses: Record<Experience["size"], string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  square: "",
}

export function Experiences() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="experiences" className="bg-paper px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl reveal" data-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">
            Explore experiences
          </p>
          <h2 className="font-display text-balance text-4xl italic text-ink sm:text-5xl">
            What are we celebrating?
          </h2>
          <p className="mt-5 text-lg text-ink-soft">Whatever the occasion, let's make it feel personal.</p>
        </div>

        <div
          ref={ref}
          data-reveal-group
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[280px]"
        >
          {experiences.map((exp, i) => (
            <a
              key={exp.id}
              href={`#${exp.id}`}
              data-reveal
              style={{ animationDelay: `${i * 90}ms` }}
              className={`reveal group relative flex flex-col justify-end overflow-hidden rounded-[1.5rem] border border-ink/10 p-7 transition-transform duration-500 hover:-translate-y-1 ${sizeClasses[exp.size]}`}
            >
              <img
                src={images[exp.image]}
                alt={exp.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/40 to-paper/5" />

              <div className="relative z-10">
                <span className={`font-display text-sm italic ${accentText[exp.accent]}`}>{exp.index}</span>
                <h3 className="mt-2 font-display text-2xl italic text-ink sm:text-3xl">{exp.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">{exp.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink">
                  {exp.cta}
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
