import { PlayerModel } from "../models/player-model";
import { database } from "../database/players-db";
import { StatisticsModel } from "../models/statistics-model";

export const findAllPlayers = async ():Promise<PlayerModel[]> => {
    return database;
} 

export const findPlayerById = async (id: number):Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id)

}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player)
}

export const deleteById = async (id: number) => {
    const index = database.findIndex(player => player.id === id)
    if(index !== -1) {
        database.splice(index, 1)
        return true;
        }else{
            return false
        }
    }


export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel):Promise<PlayerModel> => {

    const playerIndex = database.findIndex(player => player.id === id)

    if(playerIndex !== -1){
        database[playerIndex].statistics = statistics;
    }
    return database[playerIndex]
}