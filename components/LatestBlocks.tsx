import BlockOverview from "./BlockOverview"
import BlockReward from "../app/components/BlockReward"
import Link from "next/link"

interface BlockNumbers {
    blockNum: number[]
}
const LatestBlocks = async ({ blockNum }: BlockNumbers) => {
    return (
        <div className="mr-2 flex h-fit w-full flex-col divide-y-2 rounded-lg bg-white shadow-lg ">
            <div className="h-14 p-4 font-bold">Latest Blocks</div>
            <div className="w-full">
                {blockNum.map((num: number) => {
                    return (
                        <div
                            className="flex h-20 w-full items-center border-b px-4"
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
                            <div className="flex w-full justify-between">
                                {/* @ts-expect-error Server Component */}
                                <BlockOverview blockNum={num}></BlockOverview>
                                {/* @ts-expect-error Server Component */}
                                <BlockReward blockNum={num}> </BlockReward>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LatestBlocks
