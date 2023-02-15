import axios from "axios"
import { ethers } from "ethers"
const getBlock = async (num: number) => {
    const blockNumHex = ethers.toQuantity(num)
    const blockRes = await axios.post("/api/getBlockByNumber", {
        blockNumHex,
    })
    console.log(blockRes)
    return blockRes
}

const BlockReward = async ({ blockNum }: { blockNum: number }) => {
    const blockRes = getBlock(blockNum)
    return (
        <div>
            <div>hello</div>
        </div>
    )
}

export default BlockReward
