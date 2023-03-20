import { Response } from "express";
import {
    sendSuccessResponse,
    sendEmptyResponse,
    sendErrorResponse,
} from "../response-utils";

const mockResStatusFun = jest.fn();

jest.mock("express", () => {
    const originalModule = jest.requireActual("express");

    return {
        ...originalModule,
        status: mockResStatusFun,
    };
});

describe("Response Utils", () => {
    it("sendSuccessResponse should set status to 200", () => {

        sendSuccessResponse(res , {});

        expect(mockResStatusFun).toBeCalledWith(200);
    });

    it("sendErrorResponse should set status to 406", () => {});

    it("sendEmptyResponse should set status to 204", () => {});
});
