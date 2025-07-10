'use client'

import Image from "next/image"
import { Container } from "./Container"
import Link from "next/link"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { CodeXml, House } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./ThemeToggle"

export const Navbar = () => {

    const navItems = [
        {
            title: 'Home',
            href: "/",
            icon: <House className="h-5 " />
        },
        {
            title: 'Projects',
            href: "/projects",
            icon: <CodeXml className="h-5" />
        },
        {
            title: 'Github',
            href: "github.com/DiwanshuVerma",
            icon: <Image className="dark:invert invert-0" src='/icons/github.svg' alt="github icon" width="17" height="17" />
        },
        {
            title: 'Twitter',
            href: "x.com/diwanshu_28",
            icon: <Image className="dark:invert invert-0" src='/icons/x.svg' alt="twitter icon" width="17" height="17" />
        },
        {
            title: 'Linkedin',
            href: "linkedin.com/diwanshu-verma",
            icon: <Image className="dark:invert invert-0" src='/icons/linkedin.svg' alt="linkedin icon" width="19" height="19" />
        },

    ]

    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = useState<boolean>(false)
    useMotionValueEvent(scrollY, "change", (latest) => {
        latest > 20 ? setScrolled(true) : setScrolled(false)
    })

    return (
        <Container>
            <motion.nav
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                animate={{
                    width: scrolled ? "40%" : "65%"
                }}
                className="fixed inset-x-0 z-10 max-w-4xl top-2 dark:text-white text-black mx-auto flex items-center justify-center gap-10 py-2 px-4  backdrop-blur h-12 rounded-full border border-neutral-300 dark:border-neutral-700 shadow">
                {navItems.map((itm, idx) => (
                    <>
                        <Link href={itm.href} key={idx} className="relative group p-2 rounded-full hover:bg-neutral-100 hover:dark:bg-neutral-900">
                            {itm.icon}

                            <span className="absolute hidden group-hover:block -bottom-8 -left-2 text-xs bg-black px-2 py-1 text-white dark:bg-white dark:text-black rounded">{itm.title}</span>
                        </Link>
                        {(itm.title === "Projects" || itm.title === "Linkedin") && (
                            <div className="h-full border-r-1 border-neutral-500" key={itm.title}></div>
                        )}

                        {itm.title === "Linkedin" && (
                            <ThemeToggle key={itm.href} />
                        )}
                    </>
                ))}
            </motion.nav>
        </Container>
    )
}