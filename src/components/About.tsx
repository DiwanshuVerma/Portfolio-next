import { RotatingWords } from "./RotatingWords"

export const About = () => {
    return (
        <section className="my-6">
            <h1 className="text-2xl md:text-3xl font-semibold text-shadow-md">Hey, I'm Diwanshu Verma</h1>
            <div className="text-neutral-600 dark:text-neutral-300 text-sm md:text-lg my-4 leading-7">Engineering high-performance <RotatingWords /> with clean code and clear intent.</div>

            {/* <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-lg my-4">I'm a full-stack software developer passionate about building clean, performant, and meaningful digital solutions. I enjoy working on web applications, scalable backends, and automation systems that solve real-world problems.</p> */}

            <div className="text-sm md:text-base  mb-2">Currently exploring: <span className="text-neutral-600 dark:text-neutral-300">Cloud infrastructure, Advance Databases, Performance tuning</span></div>
            <div className="text-sm md:text-base">Favorite Tools: <span className="text-neutral-600 dark:text-neutral-300">Node.js, TypeScript, React/Next.js</span></div>
        </section>
    )
}