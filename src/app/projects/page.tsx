'use client'

import { Container } from "@/components/Container"
import { projects } from "@/data/projects"
import { ArrowUpRight, VideoIcon } from "lucide-react"
import { motion } from 'motion/react'
import Image from "next/image"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

const Projects = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5     // play when 50% visible
    })

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            if (inView) {
                video.play().catch((e) => {
                    // optional: handle autoplay errors on some browsers
                    console.error("Video play failed:", e);
                });
            } else {
                video.pause();
            }
        }
    }, [inView]);


    return (
        <Container className="min-h-screen pt-24 pb-12 px-4 md:px-10">
            <h2 className="mb-4 text-lg md:text-xl font-medium ">Proof of work</h2>

            <div className="grid grid-cols-1 gap-8">
                {projects.map((project, idx) => (
                    <motion.div key={idx}
                        ref={ref}
                        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: idx * 0.05,
                            ease: "easeInOut"
                        }}
                        className="hover:scale-[101%] duration-300 flex flex-col gap-4 p-4 shadow-[0px_0px_4px_0px_rgba(125,125,214,0.50)] dark:shadow-[2px_2px_6px_0px_rgba(125,125,214,0.50)]  rounded"
                    >
                        {/* <Image
                            src={project.image}
                            alt={project.name}
                            width={700}
                            height={700}
                            quality={100}
                            priority={idx === 0} // load the first image eagerly, rest lazily
                            className="rounded object-cover hover:scale-[102%] duration-500 w-full"
                        /> */}

                        <video
                            ref={videoRef}
                            autoPlay muted playsInline controls>
                            <source src={project.video} type="video/mp4" />
                            Your browser does not support the video tag
                        </video>

                        <h3 className="text-base">{project.name}</h3>
                        <p className="text-sm text-neutral-700 dark:text-neutral-500">{project.description}</p>

                        <div className="flex flex-wrap mt-2 ml-4 h-8">
                            {project.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`cursor-default h-fit group flex items-center gap-1 border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 bg-neutral-200 p-2 rounded-full transition-all duration-700 -ml-4
                                        }`}
                                >
                                    <Image src={skill.icon} alt={skill.name} width={20} height={20} className={`shrink-0 w-4 h-4 md:w-5 md:h-5 ${skill.name === 'Express.js' && 'dark:invert'} `} />
                                    <span className="text-xs overflow-hidden max-w-0 group-hover:max-w-[200px] group-hover:pr-4 transition-all duration-500 whitespace-nowrap">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-2 md:gap-3 my-4">

                            <div className="flex items-center gap-1 shadow-[0px_0px_6px_0px_rgba(125,125,214,0.50)] hover:bg-neutral-100 hover:dark:bg-neutral-950 w-fit px-4 py-1 rounded-full text-xs sm:text-sm cursor-pointer">
                                <Image className="dark:invert invert-0" src='/icons/github.svg' alt="github icon" width="17" height="17" />
                                Repo
                            </div>

                            <div className="flex items-center gap-1 shadow-[0px_0px_6px_0px_rgba(125,125,214,0.50)] hover:bg-neutral-100 hover:dark:bg-neutral-950 w-fit px-4 py-1 rounded-full text-xs sm:text-sm cursor-pointer">
                                <ArrowUpRight size={18} />
                                Website
                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </Container>
    )
}

export default Projects