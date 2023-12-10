import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { startServer } from "./controllers/server-controller";
import authRouter from "./routes/auth-routes";
import { AUTH_ROUTER_ROUTE } from "./utils/ENDPOINTS";
import morgan from "morgan";
dotenv.config();
const app = express();
app.use(morgan("dev")); //it is used to show which end point hit
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(AUTH_ROUTER_ROUTE, authRouter);
const server = app.listen(process.env.SERVER_PORT, startServer);
