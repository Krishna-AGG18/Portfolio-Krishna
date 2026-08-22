import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { FluidParticlesBackground } from "@/components/ui/fluid-particles-background";

export default function Home() {
  return (
    <PageLoader>
      <FluidParticlesBackground className="fixed inset-0 -z-10" />
      <main className="relative min-h-screen bg-transparent text-foreground flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </PageLoader>
  );
}
