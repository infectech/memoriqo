import { useEffect, useState } from "react"
import { nav, inquiryUrl } from "../data/content"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_rgba(36,34,31,0.08)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/logo-memoriqo.png" alt="Memoriqo" className="h-7 w-7 object-contain" />
          <span className="font-display text-2xl tracking-wide text-ink">Memoriqo</span>
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href={inquiryUrl}
            className="rounded-full border border-ink/80 px-6 py-2.5 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-ink hover:text-ivory"
          >
            Create a Gift
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-9 w-9 items-center justify-center lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-6 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[1.5px] w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`grid overflow-hidden bg-ivory transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 px-6 pb-8 pt-2 sm:px-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-4 text-base font-medium text-ink-soft"
              >
                {item.label}
              </a>
            ))}
            <a
              href={inquiryUrl}
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full bg-ink px-6 py-3 text-center text-sm font-medium tracking-wide text-ivory"
            >
              Create a Gift
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
