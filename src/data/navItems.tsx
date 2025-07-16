import { CodeXml, House } from "lucide-react"
import Image from "next/image"

export const navItems = [
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
            icon: <Image className="dark:invert invert-0 w-2 h-2 md:w-4 md:h-4 shrink-0 min-w-[18px] min-h-[18px]" src='/icons/x.svg' alt="twitter" width={20} height={20} />,
            external: true
        },
        {
            title: 'Linkedin',
            href: "https://linkedin.com/in/diwanshu-verma",
            icon: <Image className="dark:invert invert-0 w-3 h-3 md:w-4 md:h-4 shrink-0 min-w-[18px] min-h-[18px]" src='/icons/linkedin.svg' alt="linkedin" width={20} height={20} />,
            external: true
        },
    ]