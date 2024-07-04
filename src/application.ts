import express from "express";
import router from "./routes/routes";
import cors from 'cors';
import { METHODS } from "http";

function createApp() {
    const app = express();

    app.use(express.json());
    app.use("/api", router)

    app.use(cors())

    return app;
} 

export default createApp;
