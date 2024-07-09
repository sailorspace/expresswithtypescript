import express from "express";
import userRouter from "./routes/users"

//all the middleware and route registration goes inside the create app function 
export function createApp() {
    const app = express();
    //lly register routers for other domains as well
    //otherwise we can create single entry router and move these there
    //and register center router here
    //passing specific router as middleware to the api function as handler 
    app.get("/api/users", userRouter);

    return app;
};