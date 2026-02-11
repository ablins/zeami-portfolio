import { ArrowUpRight, Box, Globe, MessageCircle } from "lucide-react"

const ctas = [
  {
    label: "Mande seu projeto 3D",
    description:
      "Envie os detalhes do seu projeto e receba um orçamento personalizado para suas criações 3D.",
    href: "mailto:contato@zeami.com.br?subject=Projeto%203D",
    icon: Box,
  },
  {
    label: "Quero fazer um site",
    description:
      "Criamos sites únicos e criativos que traduzem a essência do seu projeto.",
    href: "mailto:contato@zeami.com.br?subject=Quero%20fazer%20um%20site",
    icon: Globe,
  },
  {
    label: "Quer conversar?",
    description:
      "Bata um papo com a gente para discutir ideias, parcerias ou qualquer outra coisa.",
    href: "https://wa.me/5511999999999",
    icon: MessageCircle,
  },
]

export function CtaSection() {
  return (
    <section
      id="orcamento"
      className="border-t border-border bg-card py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Vamos criar juntos
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-card-foreground md:text-5xl lg:text-6xl">
            Peça seu orçamento
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Conte sua ideia e peça um orçamento personalizado. Nossa equipe
            analisa cada projeto com cuidado antes de aceitar novas encomendas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-lg border border-border bg-background p-8 transition-colors hover:border-primary/40"
            >
              <div>
                <cta.icon className="mb-6 h-8 w-8 text-primary" />
                <h3 className="font-serif text-2xl text-foreground">
                  {cta.label}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {cta.description}
                </p>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary">
                Começar
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
