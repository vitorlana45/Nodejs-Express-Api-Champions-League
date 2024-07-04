import * as HttpResponse from '../utils/http-helper';
import * as ClubRepository from '../repositories/clubs-repository';

export const getClubsService = async () =>{
    const response = await HttpResponse.ok(await ClubRepository.findAllClubs());
    return response;
}