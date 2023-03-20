import axios from "axios"
import { ethers } from "ethers"
const getMinerReward = async (BlockNum: number) => {
    const blockRes = await axios
        .post("http://localhost:3000/api/getBlockByNumber", {
            BlockNum,
        })
        .then((response) => {
            return response
        })
}

const BlockReward = async ({ blockNum }: { blockNum: number }) => {
    const blockRes = getMinerReward(blockNum)
    console.log(blockRes)

    return (
        <div>
            <div></div>
        </div>
    )
}

export default BlockReward
