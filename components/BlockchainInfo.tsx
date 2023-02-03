import {
    Network,
    Alchemy,
    AlchemySettings,
    AssetTransfersParams,
    AssetTransfersCategory,
} from "alchemy-sdk"
import Link from "next/link"
import { FC } from "react"

const settings: AlchemySettings = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(settings)

type getBlockNumber = () => Promise<number[]>

const getBlockNum: getBlockNumber = async () => {
    let blockNumbers = []
    let blockNum = await alchemy.core.getBlockNumber()
    for (let i = 0; i < 5; i++) {
        blockNumbers.push(blockNum--)
    }
    console.log(blockNumbers)
    return blockNumbers
}

const BlockchainInfo = async () => {
    const blockNum = await getBlockNum()
    return (
        <div className="flex h-full w-full justify-evenly ">
            <div className="mt-8 flex h-2/4 w-5/12 flex-col divide-y-2 rounded-lg bg-white shadow-lg  [&>div]:border-b ">
                <div className="text-bold">Latest Blocks</div>
                <div className="w-full">
                    {blockNum.map((num) => {
                        return (
                            <div className="flex w-full  border-b">
                                <div className="m-2 flex items-center">
                                    <div className="rounded-lg bg-slate-100 p-3 text-center text-sm">
                                        Bk
                                    </div>
                                    <Link
                                        className="text-blue-500 hover:text-blue-700"
                                        href={`/block/${num}`}
                                    >
                                        {num}
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="lg mt-8 flex h-2/4 w-5/12 flex-col divide-y-2 rounded bg-white shadow-lg ">
                <div className=""> Latest Blocks</div>
            </div>
        </div>
    )
}

export default BlockchainInfo
