import { Container } from "./Container"

export const Footer = () => {
    return(
        <footer>
            <Container className="w-full flex items-center justify-between bg-red-500 text-neutral-500 p-4 text-sm">   
                <span>© 2025 Diwanshu Verma. All rights reserved.</span>
                <span>Made with ❤️</span>
            </Container>
        </footer>
    )
}