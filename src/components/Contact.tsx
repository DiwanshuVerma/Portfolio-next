'use client'

import { socials } from "@/data/socials"
import Image from "next/image";
import { FormEvent, useState } from "react";

export const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [status, setStatus] = useState<{ msg: string, sts: number | null }>({ msg: '', sts: null })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, message }),
            })

            const data = await res.json()
            console.log(data)
            setStatus({ msg: data.message || 'Something went wrong', sts: res.status || 400 })

            if (res.ok) {
                setEmail('')
                setMessage('')
            }
        } catch (error: unknown) {
            console.log(error)
            if (error instanceof Error) {
                setStatus({ msg: error.message, sts: 400 })
                console.log(error)
            } else {
                console.log(error)
                setStatus({ msg: 'Failed to send message.', sts: 400 })
            }
        } finally {
            setLoading(false)
            setTimeout(() => {
                setStatus({ msg: '', sts: null })
            }, 5000)
        }
    }


    return (
        <section className="mt-10 flex justify-between w-full gap-8 flex-col-reverse sm:flex-row">
            <div className="space-y-4">
                <h2 className="mb-4 hidden sm:block text-lg md:text-xl font-medium ">Get in Touch</h2>
                <div className="text-sm">
                    Have a project in mind or just want to say hello? I&apos;d love to hear from you. I&apos;m just a few pixels away:
                    <a href="mailto:diwanshu63019@gmail.com" className="text-indigo-600 block mt-1 w-fit">diwanshu63019@gmail.com</a>
                </div>
                <div>
                    <h3 className="mb-2 text-base font-medium ">Socials</h3>
                    <div className="flex gap-3">
                        {socials.map(link => (
                            <a href={link.href} target="_blank" className={`group relative rounded p-2 border-1 border-neutral-400 dark:border-neutral-800 cursor-pointer ${link.hoverBG}`} key={link.name}>
                                <Image src={link.icon} alt={link.name} height={17} width={17} className={`dark:invert ${link.hoverColor && 'group-hover:dark:invert-0 '}`} />
                                <span className="absolute hidden group-hover:block w-fit -bottom-8 left-1/2 -translate-x-1/2 text-xs shadow-[0px_0px_4px_0px_rgba(125,125,214,0.50)] px-2 py-1 rounded text-nowrap">
                                    {link.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-sm w-full sm:w-1/2">
                <h2 className="mb-2 sm:hidden block text-lg md:text-xl font-medium ">Get in Touch</h2>

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    placeholder="Your Email"
                    className="py-2 px-3 rounded shadow-[0px_0px_4px_0px_rgba(125,125,214,0.50)] dark:shadow-[0px_0px_3px_0px_rgba(125,125,214,0.50)]" />

                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Message"
                    className="min-h-20 py-2 px-3 rounded shadow-[0px_0px_4px_0px_rgba(125,125,214,0.50)] dark:shadow-[0px_0px_3px_0px_rgba(125,125,214,0.50)]" />

                <button
                    type="submit"
                    className={`rounded bg-neutral-800 hover:bg-neutral-900 text-white dark:bg-neutral-200 dark:text-black p-2 hover:dark:bg-neutral-300 ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                    {loading ? "Sending..." : "Send message"}
                </button>
                {status.msg && <p className={`text-xs text-center ${status.sts === 200 ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</p>}
            </form>
        </section >
    )
}