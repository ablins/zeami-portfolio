import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Connections } from "@/components/connections"
import { Stories } from "@/components/stories"
import { About } from "@/components/about"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Connections />
        <Stories />
        <About />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
