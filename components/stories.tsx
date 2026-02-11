import { ArrowUpRight } from "lucide-react"

const publications = [
  {
    title: "Fúria",
    type: "Conto",
    author: "Maurício Drummond",
    description:
      "A Fúria esconde-se no mundo material tal qual os sonhadores numa sociedade industrial. Neste conto, enormemente influenciado pela mitologia teatral, acompanhamos a personagem de Kostia enquanto ex-aluno de Tortsov, numa interpretação autoral dos pós-eventos da ilustre trilogia de Stanislavski.",
    link: "#",
  },
  {
    title: "Café com Vida",
    type: "Conto",
    author: "Maurício Drummond",
    description:
      "Uma narrativa que mistura o cotidiano com o extraordinário, explorando os encontros inesperados que acontecem quando paramos para observar a vida ao nosso redor.",
    link: "#",
  },
  {
    title: "Neden",
    type: "Livro",
    author: "Maurício Drummond",
    description:
      "Uma obra que mergulha nas profundezas da condição humana, tecendo narrativas que conectam o passado e o presente através de personagens marcantes e cenários ricos em simbolismo.",
    link: "#",
  },
]

export function Stories() {
  return (
    <section id="publicacoes" className="bg-stone-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Literatura
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-card-foreground md:text-5xl">
            Publicações
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Além das criações materiais, também damos vida a mundos através da
            palavra escrita.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {publications.map((pub) => (
            <article
              key={pub.title}
              className="group flex flex-col justify-between rounded-lg border border-border bg-background p-8 transition-shadow hover:shadow-lg"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {pub.type}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl text-foreground">
                  {pub.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{pub.author}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {pub.description}
                </p>
              </div>
              <a
                href={pub.link}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary transition-colors hover:text-foreground"
              >
                {"Ler mais"}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
