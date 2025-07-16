import clsx from "clsx"
import {  ReactNode } from "react"

export const Container = ({children, className}: {
    children: ReactNode,
    className?: string
}) =>{
    return (
        <div className={clsx("max-w-4xl w-full bg-white/70 dark:bg-black/70 mx-auto", className)}>
            {children}
        </div>
    )
}