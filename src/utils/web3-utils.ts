import { ethers, Transaction } from "ethers";
import { saveStringToIpfs } from "./ipfs-utils";

const POLYGON_RPC = process.env.POLYGON_RPC;
const POLYGON_MNEMONIC = process.env.POLYGON_MNEMONIC || "";

const TOKEN_ADDRESS = process.env.TOKEN_ADDRESS || "";

const provider = new ethers.providers.JsonRpcProvider(POLYGON_RPC);
let wallet = ethers.Wallet.fromMnemonic(POLYGON_MNEMONIC);

wallet = wallet.connect(provider);

const tokenContract: ethers.Contract = new ethers.Contract(
    TOKEN_ADDRESS,
    ["function safeMint(address _to,string calldata _tokenURI)"],
    wallet
);

export const mintToken = async (to: string, imageUri: string) => {
    const metadata = {
        name: "Good Glamm NFT",
        description: "This is an NFT for Good Glamm art wall",
        image: imageUri,
    };

    const metadataUri = await saveStringToIpfs(JSON.stringify(metadata));

    const tx: Transaction = await tokenContract.safeMint(to, metadataUri);

    return tx;
};

export const getTransactionStatus = async (
    txHash: string
): Promise<{
    status: "pending" | "success";
    txReceipt: ethers.providers.TransactionResponse;
}> => {
    const txReceipt = await provider.getTransaction(txHash);

    if (!txReceipt.blockNumber) return { status: "pending", txReceipt };

    return { status: "success", txReceipt };
};
