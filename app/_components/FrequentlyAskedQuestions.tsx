import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona a implantação do sistema?",
    answer:
      "Nossa equipe cuida de tudo! Desde a instalação até o treinamento da sua equipe, garantindo que você comece a usar a ferramenta sem dor de cabeça.",
  },
  {
    question: "O sistema emite notas fiscais (NF-e, NFC-e)?",
    answer:
      "Sim! Nosso sistema é totalmente homologado para emissão de notas fiscais com integração direta à Sefaz, facilitando a vida do seu contador.",
  },
  {
    question: "E se eu precisar de suporte técnico?",
    answer:
      "Temos um suporte técnico super ágil para te atender. Nossa equipe está sempre pronta para resolver qualquer dúvida rapidamente e não deixar seu negócio parar.",
  },
  {
    question: "Posso acessar meus dados pelo celular?",
    answer:
      "Com certeza! Os dashboards e relatórios ficam disponíveis na nuvem para você monitorar as vendas e resultados da sua empresa de qualquer lugar, a qualquer momento.",
  },
]

export function FrequentlyAskedQuestions() {
  return (
    <section className="relative w-full max-w-full overflow-x-hidden bg-[#1C1C1C] px-4 py-20 sm:px-6 md:py-32 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <header className="mb-12 text-center text-white">
          <h2
            className="text-3xl leading-tight font-extrabold tracking-tight uppercase sm:text-4xl md:text-5xl"
            data-aos="fade-up"
          >
            Dúvidas <span className="text-yellow-500">Frequentes</span>
          </h2>
          <p
            className="mt-4 font-extralight text-neutral-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Tudo o que você precisa saber antes de transformar a gestão do seu
            negócio.
          </p>
        </header>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8"
        >
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b-white/10"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-yellow-400 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-white">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
