'use client'

import { Container } from "./Container"
import Link from "next/link"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { useState } from "react"
import { ThemeToggle } from "./ThemeToggle"
import clsx from "clsx"
import { navItems } from "@/data/navItems"

export const Navbar = () => {

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
                    "max-w-3xl fixed top-2 inset-x-0 z-20 mx-auto flex items-center justify-center gap-1 sm:gap-4 px-1 sm:px-4 py-2 sm:py-3 h-12 rounded-full border shadow dark:shadow-[1px_1px_6px_0px_rgba(125,125,214,0.50)] backdrop-blur bg-white/50 dark:bg-neutral-950/50 border-neutral-300 dark:border-none text-black dark:text-white transition-all ",
                    scrolled ? "w-[80%] md:w-[60%] lg:w-[40%] duration-500" : "w-[90%] md:w-[75%] duration-500"
                )}
            >
                {navItems.map(item => {
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
                                <span className="absolute hidden group-hover:block w-fit -bottom-8 dark:-bottom-10 bg-white dark:bg-black left-1/2 -translate-x-1/2 text-xs shadow-[0px_0px_4px_0px_rgba(125,125,214,0.50)] px-2 py-1 rounded text-nowrap">
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