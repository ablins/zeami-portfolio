import { Mail, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Zeami logo"
            width={24}
            height={24}
            className="rounded-sm"
          />
          <span className="font-logo text-lg font-semibold tracking-tight text-foreground">
            zeami
          </span>
          <span className="ml-2 text-sm text-muted-foreground">
            {"Transformando sonhos em matéria"}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:contato@zeami.com.br"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com/zeami.criacoes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
