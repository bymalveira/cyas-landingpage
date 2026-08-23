import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiPostgresql,
  SiDocker,
} from "react-icons/si"

export function TechMarquee() {
  const technologies = [
    { name: "Next.js", icon: <SiNextdotjs className="h-5 w-5 text-white" /> },
    { name: "React", icon: <SiReact className="h-5 w-5 text-[#61DAFB]" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript className="h-5 w-5 text-[#3178C6]" />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="h-5 w-5 text-[#5FA04E]" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="h-5 w-5 text-[#06B6D4]" />,
    },
    { name: "Python", icon: <SiPython className="h-5 w-5 text-[#3776AB]" /> },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="h-5 w-5 text-[#4169E1]" />,
    },
    { name: "Docker", icon: <SiDocker className="h-5 w-5 text-[#2496ED]" /> },
  ]

  return (
    <div className="relative w-full overflow-hidden border-y border-neutral-800/60 bg-[#09090b] py-8">
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-linear-to-r from-[#09090b] to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-linear-to-l from-[#09090b] to-transparent" />

      <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-xl border border-neutral-800/80 bg-neutral-900/40 px-5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-800/50"
          >
            {tech.icon}
            <span className="text-sm font-medium tracking-wide text-neutral-200">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
