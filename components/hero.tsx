export function Hero() {
  return (
    <section className="relative flex flex-col justify-center bg-card pb-16 pt-28 md:pb-20 md:pt-32">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
          Zeami Criações
        </p>

        <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">transformando sonhos em matéria</span>
        </h1>

        <p className="mt-6 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
          Estúdio criativo especializado em projetos 3D, props artesanais e
          experiências visuais que unem arte manual e praticidade moderna.
        </p>

        <a
          href="#orcamento"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
        >
          Conte sobre seu projeto
        </a>
      </div>
    </section>
  )
}
