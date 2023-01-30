"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useState } from "react"

const SearchBar = () => {
    const [address, setAddress] = useState<string>("")

    const handleSearch = () => {}
    return (
        <div>
            <h1>The Ethereum Blockchain Explorer</h1>
            <form>
                <input
                    className="h-10 w-9/12"
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
        </div>
    )
}

export default SearchBar
