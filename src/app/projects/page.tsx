'use client'

import { Container } from "@/components/Container"
import { projects } from "@/data/projects"
import { ArrowUpRight } from "lucide-react"
import { motion } from 'framer-motion'
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"

interface ProjectItemProps {
  project: typeof projects[0]
  index: number
  expandedSkill: { projectIdx: number; skillIdx: number } | null
  toggleSkill: (projectIdx: number, skillIdx: number) => void
}

const ProjectItem = React.memo(({
  project,
  index,
  expandedSkill,
  toggleSkill
}: ProjectItemProps) => {

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const hideControlsTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (video && video.duration) {
      const newTime = (parseFloat(e.target.value) / 100) * video.duration;
      video.currentTime = newTime;
    }
  }

  const handleFullScreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ("webkitRequestFullscreen" in video) {
      (video as HTMLVideoElement & {
        webkitRequestFullscreen: () => Promise<void>;
      }).webkitRequestFullscreen();
    } else if ("msRequestFullscreen" in video) {
      (video as HTMLVideoElement & {
        msRequestFullscreen: () => Promise<void>;
      }).msRequestFullscreen();
    }
  }

  const handleVideoClick = () => {
    // Toggle controls visibility
    setShowControls(true);

    // Reset hide timeout
    if (hideControlsTimeout.current) {
      clearTimeout(hideControlsTimeout.current);
    }

    hideControlsTimeout.current = setTimeout(() => {
      setShowControls(false);
    }, 3000); // Hide after 3 seconds
  };

  useEffect(() => {
    return () => {
      if (hideControlsTimeout.current) {
        clearTimeout(hideControlsTimeout.current);
      }
    };
  }, []);


  return (
    <motion.div
      key={index}
      id={project.id}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      className="hover:scale-[101%] duration-300 flex flex-col gap-3 md:gap-4 p-2 md:p-4 shadow-[0px_0px_4px_0px_rgba(125,125,214,0.50)] dark:shadow-[2px_2px_6px_0px_rgba(125,125,214,0.50)] rounded"
    >
      <div className="relative group">
        <video
          ref={videoRef}
          poster={project.image}
          muted
          playsInline
          preload="auto"
          loop
          autoPlay
          onTimeUpdate={handleTimeUpdate}
          onClick={handleVideoClick} // mobile tap
          className="rounded w-full object-cover"
        >
          <source src={project.video || undefined} type="video/mp4" />
          Your browser does not support the video tag
        </video>

        {project.video && (
          <div
            className={`absolute -bottom-2 left-0 right-0 
            items-center justify-between px-4 bg-black/40 backdrop-blur-sm transition-opacity
            ${showControls ? "flex" : "hidden"} 
            group-hover:flex`}
          >
            {/* Progress Bar */}
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full h-[2px] accent-blue-500"
            />
            {/* Fullscreen Button */}
            <button
              onClick={handleFullScreen}
              className="ml-2 text-white text-xl font-bold hover:opacity-80"
              aria-label="Fullscreen"
            >
              ⛶
            </button>
          </div>
        )}
      </div>

      <h3 className="text-base">{project.name}</h3>
      <p className="text-sm text-neutral-700 dark:text-neutral-400">{project.description}</p>

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
                className={`shrink-0 w-4 h-4 md:w-5 md:h-5 ${['Express.js', 'Next.js'].includes(skill.name)
                  ? 'dark:invert'
                  : ''
                  }`}
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
})

const Projects = () => {
  const [expandedSkill, setExpandedSkill] = useState<{ projectIdx: number; skillIdx: number } | null>(null)

  const toggleSkill = (projectIdx: number, skillIdx: number) => {
    setExpandedSkill({ projectIdx, skillIdx })
    setTimeout(() => setExpandedSkill(null), 3000)
  }

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
          />
        ))}
      </div>
    </Container>
  )
}

ProjectItem.displayName = 'ProjectItem'
export default Projects