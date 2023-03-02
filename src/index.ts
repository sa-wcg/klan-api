import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import router from "./routes";

const PORT = process.env.APP_PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => res.status(200).send("Hello World"));

app.use("/v1", router);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
