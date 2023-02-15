import Link from "next/link"
import { alchemy } from "../alchemy"
import BlockOverview from "./BlockOverview"
import BlockReward from "./BlockReward"

type getBlockNumber = () => Promise<number[]>

const getBlockNum: getBlockNumber = async () => {
    let blockNumbers = []
    let blockNum = await alchemy.core.getBlockNumber()
    while (blockNumbers.length < 6) {
        blockNumbers.push(blockNum--)
    }

    return blockNumbers
}

const BlockchainInfo = async () => {
    const blockNum = await getBlockNum()
    return (
        <div className="mt-8 flex  w-full justify-between px-32">
            <div className="mr-2 flex h-fit w-full flex-col divide-y-2 rounded-lg bg-white shadow-lg ">
                <div className="h-14 p-4 font-bold">Latest Blocks</div>
                <div className="w-full">
                    {blockNum.map((num) => {
                        return (
                            <div
                                className="flex h-20 w-full border-b"
                                key={num}
                            >
                                <div className="m-2 flex items-center gap-2">
                                    <div className="rounded-lg bg-slate-100 p-3 text-center text-sm">
                                        Bk
                                    </div>
                                    <div className="flex flex-col">
                                        <Link
                                            className="text-blue-500 hover:text-blue-700"
                                            href={`/block/${num}`}
                                        >
                                            {num}
                                        </Link>
                                        <div className="text-xs">Some Time</div>
                                    </div>
                                </div>
                                {/* @ts-expect-error Server Component */}
                                <BlockOverview blockNum={num}></BlockOverview>
                                {/* @ts-expect-error Server Component */}
                                <BlockReward> </BlockReward>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="ml-2 flex h-fit w-full flex-col divide-y-2 rounded bg-white shadow-lg ">
                <div className=""> Latest Blocks</div>
            </div>
        </div>
    )
}

export default BlockchainInfo
