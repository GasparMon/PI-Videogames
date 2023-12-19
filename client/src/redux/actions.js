import { GETUSER } from "./types";

export function getUser(userData){
    return{
        type: GETUSER,
        payload: userData,
    }
}