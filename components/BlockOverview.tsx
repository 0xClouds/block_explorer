import { alchemy } from "../alchemy"
import Link from "next/link"

const getBlockInfo = async (blockNum: number) => {
    const block = await alchemy.core.getBlock(blockNum)
    return block
}

const BlockOverview = async ({ blockNum }: { blockNum: number }) => {
    const block = await getBlockInfo(blockNum)
    return (
        <ul className="&>li>span]: ml-12 flex flex-col justify-center [&>li>span]:text-blue-500 [&>li]:text-sm">
            <li>
                Fee Recipent:
                <span className="pl-2">
                    <Link href={`/address/${block.miner}`}>
                        {block.miner.slice(0, 10)}...{" "}
                    </Link>{" "}
                </span>
            </li>
            <li>
                <span>{block.transactions.length}</span> txns{" "}
            </li>
        </ul>
    )
}

export default BlockOverview
