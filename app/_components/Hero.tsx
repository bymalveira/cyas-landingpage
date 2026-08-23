import Image from "next/image"
import { ArrowRight } from "lucide-react" // ícone de seta usado no botão
import HeroImage from "@/public/images/background-hero.jpg"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* camada de fundo: imagem + overlay escuro, ocupa a section inteira */}
      <div className="absolute inset-0 z-0 select-none">
        <div className="absolute inset-0 z-10 bg-black/60"></div>{" "}
        {/* escurece a foto pra dar contraste ao texto branco */}
        <Image
          src={HeroImage}
          alt="Negócio"
          fill // faz a imagem preencher o container pai (a div acima)
          className="object-cover" // corta a imagem mantendo proporção, sem distorcer
          priority // carrega essa imagem com prioridade, já que é o LCP da página
        />
      </div>

      {/* conteúdo sobre a imagem: agora com flex column pra empilhar e controlar o alinhamento */}
      <div className="relative z-20 flex h-full w-full flex-col justify-center gap-6 px-6 md:px-24">
        <span
          className="text-sm font-medium text-white/90 select-none md:text-base"
          data-aos="zoom-in"
        >
          {/* texto de apoio acima do título, mais discreto */}
          Sua automação está aqui na CYAS
        </span>

        <h1
          className="max-w-3xl text-4xl leading-tight font-bold text-white uppercase select-none md:text-6xl"
          data-aos="fade-up"
        >
          {/* leading-tight aproxima as linhas, igual na referência */}
          Evolua seu negócio{" "}
          <span className="text-yellow-300">com a gente</span>{" "}
          {/* trecho de destaque em amarelo */}
        </h1>

        <button
          className="flex w-fit items-center gap-2 rounded-full border border-white px-6 py-3 text-white transition hover:bg-white hover:text-black"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          {/* w-fit evita que o botão estique a largura toda do flex container */}
          Entrar em contato
          <ArrowRight className="h-4 w-4" /> {/* seta indicando ação */}
        </button>
      </div>
    </section>
  )
}
