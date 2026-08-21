import Image from "next/image"
import AboutImage from "@/public/images/background-about.jpg"
import {
  Landmark,
  Newspaper,
  PackagePlus,
  SquareDashedText,
  type LucideIcon,
} from "lucide-react"

interface CardProps {
  icon: LucideIcon
  title: string
  description: string
}

const cards: CardProps[] = [
  {
    icon: Landmark,
    title: "Financeiro",
    description:
      "Substitua planilhas por um sistema mais organizado e automatizado para facilitar sua gestão financeira.",
  },
  {
    icon: Newspaper,
    title: "Relatórios",
    description:
      "Tenha acesso a informações estratégicas sobre sua empresa e tome decisões mais assertivas.",
  },
  {
    icon: PackagePlus,
    title: "Controle de estoque",
    description:
      "Tenha mais controle sobre seus produtos, movimentações, entradas e saídas.",
  },
  {
    icon: SquareDashedText,
    title: "Operações fiscais",
    description: "Precisando manejar Notas e outros Documentos Fiscais?",
  },
]

function AboutCard({ icon: Icon, title, description }: CardProps) {
  return (
    <article className="group flex min-h-70 w-full flex-col items-center justify-center rounded-3xl border border-neutral-200/60 bg-white/75 p-8 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-yellow-100 transition-all duration-300 group-hover:bg-yellow-500">
        <Icon
          size={28}
          strokeWidth={2}
          className="text-yellow-600 transition-colors duration-300 group-hover:text-white"
        />
      </div>

      <h3 className="text-xl font-bold tracking-tight">{title}</h3>

      <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600">
        {description}
      </p>
    </article>
  )
}

export function About() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={AboutImage}
          alt="Fundo de negócio"
          fill
          className="object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-linear-to-b from-white via-white/90 to-white/70" />
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <header className="mx-auto max-w-4xl text-center">
          <span className="font-heading text-base font-bold tracking-wide text-yellow-500 sm:text-lg">
            Sistemas integrados, administrativos e financeiros
          </span>

          <h2 className="mt-6 text-3xl leading-tight font-extrabold tracking-tight text-black uppercase sm:text-4xl md:text-5xl lg:text-6xl">
            Tudo que você precisa
            <br className="hidden sm:block" />
            <span className="text-yellow-500"> em um só lugar</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            Ferramentas completas para simplificar a gestão e ajudar sua empresa
            a crescer.
          </p>
        </header>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {cards.map((card) => (
            <AboutCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
