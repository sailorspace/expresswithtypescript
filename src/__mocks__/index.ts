import { Request, Response } from "express";

export const mockRequest = {

} as Request;
//for the time being converting to the express Request type
//in real test scenarios we will need the right 
//parameter type 
export const mockResponse = {

    //mock the send function 
    send: jest.fn(),

} as unknown as Response;