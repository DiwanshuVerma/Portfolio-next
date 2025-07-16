'use client'

import { Briefcase } from "lucide-react"
import { motion } from "motion/react"

export const Experience = () => {
    const experience = [
        {
            company: "Olcademy",
            role: "Web Developer",
            duration: "Dec 2024 - Feb 2025"
        }
    ]
    return (
        <section className="py-6">
            <h2 className="mb-4 text-lg md:text-xl font-medium ">Experience</h2>

            <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                    duration: 0.3,
                    delay: 0.3,
                    ease: "easeInOut"
                }}
                className="p-3 rounded shadow-[0px_0px_4px_0px_rgba(125,125,214,0.50)] dark:shadow-[2px_2px_6px_0px_rgba(125,125,214,0.50)]" >
                {experience.map(exp => (
                    <div className="space-y-1" key={exp.company}>
                        <div className="flex gap-2 items-center">
                            <Briefcase size={17} className="text-neutral-500"/>
                            <h4 className="text-base md:text-lg">{exp.company}</h4>
                        </div>
                        <div className="w-full flex items-center justify-between pl-6">
                            <span className="text-xs md:text-sm text-neutral-500">{exp.role}</span>
                            <span className="text-xs md:text-sm text-neutral-500">{exp.duration}</span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    )
}