import { Router } from "express";
import { loginController } from "../controllers/auth-controller";
import { LOGIN_CONTROLLER_ROUTE } from "../utils/ENDPOINTS";
const authRouter = Router();


authRouter.post(LOGIN_CONTROLLER_ROUTE, loginController);


export default authRouter;
