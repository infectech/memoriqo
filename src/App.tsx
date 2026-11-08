import { useEffect, useState } from "react"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Hero } from "./sections/Hero"
import { EmotionalTransition } from "./sections/EmotionalTransition"
import { Experiences } from "./sections/Experiences"
import { HowItWorks } from "./sections/HowItWorks"
import { ThemeShowcase } from "./sections/ThemeShowcase"
import { PersonalTouch } from "./sections/PersonalTouch"
import { Pricing } from "./sections/Pricing"
import { EmotionalProof } from "./sections/EmotionalProof"
import { FAQ } from "./sections/FAQ"
import { Inquiry } from "./sections/Inquiry"
import { FinalCTA } from "./sections/FinalCTA"
import { PrivacyPage, TermsPage } from "./pages/LegalPage"
import { ThemePage } from "./pages/ThemePage"

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EmotionalTransition />
        <Experiences />
        <HowItWorks />
        <ThemeShowcase />
        <PersonalTouch />
        <Pricing />
        <EmotionalProof />
        <FAQ />
        <Inquiry />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export function navigate(path: string) {
  if (path !== window.location.pathname) {
    window.history.pushState({}, "", path)
    window.dispatchEvent(new PopStateEvent("popstate"))
  }
}

function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const anchor = (e.target as HTMLElement)?.closest("a")
      if (!anchor) return
      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("/") || anchor.target === "_blank") return
      e.preventDefault()
      navigate(href)
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [path])

  const page =
    path === "/privacy" ? (
      <PrivacyPage />
    ) : path === "/terms" ? (
      <TermsPage />
    ) : path.startsWith("/themes/") ? (
      <ThemePage themeId={path.replace("/themes/", "")} />
    ) : (
      <HomePage />
    )

  return <div key={path} className="animate-fade-in">{page}</div>
}

export default App
