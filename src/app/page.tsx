import { Container } from "@/components/Container";
import { Projects } from "@/components/Projects";
import { RotatingWords } from "@/components/RotatingWords";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container className="min-h-[200vh] px-4 py-32 md:px-10">
        <h1 className="text-xl md:text-4xl font-semibold">Hey, I'm Diwanshu Verma</h1>
        <div className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg mt-4 flex items-center gap-2">Engineering robust <RotatingWords /> with precision and purpose.</div>

        <Projects />
      </Container>
    </div>
  );
}
