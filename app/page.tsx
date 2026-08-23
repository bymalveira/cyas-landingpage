import { Hero } from "./_components/Hero"
import { About } from "./_components/About"
import { Segment } from "./_components/Segment"
import { Services } from "./_components/Services"
import { Differentiators } from "./_components/Differentiators"

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Segment />
      <Services />
      <Differentiators />
    </main>
  )
}
