import axios, { AxiosResponse } from "axios"

const ALCHEMY_API_URL =
    "https://eth-mainnet.g.alchemy.com/v2/JErit5upQRQquj3XL-ViJe85QB3XE_q9"

interface BlockData {
    jsonrpc: string
    id: number
    result: {
        number: string
        difficulty: string
        extraData: string
        gasLimit: string
        gasUsed: string
        hash: string
        logsBloom: string
        miner: string
        mixHash: string
        nonce: string
        parentHash: string
        receiptsRoot: string
        sha3Uncles: string
        size: string
        stateRoot: string
        timestamp: string
        totalDifficulty: string
        transactions: string[]
        transactionsRoot: string
        uncles: string[]
    }
}

export default async (req: any): Promise<AxiosResponse<BlockData>> => {
    const { blockNumHex } = req.body
    try {
        const externalRes = await axios.post(ALCHEMY_API_URL!, {
            jsonrpc: "2.0",
            method: "eth_getBlockByNumber",
            params: [blockNumHex, true],
            id: 0,
        })
        const { data } = externalRes.data.result

        return data
    } catch (error) {
        console.log("im broken")
        console.error(error)
        throw error
    }
}
