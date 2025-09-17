import clsx from "clsx"
import {  ReactNode } from "react"

export const Container = ({children, className}: {
    children: ReactNode,
    className?: string
}) =>{
    return (
        <div className={clsx("max-w-4xl w-full bg-white/30 dark:bg-black/20 mx-auto", className)}>
            {children}
        </div>
    )
}