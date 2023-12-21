import { CLEANUSER, GETUSER, GETVIDEOGAMES } from "./types";

export function getUser(userData){
    return{
        type: GETUSER,
        payload: userData,
    }
}

export function cleanUser(){

    return{
        type: CLEANUSER
    }
}

export function getVideogames(gameData){

    return{
        type: GETVIDEOGAMES,
        payload: gameData,
    }
}