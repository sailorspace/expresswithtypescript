import { Router } from "express";
import userRouter from "../routes/users";

const router = Router();
router.use(userRouter);


export default router;