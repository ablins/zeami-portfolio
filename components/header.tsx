"use client"

import { useState } from "react"
import { Menu, X, ExternalLink } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "Projetos", href: "#projetos" },
  { label: "Conexões", href: "#conexoes" },
  { label: "Publicações", href: "#publicacoes" },
  { label: "Quem Somos", href: "#quem-somos" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Zeami logo"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <span className="font-logo text-xl font-semibold tracking-tight text-foreground">
            zeami
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://zeami.univer.se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            Zeami Sites
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </nav>

        <a
          href="#orcamento"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          Pedir Orcamento
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/40 bg-background px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://zeami.univer.se"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-1.5 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              Zeami Sites
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="#orcamento"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Pedir Orcamento
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
