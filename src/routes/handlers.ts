import { Request, Response } from "express";
import { getTransactionStatus, mintToken } from "../utils/web3-utils";
import {
    sendErrorResponse,
    sendSuccessResponse,
} from "../utils/response-utils";

export const handleMintToken = async (req: Request, res: Response) => {
    try {
        const { to, image } = req.body;

        const tx = await mintToken(to, image);

        return sendSuccessResponse(res, { hash: tx.hash });
    } catch (err) {
        console.log({ err });

        return sendErrorResponse(res, err);
    }
};

export const handleGetTransactionStatus = async (
    req: Request,
    res: Response
) => {
    try {
        const { txHash } = req.query;

        if (!txHash)
            return sendErrorResponse(res, { err: "No txHash Provided" });

        const { status, txReceipt } = await getTransactionStatus(
            txHash as string
        );

        return sendSuccessResponse(res, { status, txHash, txReceipt });
    } catch (err) {
        console.log({ err });

        return sendErrorResponse(res, err);
    }
};
