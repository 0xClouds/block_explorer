import { alchemy } from "../alchemy"
import LatestBlocks from "./LatestBlocks"
import LatestTransactions from "./LatestTransactions"
type getBlockNumber = () => Promise<number[]>

const getBlockNum: getBlockNumber = async () => {
    let blockNumbers = []
    let blockNum = (await alchemy.core.getBlockNumber()) - 2
    while (blockNumbers.length < 5) {
        blockNumbers.push(blockNum--)
    }

    return blockNumbers
}

const getTransactions = async () => {
    let blockNum = await getBlockNum()
    const blockTransactions = await alchemy.core.getBlockWithTransactions(
        blockNum[0]
    )
    const allTransactions = blockTransactions.transactions
    const latestTransactions = allTransactions.slice(
        allTransactions.length - 6,
        allTransactions.length - 1
    )
    return latestTransactions
}

const BlockchainInfo = async () => {
    const blockNum: number[] = await getBlockNum()
    const txs = await getTransactions()
    return (
        <div className="mt-8 flex  w-full justify-between px-44">
            {/* @ts-expect-error Server Component */}
            <LatestBlocks blockNum={blockNum}></LatestBlocks>
            {/* @ts-expect-error Server Component */}
            <LatestTransactions txs={txs}></LatestTransactions>
        </div>
    )
}

export default BlockchainInfo
