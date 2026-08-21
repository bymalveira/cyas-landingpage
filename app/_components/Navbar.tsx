import Link from "next/link"
import Image from "next/image"
import LogoImage from "@/public/images/cyas-logo.svg"

export function Navbar() {
  return (
    <header className="absolute z-50 hidden w-full items-center justify-between bg-transparent px-10 py-4 sm:flex">
      {/* Logo */}
      <div className="flex h-auto w-25 items-center justify-center">
        <Image src={LogoImage} alt="CYAS Informatica" />
      </div>

      {/* Links */}
      <nav className="flex items-center gap-12 font-light text-white">
        <Link className="tracking-wider" href="#segments-session">
          Segmentos
        </Link>

        <Link className="tracking-wider" href="#">
          Soluções
        </Link>

        <Link className="tracking-wider" href="#">
          Contato
        </Link>

        <Link className="tracking-wider" href="#">
          Sobre nós
        </Link>

        <Link className="tracking-wider" href="#">
          Duvidas Frequentes
        </Link>
      </nav>
    </header>
  )
}
