'use client'

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight, Video, VideoIcon } from "lucide-react"

const projects = [
    {
        image: '/projects/GrowthB.png',
        name: "Growth Board",
        description: "Manage daily habits - stay consistent, earn points, conquerer leaderboard.",
        skills: [
            { name: "React.js", icon: "/icons/react.svg" },
            { name: "Tailwind", icon: "/icons/tailwind.svg" },
            { name: "Node.js", icon: "/icons/nodejs.svg" },
            { name: "Express.js", icon: "/icons/express.svg" },
            { name: "MongoDB", icon: "/icons/mongodb.svg" },
        ]
    },
    {
        image: '/projects/dashboard.png',
        name: "Marketing Dashboard",
        description: "Manage daily habits - stay consistent, earn points, conquerer leaderboard.",
        skills: [
            { name: "React.js", icon: "/icons/react.svg" },
            { name: "Tailwind", icon: "/icons/tailwind.svg" },
            { name: "Node.js", icon: "/icons/nodejs.svg" },
            { name: "Express.js", icon: "/icons/express.svg" },
            { name: "MongoDB", icon: "/icons/mongodb.svg" },
        ]
    },
    {
        image: '/projects/Dhan.png',
        name: "Dhan",
        description: "A PayTM like app",
        skills: [
            { name: "React.js", icon: "/icons/react.svg" },
            { name: "Tailwind", icon: "/icons/tailwind.svg" },
            { name: "Node.js", icon: "/icons/nodejs.svg" },
            { name: "Express.js", icon: "/icons/express.svg" },
            { name: "MongoDB", icon: "/icons/mongodb.svg" },
        ]
    },
    {
        image: '/projects/moonex.png',
        name: "Growth Board",
        description: "Web3 app portfolio",
        skills: [
            { name: "React.js", icon: "/icons/react.svg" },
            { name: "Tailwind", icon: "/icons/tailwind.svg" },
            { name: "Node.js", icon: "/icons/nodejs.svg" },
            { name: "Express.js", icon: "/icons/express.svg" },
            { name: "MongoDB", icon: "/icons/mongodb.svg" },
        ]
    },
]

export const Projects = () => {
    return (
        <div className="py-18">
            <h2 className="mb-4 text-xl font-semibold ">Proof of work</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <motion.div key={idx}
                        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: idx * 0.1,
                            ease: "easeInOut"
                        }}
                        className="hover:scale-[101%] duration-300 flex flex-col gap-4 p-4 shadow-[0px_0px_4px_0px_rgba(125,125,214,0.50)] dark:shadow-[2px_2px_6px_0px_rgba(125,125,214,0.50)]  rounded"
                    >
                        <Image
                            src={project.image}
                            alt={project.name}
                            width={700}
                            height={700}
                            quality={100}
                            priority={idx === 0} // load the first image eagerly, rest lazily
                            className="rounded object-cover hover:scale-105 duration-500"
                        />
                        <h3 className="text-base">{project.name}</h3>
                        <p className="text-sm text-neutral-700 dark:text-neutral-500">{project.description}</p>

                        <div className="flex flex-wrap mt-2 ml-5 h-8">
                            {project.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`cursor-default h-fit group flex items-center gap-1 border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 bg-neutral-200 p-2 rounded-full transition-all duration-700 -ml-4
                                        }`}
                                >
                                    <Image src={skill.icon} alt={skill.name} width={20} height={20} className={`shrink-0 ${skill.name === 'Express.js' && 'dark:invert'} `} />
                                    <span className="text-xs overflow-hidden max-w-0 group-hover:max-w-[200px] group-hover:pr-4 transition-all duration-500 whitespace-nowrap">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-3 my-4">

                            <div className="flex gap-1 shadow-[0px_0px_6px_0px_rgba(125,125,214,0.50)] hover:bg-neutral-100 hover:dark:bg-neutral-950 w-fit px-4 py-1 rounded-full text-sm cursor-pointer">
                                <Image className="dark:invert invert-0" src='/icons/github.svg' alt="github icon" width="17" height="17" />
                                Repo
                            </div>

                            <div className="flex gap-1 shadow-[0px_0px_6px_0px_rgba(125,125,214,0.50)] hover:bg-neutral-100 hover:dark:bg-neutral-950 w-fit px-4 py-1 rounded-full text-sm cursor-pointer">
                                <VideoIcon size={18} />
                                Demo
                            </div>

                            <div className="flex gap-1 shadow-[0px_0px_6px_0px_rgba(125,125,214,0.50)] hover:bg-neutral-100 hover:dark:bg-neutral-950 w-fit px-4 py-1 rounded-full text-sm cursor-pointer">
                                <ArrowUpRight size={18} />
                                Website
                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    )
} 