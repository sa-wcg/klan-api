import { Response } from "express";

export const sendSuccessResponse = (
    res: Response,
    data: any,
    message = "Success"
) => {
    res.status(200).json({
        data: data,
        status: true,
        message: message,
    });
};

export const sendErrorResponse = (
    res: Response,
    errors: any,
    message = "Something Went Wrong",
    status = 406
) => {
    res.status(status).json({
        data: errors,
        status: false,
        message: message,
    });
};

export const sendEmptyResponse = (res: Response, data: any) => {
    res.status(204).json({
        data: data,
        status: false,
        message: "No Data",
    });
};
