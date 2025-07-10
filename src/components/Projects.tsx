'use client'

import Image from "next/image"
import { motion } from "motion/react"

const projects = [
    {
        image: '/projects/GrowthB.png',
        name: "Growth Board",
        description: "Manage daily habits - stay consistent, earn points, conquerer leaderboard.",
        skills: "React, Tailwind, NodeJs, ExpressJs, MongoDB"
    },
    {
        image: '/projects/dashboard.png',
        name: "Marketing Dashboard",
        description: "Manage daily habits - stay consistent, earn points, conquerer leaderboard.",
        skills: "React, Tailwind, NodeJs, ExpressJs, MongoDB"
    },
    {
        image: '/projects/Dhan.png',
        name: "Dhan",
        description: "A PayTM like app",
        skills: "React, Tailwind, NodeJs, ExpressJs, MongoDB"
    },
    {
        image: '/projects/moonex.png',
        name: "Growth Board",
        description: "Web2 app portfolio",
        skills: "React, Tailwind"
    },
]

export const Projects = () => {
    return (
        <div className="py-18">
            <h2 className="mb-4 text-xl font-semibold ">Proof of work</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, idx) => (
                    <motion.div key={idx}
                        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: idx * 0.1,
                            ease: "easeInOut"
                        }}
                    // className="flex flex-col gap-2 p-2 bg-amber-400/30 rounded"
                    >
                        <Image src={project.image} alt={project.image} width="100" height="100"
                            className="rounded w-full" />
                        {/* <h3 className="text-lg">{project.name}</h3>
                        <span>{project.skills}</span>
                        <p>{project.description}</p> */}
                    </motion.div>
                ))}
            </div>
        </div>
    )
} 