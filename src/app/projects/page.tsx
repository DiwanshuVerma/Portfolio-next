'use client'

import { Container } from "@/components/Container"
import { projects } from "@/data/projects"
import { ArrowUpRight } from "lucide-react"
import { motion } from 'framer-motion'
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

interface ProjectItemProps {
  project: typeof projects[0]
  index: number
  expandedSkill: { projectIdx: number; skillIdx: number } | null
  toggleSkill: (projectIdx: number, skillIdx: number) => void
  setVideoRef: (index: number, el: HTMLVideoElement | null) => void
  onInViewChange: (index: number, inView: boolean) => void
}

const ProjectItem = ({ 
  project, 
  index,
  expandedSkill,
  toggleSkill,
  setVideoRef,
  onInViewChange
}: ProjectItemProps) => {
  const [ref] = useInView({ 
    threshold: 0.6, 
    triggerOnce: false,
    onChange: (inView) => onInViewChange(index, inView)
  })

  return (
    <motion.div
      key={index}
      id={project.id}
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: "easeInOut",
      }}
      className="hover:scale-[101%] duration-300 flex flex-col gap-4 p-2 md:p-4 shadow-[0px_0px_4px_0px_rgba(125,125,214,0.50)] dark:shadow-[2px_2px_6px_0px_rgba(125,125,214,0.50)] rounded"
    >
      <video
        ref={(el) => setVideoRef(index, el)}
        poster={project.image}
        muted
        playsInline
        preload="none"
        className="rounded w-full object-cover"
      >
        <source src={project.video || undefined} type="video/mp4" />
        Your browser does not support the video tag
      </video>

      <h3 className="text-base">{project.name}</h3>
      <p className="text-sm text-neutral-700 dark:text-neutral-500">{project.description}</p>

      <div className="flex flex-wrap mt-2 ml-4 h-8">
        {project.skills.map((skill, skillIdx) => {
          const isClickedSkill =
            expandedSkill?.projectIdx === index && expandedSkill?.skillIdx === skillIdx

          return (
            <div
              key={skillIdx}
              onClick={() => toggleSkill(index, skillIdx)}
              className={`cursor-default h-fit group flex items-center border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 bg-neutral-200 p-2 rounded-full transition-all duration-700 -ml-3`}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={20}
                height={20}
                className={`shrink-0 w-4 h-4 md:w-5 md:h-5 ${skill.name === 'Express.js' ? 'dark:invert' : ''}`}
              />
              <span
                className={`text-xs overflow-hidden max-w-0 group-hover:max-w-[200px] group-hover:px-2 transition-all duration-500 whitespace-nowrap ${isClickedSkill ? 'max-w-[200px] px-2' : ''
                  }`}
              >
                {skill.name}
              </span>
            </div>
          )
        })}
      </div>

      <div className="flex gap-2 md:gap-3 my-4">
        <a href={project.repo} target='_blank' className="flex items-center gap-1 shadow-[0px_0px_6px_0px_rgba(125,125,214,0.50)] hover:bg-neutral-100 hover:dark:bg-neutral-950 w-fit px-4 py-1 rounded-full text-xs sm:text-sm cursor-pointer">
          <Image className="dark:invert invert-0" src='/icons/github.svg' alt="github icon" width="17" height="17" />
          Repo
        </a>

        <a href={project.website} target='_blank' className="flex items-center gap-1 shadow-[0px_0px_6px_0px_rgba(125,125,214,0.50)] hover:bg-neutral-100 hover:dark:bg-neutral-950 w-fit px-4 py-1 rounded-full text-xs sm:text-sm cursor-pointer">
          <ArrowUpRight size={18} />
          Website
        </a>
      </div>
    </motion.div>   
  )
}

const Projects = () => {
  const [expandedSkill, setExpandedSkill] = useState<{ projectIdx: number; skillIdx: number } | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const timeoutRefs = useRef<(NodeJS.Timeout | null)[]>([])
  const [inViewStates, setInViewStates] = useState<boolean[]>(Array(projects.length).fill(false))

  const toggleSkill = (projectIdx: number, skillIdx: number) => {
    setExpandedSkill({ projectIdx, skillIdx })
    setTimeout(() => setExpandedSkill(null), 3000)
  }

  const setVideoRef = (index: number, el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el
  }

  const handleInViewChange = (index: number, inView: boolean) => {
    setInViewStates(prev => {
      const newStates = [...prev]
      newStates[index] = inView
      return newStates
    })
  }

  useEffect(() => {
    // Store current refs in local variables for cleanup
    const currentVideoRefs = videoRefs.current
    const currentTimeoutRefs = timeoutRefs.current

    projects.forEach((_, idx) => {
      const inView = inViewStates[idx]
      const video = currentVideoRefs[idx]

      if (inView && video) {
        currentTimeoutRefs[idx] = setTimeout(() => {
          currentVideoRefs.forEach((v, i) => {
            if (v && i !== idx) {
              v.pause()
              v.currentTime = 0
            }
          })
          video.play().catch((e) => console.error("Video play failed:", e))
        }, 2000)
      } else {
        if (currentTimeoutRefs[idx]) clearTimeout(currentTimeoutRefs[idx]!)
        if (video) {
          video.pause()
          video.currentTime = 0
        }
      }
    })
    
    return () => {
      currentTimeoutRefs.forEach(timeout => {
        if (timeout) clearTimeout(timeout)
      })
    }
  }, [inViewStates])

  return (
    <Container className="min-h-screen pt-24 pb-12 px-4 md:px-10">
      <h2 className="mb-4 text-lg md:text-xl font-medium underline decoration-1 decoration-wavy dark:decoration-indigo-700 decoration-indigo-600">Proof of work</h2>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, idx) => (
          <ProjectItem
            key={idx}
            project={project}
            index={idx}
            expandedSkill={expandedSkill}
            toggleSkill={toggleSkill}
            setVideoRef={setVideoRef}
            onInViewChange={handleInViewChange}
          />
        ))}
      </div>
    </Container>
  )
}

export default Projects