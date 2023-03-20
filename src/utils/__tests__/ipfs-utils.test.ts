import dotenv from "dotenv";
dotenv.config();

import { saveStringToIpfs } from "../ipfs-utils";

jest.setTimeout(100000);

describe("IPFS utils", () => {
    test("save String to Ipfs should return an ipfs url", async () => {
        const testObj = { name: "GDMM" };
        const ipfsUri = await saveStringToIpfs(JSON.stringify(testObj));

        expect(ipfsUri.indexOf("ipfs://")).toBe(0);
    });
});
