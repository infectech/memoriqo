export function Legal() {
  return (
    <section className="bg-paper px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl space-y-16">
        <div id="privacy">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">Privacy Policy</p>
          <h2 className="font-display text-2xl italic text-ink sm:text-3xl">How we handle your information</h2>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
            <p>
              When you submit an inquiry, we collect the details you share with us — your name, email address, the
              occasion, and any photographs or messages you send us afterward — solely to design and deliver your
              personalized website.
            </p>
            <p>
              We do not sell your personal information or your recipient's information to third parties. We use it
              only to communicate with you about your order and to build the experience you've asked for.
            </p>
            <p className="text-xs text-ink-soft/60">
              Memoriqo is a small, early-stage team. This is a plain-language summary rather than a complete legal
              policy; a full data-handling policy will be published as we formalize our terms.
            </p>
          </div>
        </div>

        <div id="terms">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">Terms of Service</p>
          <h2 className="font-display text-2xl italic text-ink sm:text-3xl">The basics of working with us</h2>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
            <p>
              Submitting an inquiry starts a conversation, not a confirmed order — we'll follow up to confirm pricing,
              timeline, and next steps before any payment is made.
            </p>
            <p>
              Prices shown on this page are indicative for our initial Bangladesh launch and are confirmed with you
              directly before you commit to an order. Delivery timelines, revision terms, and hosting duration are
              also confirmed per order, since they can vary by package.
            </p>
            <p className="text-xs text-ink-soft/60">
              Formal terms of service will be published as Memoriqo grows; until then, specific commitments are made
              directly with each customer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
