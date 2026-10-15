const links = [
  { label: "Explore Experiences", href: "#experiences" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#inquire" },
]

export function Footer() {
  return (
    <footer className="bg-ivory px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 border-t border-ink/10 pt-12 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl tracking-wide text-ink">Memoriqo</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Personalized digital gifts and interactive occasion websites — every meaningful moment deserves a
              beautiful place to live.
            </p>
            <p className="mt-4 font-hand text-lg text-ink-soft/80">
              Made for the moments that mean everything.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-ink-soft transition-colors hover:text-ink">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 text-xs text-ink-soft/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Memoriqo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-ink-soft">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-ink-soft">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
