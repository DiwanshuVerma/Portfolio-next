import { EmailTemplate } from "@/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
    try {
        const { email, message } = await req.json()

        if (!email || !message) {
            return NextResponse.json(
                { success: false, message: 'Missing email or message!' },
                { status: 400 }
            )
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: "Invalid email address format!" },
                { status: 400 }
            )
        }

        const { error } = await resend.emails.send({
            from: 'Diwanshu <onboarding@resend.dev>',
            to: ['diwanshu63019@gmail.com'],
            subject: "New Message from Portfolio",
            react: EmailTemplate({ Email: email, Message: message })
        })

        if (error) {
            console.log(error)
            return NextResponse.json(
                { success: false, message: `Error sending email: ${error.message}` },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { success: true, message: "Thank you! I’ll be in touch shortly." },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { success: false, message: `Server error: ${error}` },
            { status: 500 }
        )
    }
}