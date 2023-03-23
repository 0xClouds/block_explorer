import Link from "next/link"
import { ethers } from "ethers"

interface TransactionsObject extends Array<TransactionsObject> {
    hash: string
    type: number
    accessList: any[]
    blockHash: string
    blockNumber: number
    transactionIndex: number
    confirmations: number
    from: string
    gasPrice: any
    maxPriorityFeePerGas: any
    maxFeePerGas: any
    gasLimit: any
    to: string
    value: any
    nonce: number
    data: string
    r: string
    s: string
    v: number
    creates: any
    chainId: number
    wait: Function
}

const LatestTransactions = ({ txs }: { txs: TransactionsObject[] }) => {
    return (
        <div className="mr-2 flex h-fit w-full flex-col divide-y-2 rounded-lg bg-white  shadow-lg">
            <div className="h-14 p-4 font-bold">Latest Transactions</div>
            <div className="w-full">
                {txs.map((tx: any) => (
                    <div
                        className="flex h-20 w-full items-center  justify-evenly border-b px-4"
                        key={tx.nonce}
                    >
                        <div className="m-2 mr-8 flex w-2/6  items-center gap-2">
                            <div className="rounded-lg bg-slate-100 p-3 text-center text-sm">
                                Tx
                            </div>
                            <div className="flex flex-col">
                                <Link
                                    className="text-blue-500 hover:text-blue-700"
                                    href="#"
                                >
                                    {tx.hash.slice(0, 14)}...
                                </Link>
                                <div className="text-xs">Some Time</div>
                            </div>
                        </div>
                        <div className="flex w-4/6 justify-between text-sm">
                            <ul>
                                <li>
                                    From{" "}
                                    <Link
                                        href={`address/${tx.from}`}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        {tx.from.slice(0, 8)}...
                                        {tx.from.slice(34, 42)}
                                    </Link>
                                </li>
                                <li>
                                    To{" "}
                                    <Link
                                        href={`address/${tx.from}`}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        {tx.to.slice(0, 8)}...
                                        {tx.to.slice(34, 42)}
                                    </Link>
                                </li>
                            </ul>
                            <div>
                                <div className="rounded-lg border-2 border-gray-300 p-1 text-xs">
                                    {ethers.utils
                                        .formatEther(tx.value._hex)
                                        .slice(0, 5)}{" "}
                                    Eth
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LatestTransactions
