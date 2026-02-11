import Image from "next/image"

export function About() {
  return (
    <section id="quem-somos" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/images/about.jpg"
              alt="Amanda e Maurício trabalhando no estúdio Zeami"
              width={700}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
              Sobre
            </p>
            <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
              Quem somos
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Zeami Criações</span>{" "}
                surge da união artística entre a arte manual metódica e a
                praticidade organizacional moderna. Nasce como uma homenagem à
                filosofia teatral de Zeami, da qual{" "}
                <span className="text-foreground">Maurício Drummond</span>,
                ator e dublador, é aficionado desde que pela primeira vez teve
                contato com essas ideias.
              </p>
              <p>
                <span className="text-foreground">Amanda Lins</span>,
                designer e artista visual, foi quem deu o salto de fé necessário
                para que a Zeami desabrochasse em algo concreto, mantendo a
                sensibilidade inata.
              </p>
              <p>
                Hoje, após termos participado de diversos eventos como apoio,
                almejamos o florescimento dessa linda semente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
