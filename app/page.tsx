import { Hero } from "./_components/Hero"
import { About } from "./_components/About"
import { Segment } from "./_components/Segment"
import { Services } from "./_components/Services"
import { Differentiators } from "./_components/Differentiators"

export default function Page() {
  return (
    <main className="relative w-full max-w-full overflow-x-hidden">
      <Hero />
      <About />
      <Segment />
      <Services />
      <Differentiators />
    </main>
  )
}
