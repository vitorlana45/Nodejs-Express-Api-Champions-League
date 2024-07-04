import { Request, Response } from "express";
import * as service from "../services/player-service";
import { noContent } from "../utils/http-helper";

export const getPlayer = async(req: Request, res: Response) => {
    const HttpResponse = await service.getPlayersService()

    res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    let id = parseInt(req.params.id)

    const HttpResponse = await service.getPlayerByIdService(id)
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {

    const bodyValue = req.body
    
    const HttpResponse = await service.createPlayerService(bodyValue)
    if(HttpResponse){
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
    }else{
        const response = await noContent()
        res.status(response.statusCode).json(response.body)
    }
}

export const deletePlayer = async(req:Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await service.deletePlayerService(id)
    
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const bodyValue = req.body
    const HttpResponse = await service.updatePlayerService(id, bodyValue)

    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}
