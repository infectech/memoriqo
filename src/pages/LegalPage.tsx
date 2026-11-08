type LegalPageProps = {
  title: string
  heading: string
  paragraphs: string[]
  note: string
}

function LegalPage({ title, heading, paragraphs, note }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-ivory">
      <header className="px-6 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/logo-memoriqo.png" alt="Memoriqo" className="h-7 w-7 object-contain" />
            <span className="font-display text-2xl tracking-wide text-ink">Memoriqo</span>
          </a>
          <a href="/" className="text-sm font-medium tracking-wide text-ink-soft transition-colors hover:text-ink">
            ← Back to Home
          </a>
        </div>
      </header>

      <main className="bg-paper px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">{title}</p>
          <h1 className="font-display text-3xl italic text-ink sm:text-4xl">{heading}</h1>
          <div className="mt-6 space-y-3 text-sm leading-relaxed text-ink-soft">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="text-xs text-ink-soft/60">{note}</p>
          </div>
        </div>
      </main>

      <footer className="bg-ivory px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-ink-soft/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Memoriqo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-ink-soft">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-ink-soft">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      heading="How we handle your information"
      paragraphs={[
        "When you submit an inquiry, we collect the details you share with us — your name, email address, the occasion, and any photographs or messages you send us afterward — solely to design and deliver your personalized website.",
        "We do not sell your personal information or your recipient's information to third parties. We use it only to communicate with you about your order and to build the experience you've asked for.",
      ]}
      note="Memoriqo is a small, early-stage team. This is a plain-language summary rather than a complete legal policy; a full data-handling policy will be published as we formalize our terms."
    />
  )
}

export function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      heading="The basics of working with us"
      paragraphs={[
        "Submitting an inquiry starts a conversation, not a confirmed order — we'll follow up to confirm pricing, timeline, and next steps before any payment is made.",
        "Prices shown on this page are indicative for our initial Bangladesh launch and are confirmed with you directly before you commit to an order. Delivery timelines, revision terms, and hosting duration are also confirmed per order, since they can vary by package.",
      ]}
      note="Formal terms of service will be published as Memoriqo grows; until then, specific commitments are made directly with each customer."
    />
  )
}
