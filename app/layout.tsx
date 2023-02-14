import "./globals.css"
import NavBar from "@/components/NavBar"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className="w-full">
            <head></head>
            <body>
                <NavBar />
                {children}
            </body>
        </html>
    )
}
