import Image from "next/image"
import Link from "next/link"
import LogoImage from "@/public/images/cyas-logo.svg"
import { AtSign, Earth, Mail, Phone } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const navLinks = [
  { label: "Segmentos", href: "#segments-session" },
  { label: "Soluções", href: "#" },
  { label: "Contato", href: "#" },
  { label: "Sobre nós", href: "#" },
  { label: "Dúvidas Frequentes", href: "#" },
]

const socialLinks = [
  { icon: AtSign, href: "#", label: "Instagram" },
  { icon: Earth, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="w-full bg-[#141414] px-4 pt-20 pb-8 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Conteúdo principal do footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Coluna 1: Logo + Descrição */}
          <div className="flex flex-col gap-6">
            <div className="w-28">
              <Image src={LogoImage} alt="CYAS Informatica" />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-400">
              Criando soluções tecnológicas para transformar a gestão da sua
              empresa. Automação, sistemas e inovação em um só lugar.
            </p>

            {/* Redes sociais */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/50 hover:bg-yellow-500 hover:text-black"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Coluna 2: Links rápidos */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-neutral-400 transition-colors duration-200 hover:text-yellow-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase">
              Contato
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:contato@cyas.com.br"
                className="flex items-center gap-3 text-sm text-neutral-400 transition-colors duration-200 hover:text-yellow-500"
              >
                <Mail size={16} className="shrink-0" />
                contato@cyas.com.br
              </a>
              <a
                href="tel:+5500000000000"
                className="flex items-center gap-3 text-sm text-neutral-400 transition-colors duration-200 hover:text-yellow-500"
              >
                <Phone size={16} className="shrink-0" />
                (00) 00000-0000
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <Separator className="my-10 bg-white/10" />

        {/* Rodapé inferior: Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} CYAS Informática. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-neutral-600">
            Feito por Caique, Ryan, Marcus & Savio
          </p>
        </div>
      </div>
    </footer>
  )
}
