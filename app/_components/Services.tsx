import Image, { StaticImageData } from "next/image"
import DashboardImage from "@/public/images/data-analytics-dashboard.jpg"
import InvoiceImage from "@/public/images/invoice.jpg"
import WebDevelopmentImage from "@/public/images/web-development.jpg"
import ServicesImage from "@/public/images/background-services.jpg"
import MobileDevelopmentImage from "@/public/images/mobile-development.jpg"
import PentestImage from "@/public/images/pentest-image.jpg"
import AutomationImage from "@/public/images/automation-image.jpg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CardsProps {
  title: string
  description: string
  src: StaticImageData
}

const cards: CardsProps[] = [
  {
    title: "Desenvolvimento Web & Aplicações",
    description:
      "Criação de sites de alta performance, landing pages que convertem e sistemas web complexos sob medida (SaaS).",
    src: WebDevelopmentImage,
  },
  {
    title: "Dashboard Interativo",
    description:
      "Veja tudo em tempo real, acompanhe os dados da sua empresa com clareza e objetividade, chega de planilhas!",
    src: DashboardImage,
  },

  {
    title: "Emissão Fiscal",
    description:
      "Emita NFC-e e NF-e em poucos cliques, sem burocracias, de forma segura e automatizada.",
    src: InvoiceImage,
  },

  {
    title: "Aplicativos Mobile",
    description:
      "Apps nativos e multiplataforma focados em experiência do usuário (UX), alta performance e fluidez.",
    src: MobileDevelopmentImage,
  },

  {
    title: "Testes de Segurança & Proteção de Dados",
    description:
      "Identificação preventiva de vulnerabilidades, análise de falhas em APIs e blindagem do seu sistema contra invasões antes de ir para produção.",
    src: PentestImage,
  },

  {
    title: "Automação de Processos & Sistemas",
    description:
      "Integramos seus sistemas, eliminamos planilhas repetitivas e automatizamos tarefas manuais para sua equipe focar no que realmente importa.",
    src: AutomationImage,
  },
]

function ServicesCards({ src, title, description }: CardsProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-[#262626] shadow-lg select-none">
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 p-6 sm:p-8">
        <h4 className="text-xl font-bold text-white">
          {title}
        </h4>
        <p className="text-sm leading-relaxed text-neutral-400">
          {description}
        </p>
      </div>
    </article>
  )
}

export function Services() {
  return (
    <>
      <section
        className="relative w-full max-w-full overflow-x-hidden px-4 py-20 sm:px-6 md:py-50 lg:px-8"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src={ServicesImage}
            alt="Serviços"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black via-black/90 to-black/70" />
        </div>
        <div className="container mr-auto max-w-7xl px-2 sm:px-10">
          <header className="text-white">
            <span className="text-lg font-extralight">
              Uma jovem startup focada no desenvolvimento do seu sistema
              automatizado
            </span>
            <h2 className="mt-6 text-2xl leading-tight font-extrabold tracking-tight uppercase sm:text-3xl md:text-4xl lg:text-5xl">
              O que a CYAS oferece?
            </h2>
          </header>
        </div>
      </section>

      <section className="relative w-full max-w-full overflow-x-hidden bg-[#1C1C1C] px-4 py-10 sm:px-6 md:py-30 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <header className="text-center">
            <h3
              className="text-xl leading-tight font-bold tracking-tight text-white uppercase sm:text-2xl md:text-3xl lg:text-4xl"
              data-aos="fade-up"
            >
              Nossos Serviços
            </h3>
            <p className="mt-10 font-semibold text-gray-400 sm:hidden">
              Deslize para o lado
            </p>
          </header>

          <Carousel
            className="w-full sm:mt-12"
            opts={{ align: "start", loop: true }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {cards.map((card, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                >
                  <div className="h-full p-4">
                    <ServicesCards {...card} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Setas de Navegação - Visíveis a partir de telas médias */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute inset-y-0 -left-14 my-auto h-12 w-12 border-white/10 bg-[#262626] text-white [&>svg]:size-6" />
              <CarouselNext className="absolute inset-y-0 -right-14 my-auto h-12 w-12 border-white/10 bg-[#262626] text-white [&>svg]:size-6" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  )
}
