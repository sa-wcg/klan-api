import express from "express";
import { handleGetTransactionStatus, handleMintToken } from "./handlers";

const router = express.Router();

router.post("/mint", handleMintToken);
router.get("/status", handleGetTransactionStatus);

export default router;
