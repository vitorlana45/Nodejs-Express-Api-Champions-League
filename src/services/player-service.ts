import * as HttpResponse from "../utils/http-helper"
import * as PlayersRepository from "../repositories/player-repository"
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";


export const getPlayersService = async () => {

    const data = await PlayersRepository.findAllPlayers()
    let response = null;

    if (data) {
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent()
    }
    return response
}

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayersRepository.findPlayerById(id)
    let response = null;

    if (data) {
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent()
    }
    return response
}

export const createPlayerService = async (player: PlayerModel) => {

    let response = null;

    if (Object.keys(player).length !== 0) {
        response = await PlayersRepository.insertPlayer(player)
        response = HttpResponse.created()
    } else {
        response = await HttpResponse.badRequest()
    }
    return response
}

export const  deletePlayerService = async (id: number) => {
    let response = null;
    const isDeleted = await PlayersRepository.deleteById(id)
    
    if(isDeleted){
        response = await HttpResponse.ok({message: "deleted",})
    }else{
        response = await HttpResponse.badRequest()
    }
    return response
}

export const updatePlayerService = async (id: number, player: StatisticsModel) => {
    let response = null
    const data = await PlayersRepository.findAndModifyPlayer(id, player);


    if(Object.keys(data).length === 0) {
        response = await HttpResponse.badRequest()
    }
    else{
    response = await HttpResponse.ok(data)
    }
    return response
}