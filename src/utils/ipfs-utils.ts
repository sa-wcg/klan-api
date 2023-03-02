import axios from "axios";
import FormData from "form-data";

const NFT_STORAGE_BASE_URL = process.env.NFT_STORAGE_BASE_URL;
const NFT_STORAGE_ACCESS_KEY = process.env.NFT_STORAGE_ACCESS_KEY;

export const saveStringToIpfs = async (data: string): Promise<string> => {
    const formdata = new FormData();

    formdata.append("meta", data);

    const response = await axios.post(
        `${NFT_STORAGE_BASE_URL}/store`,
        formdata,
        {
            headers: {
                Authorization: `Bearer ${NFT_STORAGE_ACCESS_KEY}`,
            },
        }
    );

    return response.data.value.url;
};
