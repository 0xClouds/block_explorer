import axios from "axios"
import { Utils } from "alchemy-sdk"
const ETHERSCAN_API_KEY = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY

interface BlockReward {
    status: string
    message: string
    result: {
        blockNumber: string
        timeStamp: string
        blockMiner: string
        blockReward: string
        uncles: [
            {
                miner: string
                unclePosition: string
                blockreward: string
            },
            {
                miner: string
                unclePosition: string
                blockreward: string
            }
        ]
        uncleInclusionReward: string
    }
}

const blockReward = async (blockNum: number): Promise<BlockReward> => {
    return axios
        .get(
            `https://api.etherscan.io/api?module=block&action=getblockreward&blockno=${blockNum}&apikey=${ETHERSCAN_API_KEY}`
        )
        .then((response) => {
            const reward = response.data
            return reward
        })
}

const BlockReward = async ({ blockNum }: { blockNum: number }) => {
    const blockRes = await blockReward(blockNum)
    const blockRewardWei = blockRes.result.blockReward
    let blockRewardEth
    if (blockRewardWei) {
        blockRewardEth = Utils.formatEther(blockRewardWei)
    }

    return (
        <div>
            {blockRes && (
                <div
                    className="rounded-lg border-2 border-gray-300 p-1 text-xs"
                    key={blockRes.result.blockNumber}
                >
                    {blockRewardEth?.slice(0, 6)}
                </div>
            )}
        </div>
    )
}

export default BlockReward
