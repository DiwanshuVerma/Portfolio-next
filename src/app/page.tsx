import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className=" min-h-screen flex items-center justify-center">

      {/* Main Content */}
      <Container className="px-4 pt-20 pb-10 z-10">
        <About />
        <Projects />
        <Experience />
        <Contact />
      </Container>
    </div>
  );
}

