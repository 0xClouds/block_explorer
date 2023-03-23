"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useState } from "react"

const SearchBar = () => {
    const [address, setAddress] = useState<string>("")

    return (
        <div className="flex h-1/5 flex-col justify-center bg-blue-800 py-4 px-44">
            <h1 className="pb-4 text-2xl text-white">
                The Ethereum Blockchain Explorer
            </h1>

            <form>
                <input
                    className="h-10 w-6/12 rounded-l-lg indent-3 focus-visible:outline-0 "
                    placeholder="Enter Address Here..."
                    type="text"
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value)
                    }}
                ></input>

                <Link href={`/address/${address}`}>
                    <button
                        type="submit"
                        className="h-10 w-10 rounded-r-lg bg-blue-400"
                    >
                        <FontAwesomeIcon
                            className="text-white"
                            icon={faMagnifyingGlass}
                        ></FontAwesomeIcon>
                    </button>
                </Link>
            </form>
            <p className="mt-2 text-xs text-slate-300">
                The blockchain explorer with the least features! Search an
                address, browse tx receipts, or investigate blocks!{" "}
            </p>
        </div>
    )
}

export default SearchBar
