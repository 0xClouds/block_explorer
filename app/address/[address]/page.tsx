import Link from "next/link"
import { alchemy } from "../../../alchemy"
import { AssetTransfersCategory, Utils } from "alchemy-sdk"

const getAddressBalance = async (address: string) => {
    const balanceInWei = await alchemy.core.getBalance(address)
    const balance = Utils.formatEther(balanceInWei)
    return balance
}

async function getTotalTransactions(address: string) {
    const getTotalTransactions = await alchemy.core.getTransactionCount(address)
    return getTotalTransactions
}

async function getAssetTransfers(address: string) {
    const data = await alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        toBlock: "latest",
        fromAddress: address,
        excludeZeroValue: true,
        maxCount: 0x3e8,
        category: [
            AssetTransfersCategory.ERC20,
            AssetTransfersCategory.ERC721,
            AssetTransfersCategory.ERC1155,
        ],
    })

    return data.transfers
}

const Address = async ({ params }: any) => {
    const balance = await getAddressBalance(params.address)
    const Transactions = await getTotalTransactions(params.address)
    const Transfers = await getAssetTransfers(params.address)

    return (
        <div className="flex h-screen flex-col items-center bg-slate-100 px-32">
            <div className="w-full border-b py-4 pl-4  ">
                <span className="text-xl">Address: </span>
                {params.address}
            </div>

            <div className="mt-4 flex w-full flex-row justify-between">
                <div className="w-5/12 divide-y rounded-lg bg-white text-sm shadow-lg [&>div]:p-3">
                    <div>Overview</div>
                    <div>Balance: {balance.slice(0, 6)} Ether</div>
                    <div>Total Transactions: {Transactions} </div>
                </div>
                <div className="w-5/12 rounded-lg bg-white text-sm shadow-lg [&>div]:p-3">
                    <div className="border-b">More info:</div>
                </div>
            </div>

            {/*
            This is the table section, to be honest this could be turned into its own component.
            */}

            <div className="mt-8 flex h-4/6 w-full  flex-col items-center overflow-scroll rounded-lg bg-white shadow-lg">
                <div className="w-full border-b p-4">Transactions</div>
                <div className="w-full p-4 text-sm text-slate-400">
                    <p>
                        The latest {Transfers.length} from a total of{" "}
                        {Transfers.length} transactions
                    </p>
                </div>
                <table className="w-[98%]">
                    <thead className="  border-b bg-slate-100 text-left">
                        <tr className="[&>th]:p-3">
                            <th scope="col">Txn Hash</th>
                            <th scope="col">Method</th>
                            <th scope="col">Block</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>
                    {Transfers.map((transfer) => {
                        return (
                            <tbody key={transfer.uniqueId}>
                                <tr className="border-b text-sm hover:bg-slate-100 [&>td]:p-3">
                                    <td className="text-blue-500">
                                        <Link
                                            className="hover:text-blue-700"
                                            href={`/tx/${transfer.hash}`}
                                        >
                                            {transfer.hash.slice(0, 20)}...
                                        </Link>
                                    </td>
                                    <td>
                                        <p className="w-fit rounded-md bg-slate-300 p-1 text-xs">
                                            Transfer
                                        </p>
                                    </td>
                                    <td>{transfer.blockNum}</td>
                                    <td>{transfer.from.slice(0, 20)}...</td>
                                    <td className="text-blue-500">
                                        <Link
                                            className="hover:text-blue-700"
                                            href={`/address/${transfer.to}`}
                                        >
                                            {transfer.to?.slice(0, 20)}...{" "}
                                        </Link>
                                    </td>
                                    <td>
                                        {transfer.value
                                            ? `${transfer.value} Ethers`
                                            : `0 Ethers`}
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default Address
