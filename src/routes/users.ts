import { response, Router } from "express";
import { getUsersById, getUsers, createUser } from "./handlers/users-handler";
const router = Router();

//in index.ts we have registered router for all the below endpoints 
//so every request app.get("/api/users",userRouter); 
//for any request with endpoint having "/api/users" will be routed to user router , i.e here
//and here we inject the handler into the endpoints declared 
//e.g getUsers , getUsersById in the users handler file 
router.get("/", getUsers);
router.get("/:id", getUsersById);
router.post("/",createUser);

export default router;