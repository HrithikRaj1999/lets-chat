import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import { startServer } from "./controllers/server-controller";

dotenv.config();
const app=express();

app.use(cors());
app.use(express.json())
const server = app.listen(process.env.SERVER_PORT, startServer);