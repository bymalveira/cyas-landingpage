import Image from "next/image"
import ServicesImage from "@/public/images/background-services.jpg"
import { TechMarquee } from "./TechMarquee"

export function Services() {
  return (
    <>
      <section className="relative w-full overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <Image
            src={ServicesImage}
            alt="Dashboard"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto max-w-7xl text-center">
          <header>
            <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-white uppercase sm:text-4xl md:text-5xl lg:text-6xl">
              O que usamos na <span className="text-yellow-500">cyas?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed font-bold text-white sm:text-base">
              Usamos tecnoloias modernas para construir o seu sistema.
            </p>
          </header>
        </div>
      </section>

      <TechMarquee />
    </>
  )
}
