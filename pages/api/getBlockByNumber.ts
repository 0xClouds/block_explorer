import axios, { AxiosResponse } from "axios"
import { ethers } from "ethers"

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

// export default async (req: any, res: any):<AxiosResponse<BlockData>>  => {
//     const getBlock = async (num: number) => {
//         const blockNumHex = ethers.toBeHex(num)
//         const blockRes = await axios.post(ALCHEMY_API_URL, {
//             jsonrpc: "2.0",
//             method: "eth_getBlockByNumber",
//             params: [blockNumHex, true],
//             id: 0,
//         })
//         return blockRes.data.result
//     }

//     try {
//         const { BlockNum } = req.body
//         const blockInfo = await getBlock(BlockNum)
//         console.log(blockInfo)
//         res.json({ success: true, response: blockInfo })
//     } catch (error) {
//         console.error(error)
//         throw error
//     }
// }
// interface BlockData {
//     jsonrpc: string
//     id: number
//     result: {
//         number: string
//         difficulty: string
//         extraData: string
//         gasLimit: string
//         gasUsed: string
//         hash: string
//         logsBloom: string
//         miner: string
//         mixHash: string
//         nonce: string
//         parentHash: string
//         receiptsRoot: string
//         sha3Uncles: string
//         size: string
//         stateRoot: string
//         timestamp: string
//         totalDifficulty: string
//         transactions: string[]
//         transactionsRoot: string
//         uncles: string[]
//     }
// }

// export default async (req: any, res: any) => {
//     console.log("hello")
//     const { BlockNum } = req.body
//     const blockNumHex = ethers.toBeHex(BlockNum)
//     console.log(blockNumHex)
//     try {
//         console.log(blockNumHex)
//         const externalRes = await axios.post(ALCHEMY_API_URL!, {
//             jsonrpc: "2.0",
//             method: "eth_getBlockByNumber",
//             params: [blockNumHex, true],
//             id: 0,
//         })
//         const { data } = externalRes.data.result
//         console.log(blockNumHex)
//         return blockNumHex
//     } catch (error) {
//         console.log("im broken")
//         throw error
//     }
// }
