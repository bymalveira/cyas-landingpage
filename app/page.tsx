import { Hero } from "./_components/Hero"
import { About } from "./_components/About"
import { Segment } from "./_components/Segment"
import { Services } from "./_components/Services"
import { Footer } from "./_components/Footer"
import { FrequentlyAskedQuestions } from "./_components/FrequentlyAskedQuestions"

export default function Page() {
  return (
    <main className="relative w-full max-w-full overflow-x-hidden">
      <Hero />
      <About />
      <Segment />
      <Services />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}
