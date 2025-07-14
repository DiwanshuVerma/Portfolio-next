'use client'

import Image from "next/image"
import { Container } from "./Container"
import Link from "next/link"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { CodeXml, House } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./ThemeToggle"
import clsx from "clsx"

export const Navbar = () => {
    const navItems = [
        {
            title: 'Home',
            href: "/",
            icon: <House className="h-5 w-5" />,
            external: false
        },
        {
            title: 'Projects',
            href: "/projects",
            icon: <CodeXml className="h-5 w-5" />,
            external: false
        },
        {
            title: 'Github',
            href: "https://github.com/DiwanshuVerma",
            icon: <Image className="dark:invert invert-0 w-3 h-3 md:w-4 md:h-4 shrink-0 min-w-[18px] min-h-[18px]" src='/icons/github.svg' alt="github" width={20} height={20} />,
            external: true
        },
        {
            title: 'Twitter',
            href: "https://x.com/diwanshu_28",
            icon: <Image className="dark:invert invert-0 w-3 h-3 md:w-4 md:h-4 shrink-0 min-w-[18px] min-h-[18px]" src='/icons/x.svg' alt="twitter" width={20} height={20} />,
            external: true
        },
        {
            title: 'Linkedin',
            href: "https://linkedin.com/in/diwanshu-verma",
            icon: <Image className="dark:invert invert-0 w-3 h-3 md:w-4 md:h-4 shrink-0 min-w-[18px] min-h-[18px]" src='/icons/linkedin.svg' alt="linkedin" width={20} height={20} />,
            external: true
        },
    ]

    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20)
    })

    return (
        <Container>
            <motion.nav
                transition={{ duration: 0.3 }}
                className={clsx(
                    "max-w-3xl fixed top-2 inset-x-0 z-10 mx-auto flex items-center justify-center gap-1 sm:gap-4 px-4 py-2 sm:py-3 h-12 rounded-full border shadow dark:shadow-[1px_1px_6px_0px_rgba(125,125,214,0.50)] backdrop-blur bg-white/50 dark:bg-neutral-950/50 border-neutral-300 dark:border-none text-black dark:text-white transition-all ",
                    scrolled ? "w-[70%] md:w-[50%] duration-500" : "w-[90%] md:w-[75%] duration-500"
                )}
            >
                {navItems.map((item, idx) => {  
                    const ItemWrapper = item.external ? "a" : Link
                    const itemProps = item.external
                        ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                        : { href: item.href }

                    return (
                        <div key={item.title} className="flex items-center gap-2 py-2">
                            <ItemWrapper
                                {...itemProps}
                                className="group relative p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                            >
                                {item.icon}
                                <span className="absolute hidden group-hover:block -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded">
                                    {item.title}
                                </span>
                            </ItemWrapper>

                            {(item.title === "Projects" || item.title === "Linkedin") && (
                                <div className="h-6 border-r border-neutral-500 mx-1 sm:mx-2"></div>
                            )}

                            {item.title === "Linkedin" && (
                                <ThemeToggle />
                            )}
                        </div>
                    )
                })}
            </motion.nav>
        </Container>
    )
}