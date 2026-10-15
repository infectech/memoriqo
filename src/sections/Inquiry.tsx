import { useEffect, useState, type FormEvent } from "react"

const occasions = [
  "Birthday Surprise",
  "Love & Anniversary",
  "Our Story",
  "Friendship & Memories",
  "Milestone & Achievement",
  "Wedding & Invitation",
  "Something else",
]

const occasionByParam: Record<string, string> = {
  birthday: "Birthday Surprise",
  anniversaries: "Love & Anniversary",
  "our-story": "Our Story",
  friendship: "Friendship & Memories",
  milestones: "Milestone & Achievement",
  wedding: "Wedding & Invitation",
}

export function Inquiry() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")
  const [occasion, setOccasion] = useState("")

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("occasion")
    if (param && occasionByParam[param]) setOccasion(occasionByParam[param])
  }, [])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get("name") || "")
    const email = String(form.get("email") || "")
    const occasion = String(form.get("occasion") || "")
    const details = String(form.get("details") || "")

    const subject = encodeURIComponent(`Memoriqo inquiry — ${occasion || "a gift"}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOccasion: ${occasion}\n\nDetails:\n${details}`,
    )

    window.location.href = `mailto:hello@memoriqo.com?subject=${subject}&body=${body}`
    setStatus("sent")
  }

  return (
    <section id="inquire" className="bg-ivory px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">Start your gift</p>
        <h2 className="font-display text-balance text-4xl italic text-ink sm:text-5xl">Tell us about them.</h2>
        <p className="mt-5 text-ink-soft">
          Share a few details and we'll follow up about next steps — including how to send your photographs and
          messages.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink outline-none focus:border-ink/40"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink outline-none focus:border-ink/40"
            />
          </div>

          <div>
            <label htmlFor="occasion" className="mb-2 block text-sm font-medium text-ink">
              Occasion
            </label>
            <select
              id="occasion"
              name="occasion"
              required
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink outline-none focus:border-ink/40"
            >
              <option value="" disabled>
                Choose an occasion
              </option>
              {occasions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="details" className="mb-2 block text-sm font-medium text-ink">
              Tell us a little about the story
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink outline-none focus:border-ink/40"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-ink px-8 py-3.5 text-sm font-medium tracking-wide text-ivory transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
          >
            Send Inquiry
          </button>

          {status === "sent" && (
            <p className="text-sm text-ink-soft" role="status">
              Opening your email app to send this inquiry to our team — if nothing opened, email us directly at{" "}
              <a href="mailto:hello@memoriqo.com" className="underline">
                hello@memoriqo.com
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
