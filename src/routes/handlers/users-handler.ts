import { Request, Response } from "express";
import { CreateUserDto } from "../../dtos/create-user";
import { CreateUserQueryParams } from "../../types/query-params";
import { User } from "../../types/response";

//here extending the express Request interface 
//this way  we dont have to use .d.ts file 
declare module "express-serve-static-core" {
    interface Request {
        myProp?: boolean;
    }
}

export function getUsers(request: Request, response: Response) {
    response.send([{ "name": "sanjay", "age": "42" },
    { "name": "moneran", "age": "3 " },
    { "name": "andreq", "age": "47" }]
    );
}

export function getUsersById(request: Request, response: Response) {
    response.send([{ "name": "sanjay", "age": "42" }]);
}

export function createUser(request: Request<
    { id: string },
    {},
    CreateUserDto,
    CreateUserQueryParams>, response: Response<User>) {
    //request.query.loginAfterCreate; //not "any" type as we have defined it in the types
    //request.params.id //not "any" type as we have defined it in as anosymous type, can also create
    //interface definition for this and then inject it here as parameter type
    return response.status(201).send({
        id: 1,
        username: "sanjay",
        email: "sanjaymahara@gmail.com"
    });

}