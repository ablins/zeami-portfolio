import Image from "next/image"

const fairs = [
  { name: "MOTIM", icon: "/images/icon-motim.jpg" },
  { name: "El Cabriton", icon: "/images/icon-elcabriton.jpg" },
  { name: "UP!ABC", icon: "/images/icon-upabc.jpg" },
  { name: "Sakura Matsuri", icon: "/images/icon-sakura.jpg" },
  { name: "Feira do Cachorro Louco", icon: "/images/icon-cachorro.jpg" },
  { name: "Feira Milho", icon: "/images/icon-milho.jpg" },
]

const companies = [
  { name: "EAFA", icon: "/images/icon-eafa.jpg" },
  { name: "DuBrasil", icon: "/images/icon-dubrasil.jpg" },
]

export function Connections() {
  return (
    <section id="conexoes" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Presenca
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            Conexoes
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Feiras em que participamos e empresas com quem já colaboramos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {/* Feiras column */}
          <div className="pb-10 md:border-r md:border-border md:pb-0 md:pr-12">
            <h3 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Feiras
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {fairs.map((fair) => (
                <div
                  key={fair.name}
                  className="flex flex-col items-center gap-2 rounded-lg border border-border/50 bg-card/50 px-3 py-4 text-center"
                >
                  <Image
                    src={fair.icon || "/placeholder.svg"}
                    alt={fair.name}
                    width={40}
                    height={40}
                    className="rounded-md object-cover"
                  />
                  <span className="text-sm text-foreground">{fair.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider for mobile */}
          <div className="border-t border-border md:hidden" />

          {/* Empresas column */}
          <div className="pt-10 md:pl-12 md:pt-0">
            <h3 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Empresas
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="flex flex-col items-center gap-2 rounded-lg border border-border/50 bg-card/50 px-3 py-4 text-center"
                >
                  <Image
                    src={company.icon || "/placeholder.svg"}
                    alt={company.name}
                    width={40}
                    height={40}
                    className="rounded-md object-cover"
                  />
                  <span className="text-sm text-foreground">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
