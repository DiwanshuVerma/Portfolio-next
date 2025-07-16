import { About } from "@/components/About";
import { Container } from "@/components/Container";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className=" min-h-screen flex items-center justify-center">

      {/* Main Content */}
      <Container className="px-4 py-20 z-10">
        <About />
        <Projects />
        <Experience />
      </Container>
    </div>
  );
}

