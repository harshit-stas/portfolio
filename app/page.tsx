import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Roadmap from "@/components/Roadmap";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-paper">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Roadmap />
      <Education />
      <Footer />
    </main>
  );
}
