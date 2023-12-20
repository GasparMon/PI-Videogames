import { CLEANUSER, GETUSER } from "./types";

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