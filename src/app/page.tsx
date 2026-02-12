import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RolesWanted from "@/components/RolesWanted";
import RolesNotWanted from "@/components/RolesNotWanted";
import Metrics from "@/components/Metrics";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Interests from "@/components/Interests";
import TechInterests from "@/components/TechInterests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <RolesWanted />
        <RolesNotWanted />
        <Metrics />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Interests />
        <TechInterests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
