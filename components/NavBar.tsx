import Link from "next/link"
import Image from "next/image"
import { FC } from "react"

const NavBar: FC = () => {
    return (
        <nav className=" flex h-12  w-screen items-center  justify-between border-b-2 border-blue-200 ">
            <Link href="/">
                <div className="ml-40 flex flex-row items-center">
                    <div className="relative mx-2 h-10 w-10 rounded-full border-4 border-solid border-blue-200">
                        <Image
                            className="rounded-full"
                            src="/images/cloud.png"
                            alt="A pfp for the developer Cloud"
                            fill
                            sizes="(max-width:1200px)100vw"
                        ></Image>
                    </div>
                    <p className="text-2xl text-blue-400">Cloud</p>
                    <p className=" text-2xl ">Scan</p>
                </div>
            </Link>

            <div className=" mr-40 flex list-none text-sm [&>a]:mr-10">
                <Link href="/" className="hover:text-blue-300">
                    Home
                </Link>
                <Link
                    href="/blockchain"
                    className="hover:text-blue-300 hover:line-through"
                >
                    Blockchain
                </Link>
                <Link
                    href="/"
                    className="hover:text-blue-300 hover:line-through"
                >
                    Tokens
                </Link>
                <Link
                    href="/"
                    className="hover:text-blue-300 hover:line-through"
                >
                    Resources
                </Link>
                <Link
                    href="/"
                    className="hover:text-blue-300 hover:line-through"
                >
                    More
                </Link>
                <Link
                    href="/"
                    className="hover:text-blue-300 hover:line-through"
                >
                    Login
                </Link>
            </div>
        </nav>
    )
}

export default NavBar
