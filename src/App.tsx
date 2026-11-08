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

function App() {
  const path = window.location.pathname
  if (path === "/privacy") return <PrivacyPage />
  if (path === "/terms") return <TermsPage />
  if (path.startsWith("/themes/")) return <ThemePage themeId={path.replace("/themes/", "")} />
  return <HomePage />
}

export default App
