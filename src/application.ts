import express, { Request, Response } from "express";

function createApp() {
    const app = express();

    app.use(express.json());

    return app;
} 

export default createApp;
