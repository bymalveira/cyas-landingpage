import Image, { StaticImageData } from "next/image"
import SegmentsImage from "@/public/images/background-segments.jpg"
import MarketImage from "@/public/images/market-image.jpg"
import RestaurantImage from "@/public/images/restaurant-image.jpg"
import GymImage from "@/public/images/gym-image.jpg"
import DistributorImage from "@/public/images/distributor-image.jpg"
import PharmacyImage from "@/public/images/pharmacy-image.jpg"
import OpticsImage from "@/public/images/optics-image.jpg"
import {
  MapPin,
  Sparkles,
  ShoppingCart,
  Soup,
  Dumbbell,
  Package,
  Pill,
  Glasses,
  type LucideIcon,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

interface CardProps {
  src: StaticImageData
  icon: LucideIcon
  title: string
}

const cards: CardProps[] = [
  { icon: ShoppingCart, src: MarketImage, title: "Mercado" },
  { icon: Soup, src: RestaurantImage, title: "Restaurante" },
  { icon: Dumbbell, src: GymImage, title: "Academia" },
  { icon: Package, src: DistributorImage, title: "Distribuidora" },
  { icon: Pill, src: PharmacyImage, title: "Farmacia" },
  { icon: Glasses, src: OpticsImage, title: "Ótica" },
]

function IllustrativeCard({ icon: Icon, title, src }: CardProps) {
  return (
    <article
      className="group relative isolate flex aspect-square w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl"
      /* {/* aspect-square + w-full: o card ocupa 100% da largura da coluna do grid
         e mantém proporção quadrada em qualquer tamanho de tela, ao invés de
         um w/h fixo que quebra em telas estreitas */
    >
      <div className="absolute inset-0 -z-5 -translate-x-full bg-amber-400 transition-transform duration-300 group-hover:translate-x-0" />

      <div className="absolute inset-0 -z-10">
        <Image src={src} alt={title} fill className="object-cover" />
        {/* {/* object-cover em vez de object-center: garante que a imagem
           preencha o card inteiro (quadrado responsivo) sem distorcer */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Icon
        size={40}
        className="text-white sm:size-11 md:size-12"
        /* {/* ícone menor como base (mobile) e cresce nos breakpoints maiores,
           evitando que ele fique desproporcional num card pequeno de mobile */
      />

      <span className="text-sm font-semibold text-white sm:text-base">
        {title}
      </span>
    </article>
  )
}

export function Segment() {
  return (
    <section
      className="relative grid w-full max-w-full grid-cols-1 overflow-x-hidden md:grid-cols-2"
      /* {/* removi h-350/md:h-250 e overflow-hidden daqui: altura fixa com
         overflow escondido corta conteúdo silenciosamente quando o conteúdo
         (6 cards + textos) precisa de mais espaço do que o valor fixo previa.
         Deixando a section sem altura travada, ela cresce naturalmente com
         o conteúdo em qualquer tela */
      id="segments-session"
    >
      {/* Cards */}
      <div className="container mx-auto px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        {/* {/* padding responsivo: pequeno no mobile (px-6/py-16), cresce
           progressivamente até desktop (lg:px-16/lg:py-24) */}
        <h2
          className="text-3xl leading-tight font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl"
          data-aos="fade-right"
        >
          {/* {/* título com 3 tamanhos: legível no mobile sem estourar
             a largura, e ganha destaque em telas maiores */}
          Qual o segmento da <br className="hidden sm:block" /> sua empresa?
          {/* {/* <br> só aparece a partir do sm: no mobile, o texto quebra
             naturalmente pela largura da tela, sem forçar quebra de linha
             estranha num espaço estreito */}
        </h2>

        <div
          className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3 lg:gap-8"
          data-aos="fade-up"
        >
          {/* {/* gap e margem-topo também responsivos: menores no mobile
             pra caber mais conteúdo na tela sem parecer espremido depois */}
          {cards.map((card) => (
            <IllustrativeCard key={card.title} {...card} />
          ))}
        </div>
      </div>

      {/* Painel "Varejo em geral" */}
      <div className="relative container mx-auto px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src={SegmentsImage}
            alt="Empresa"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <h2
          className="text-2xl leading-tight font-extrabold tracking-tight text-white uppercase sm:text-3xl lg:text-5xl"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Varejo em geral
        </h2>

        <p
          className="mt-6 text-sm font-extralight text-white sm:mt-8"
          data-aos="fade-left"
        >
          Tem um mercadinho, super mercado, loja de roupas ou de artigos
          diversos? estamos aqui pra você!
        </p>

        <div
          className="mt-10 sm:mt-14"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <MapPin size={30} className="ml-2 text-white sm:size-8" />
          <p className="text-md mt-2 font-medium text-white">
            Mais velocidade e controle no atendimento dos seus clientes, chega
            de caneta e papel!
          </p>
        </div>

        <div className="mt-10 sm:mt-14">
          <Separator />
        </div>

        <div
          className="mt-10 mb-10 sm:mt-14 sm:mb-14"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <Sparkles size={30} className="ml-2 text-white sm:size-8" />
          <p className="text-md mt-2 font-medium text-white">
            Automação de tarefas, chega de perder tempo com aquela coisa
            repetitiva e chata!
          </p>
        </div>

        <button
          className="flex w-fit items-center gap-2 rounded-full border border-white px-6 py-3 font-medium text-white transition duration-200 hover:bg-white hover:text-black"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          Contratar sistema
        </button>
      </div>
    </section>
  )
}
