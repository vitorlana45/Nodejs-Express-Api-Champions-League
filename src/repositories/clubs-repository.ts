import { ClubModel } from "../models/club-model"
import fs from 'fs'
import path from 'path'


export const findAllClubs = async ():Promise<ClubModel[]> => {

    const pathData = path.join(__dirname, '../database/clubs.json')
    const data = fs.readFileSync(pathData , "utf-8")
    const clubs: ClubModel[] = JSON.parse(data)
    return clubs
}