import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Hero } from "./sections/Hero"
import { EmotionalTransition } from "./sections/EmotionalTransition"
import { Experiences } from "./sections/Experiences"
import { InteractiveSample } from "./sections/InteractiveSample"
import { HowItWorks } from "./sections/HowItWorks"
import { ThemeShowcase } from "./sections/ThemeShowcase"
import { PersonalTouch } from "./sections/PersonalTouch"
import { Pricing } from "./sections/Pricing"
import { EmotionalProof } from "./sections/EmotionalProof"
import { FAQ } from "./sections/FAQ"
import { Inquiry } from "./sections/Inquiry"
import { FinalCTA } from "./sections/FinalCTA"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EmotionalTransition />
        <Experiences />
        <InteractiveSample />
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

export default App
