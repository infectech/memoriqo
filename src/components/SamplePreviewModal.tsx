import { useEffect } from "react"
import type { SampleExperience } from "../sections/InteractiveSample"

export function SamplePreviewModal({
  sample,
  onClose,
}: {
  sample: SampleExperience
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Preview of ${sample.title}`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-4 animate-fade-in sm:p-8"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-[1.75rem] bg-paper shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ivory text-ink shadow"
        >
          ✕
        </button>

        <div className={`h-40 w-full bg-gradient-to-br ${sample.gradient}`} />

        <div className="px-7 py-8 sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-deep">{sample.tagline}</p>
          <h3 className="mt-3 font-display text-3xl italic text-ink">{sample.greeting}</h3>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{sample.message}</p>

          <div className="mt-8">
            <p className="font-hand text-lg text-ink-soft/80">a little timeline, just for you</p>
            <div className="mt-4 space-y-4 border-l border-ink/15 pl-5">
              {sample.timeline.map((item) => (
                <div key={item.date}>
                  <p className="text-xs font-semibold tracking-wide text-rose-deep">{item.date}</p>
                  <p className="text-sm text-ink-soft">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`aspect-square rounded-xl bg-gradient-to-br ${sample.gradient} opacity-70`} />
            ))}
          </div>

          <p className="mt-8 font-display text-lg italic text-ink">{sample.closing}</p>
          <p className="mt-6 text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft/60">
            Sample experience — illustrative content
          </p>
        </div>
      </div>
    </div>
  )
}
