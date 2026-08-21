import { Hero } from "./_components/Hero"
import { About } from "./_components/About"
import { Navbar } from "./_components/Navbar"
import { Segment } from "./_components/Segment"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Segment />
    </main>
  )
}
