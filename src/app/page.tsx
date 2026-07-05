import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import WhyHireMe from "@/components/WhyHireMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <WhyHireMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
