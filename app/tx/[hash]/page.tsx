import {
    Network,
    Alchemy,
    AlchemySettings,
    AssetTransfersParams,
    AssetTransfersCategory,
} from "alchemy-sdk"

const settings: AlchemySettings = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(settings)

const TransactionsReciepts = async ({ params }: any) => {
    console.log(params.hash)
    return <div>Hello</div>
}

export default TransactionsReciepts
