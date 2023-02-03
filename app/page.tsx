import SearchBar from "@/components/SearchBar"
import BlockchainInfo from "@/components/BlockchainInfo"

const Home = async () => {
    return (
        <div className="h-screen w-screen bg-slate-100">
            <SearchBar />
            <BlockchainInfo />
        </div>
    )
}

export default Home
