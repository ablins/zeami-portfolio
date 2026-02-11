"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    src: "/images/project-1.jpg",
    title: "Mascara Noh",
    tag: "teatro",
    description:
      "Mascara inspirada no teatro Noh japones, esculpida e pintada a mao com tecnicas tradicionais. Utilizada em apresentacoes teatrais e pecas de decoracao.",
    images: [
      "/images/project-1.jpg",
      "/images/project-1b.jpg",
      "/images/project-1c.jpg",
    ],
  },
  {
    src: "/images/project-2.jpg",
    title: "Dragao Miniatura",
    tag: "3d",
    description:
      "Dragao em miniatura modelado digitalmente e impresso em 3D, com acabamento artesanal em tons de terra e terracota.",
    images: [
      "/images/project-2.jpg",
      "/images/project-2b.jpg",
      "/images/project-2c.jpg",
    ],
  },
  {
    src: "/images/project-3.jpg",
    title: "Props de RPG",
    tag: "miniaturas",
    description:
      "Conjunto de props para RPG de mesa: bau, pocoes e espadas em miniatura, todos pintados a mao com riqueza de detalhes.",
    images: [
      "/images/project-3.jpg",
      "/images/project-3b.jpg",
      "/images/project-3c.jpg",
    ],
  },
  {
    src: "/images/project-4.jpg",
    title: "Jardim Zen",
    tag: "maquete",
    description:
      "Maquete de jardim zen em miniatura com arvores, rochas e areia, criando um cenario meditativo em escala reduzida.",
    images: [
      "/images/project-4.jpg",
      "/images/project-4b.jpg",
      "/images/project-4c.jpg",
    ],
  },
  {
    src: "/images/project-5.jpg",
    title: "Armadura Fantasia",
    tag: "cosplay",
    description:
      "Peca de armadura para cosplay em estilo fantasia medieval, moldada em EVA e resina com pintura em bronze e verde escuro.",
    images: [
      "/images/project-5.jpg",
      "/images/project-5b.jpg",
      "/images/project-5c.jpg",
    ],
  },
  {
    src: "/images/project-6.jpg",
    title: "Bustos de Personagens",
    tag: "escultura",
    description:
      "Colecao de bustos esculpidos em argila e resina, representando personagens fantasticos com expressoes detalhadas.",
    images: [
      "/images/project-6.jpg",
      "/images/project-6b.jpg",
      "/images/project-6c.jpg",
    ],
  },
]

export function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null)
  const [imgIndex, setImgIndex] = useState(0)

  function open(project: (typeof projects)[0]) {
    setSelected(project)
    setImgIndex(0)
  }

  function close() {
    setSelected(null)
  }

  return (
    <>
      <section id="projetos" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
              Portfolio
            </p>
            <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
              Alguns projetos que fizemos
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Cada peca e criada com dedicacao artesanal e atencao aos detalhes,
              unindo tecnicas tradicionais com tecnologia moderna.
            </p>
          </div>

          {/* Grid - all same size */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <button
                type="button"
                key={project.title}
                onClick={() => open(project)}
                className="group relative overflow-hidden rounded-lg text-left"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={project.src || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="mb-2 inline-block w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 text-[11px] uppercase tracking-widest text-primary">
                    {project.tag}
                  </span>
                  <h3 className="font-serif text-xl text-foreground">
                    {project.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-sm"
          onClick={close}
          onKeyDown={(e) => e.key === "Escape" && close()}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div
            className="relative my-8 w-full max-w-4xl overflow-hidden rounded-lg border border-border bg-card"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={() => {}}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 rounded-full bg-background/70 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Main image with nav */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={selected.images[imgIndex] || "/placeholder.svg"}
                alt={`${selected.title} - imagem ${imgIndex + 1}`}
                fill
                className="object-cover"
              />
              {selected.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setImgIndex((i) =>
                        i === 0 ? selected.images.length - 1 : i - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur-sm"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setImgIndex((i) =>
                        i === selected.images.length - 1 ? 0 : i + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur-sm"
                    aria-label="Proxima imagem"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Gallery thumbnails */}
            <div className="flex gap-2 overflow-x-auto border-t border-border bg-background/50 p-3">
              {selected.images.map((img, i) => (
                <button
                  type="button"
                  key={img}
                  onClick={() => setImgIndex(i)}
                  className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md transition-opacity ${
                    i === imgIndex
                      ? "ring-2 ring-primary"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${selected.title} - miniatura ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Content area */}
            <div className="p-6 md:p-8">
              <span className="mb-3 inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 text-[11px] uppercase tracking-widest text-primary">
                {selected.tag}
              </span>
              <h3 className="mt-1 font-serif text-2xl text-card-foreground md:text-3xl">
                {selected.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
