import { Container } from "./Container"

export const Footer = () => {
    return(
        <footer>
            <Container className="w-full flex justify-between text-neutral-500 p-4 text-[10px] sm:text-xs">   
                <span>© 2025 Diwanshu Verma. All rights reserved.</span>
                <span className="text-nowrap">Made with 💻 (❤️)</span>
            </Container>
        </footer>
    )
}