import clsx from "clsx"
import {  ReactNode } from "react"

export const Container = ({children, className}: {
    children: ReactNode,
    className?: string
}) =>{
    return (
        <div className={clsx("max-w-4xl w-full bg-white dark:bg-black mx-auto", className)}>
            {children}
        </div>
    )
}