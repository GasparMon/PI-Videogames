import {
  CLEANUSER,
  DELETEGAME,
  FILTERGENRE,
  FILTERORIGIN,
  GETGAMEBYNAME,
  GETUSER,
  GETVIDEOGAMES,
  ORDERNAME,
  ORDERRATING,
  UPDATEUSER,
} from "./types";

export function getUser(userData) {
  return {
    type: GETUSER,
    payload: userData,
  };
}

export function cleanUser() {
  return {
    type: CLEANUSER,
  };
}

export function getVideogames(gameData) {
  return {
    type: GETVIDEOGAMES,
    payload: gameData,
  };
}

export function gamebyName(name) {
  return {
    type: GETGAMEBYNAME,
    payload: name,
  };
}

export function orderName(order) {
  return {
    type: ORDERNAME,
    payload: order,
  };
}

export function orderRating(order) {
  return {
    type: ORDERRATING,
    payload: order,
  };
}

export function filterGenre(genre) {
  return {
    type: FILTERGENRE,
    payload: genre,
  };
}

export function filterOrigin(origin) {
  return {
    type: FILTERORIGIN,
    payload: origin,
  };
}

export function deleteGame(id) {
  return {
    type: DELETEGAME,
    payload: id,
  };
}

export function updateUser(newUser){

    
    return{
        type: UPDATEUSER,
        payload: newUser,
    }
}
