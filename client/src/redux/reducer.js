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
} from "./types";

const initialState = {
  userData: {
    username: "",
    avatar: "",
    email:"",
    gameData: [],
    gameFiltered: [],
    DataCopy: [],
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GETUSER:
      return {
        ...state,
        userData: {
          ...state.userData,
          username: action.payload.username,
          avatar: action.payload.avatar,
          email: action.payload.email,
        },
      };
    case CLEANUSER:
      return {
        ...state,
        userData: {
          ...state.userData,
          username: "",
          avatar: "",
        },
      };

    case GETVIDEOGAMES:
      return {
        ...state,
        userData: {
          ...state.userData,
          gameData: action.payload,
          DataCopy:action.payload,
        },
      };

    case GETGAMEBYNAME:
      return {
        ...state,
        userData: {
          ...state.userData,
          gameDatabyName: action.payload,
        },
      };

    case ORDERNAME:

      let orderCopyName = [];

      // if (state.userData.gameFiltered.length === 0) {
        orderCopyName = [...state.userData.gameData];
        
        if (action.payload === "Ascendent") {
       
          orderCopyName.sort((a, b) => a.name.localeCompare(b.name));

        } else if (action.payload === "Descendent") {
          orderCopyName.sort((a, b) => b.name.localeCompare(a.name));
        }
      // } else {
      //   orderCopyName = [...state.userData.gameFiltered];

      //   if (action.payload === "Descendent") {
      //     orderCopyName.sort((a, b) => a.name.localeCompare(b.name));
      //   } else if (action.payload === "Ascendent") {
      //     orderCopyName.sort((a, b) => b.name.localeCompare(a.name));
      //   }
      // }
      return {
        ...state,
        userData: {
          ...state.userData,
          gameData: orderCopyName,
        },
      };

    case ORDERRATING:
  
      let orderCopyRating = [];

      // if (state.userData.gameFiltered.length === 0) {
        orderCopyRating = [...state.userData.gameData];
        
        if (action.payload === "Ascendent") {;
          orderCopyRating.sort((a, b) => a.rating - b.rating);
        } else if (action.payload === "Descendent") {
          orderCopyRating.sort((a, b) => b.rating - a.rating);
        }
      // } else {
      //   orderCopyRating = [...state.userData.gameFiltered];

      //   if (action.payload === "Descendent") {
      //     orderCopyRating.sort((a, b) => a.rating - b.rating);
      //   } else if (action.payload === "Ascendent") {
      //     orderCopyRating.sort((a, b) => b.rating - a.rating);
      //   }
      // }
      return {
        ...state,
        userData: {
          ...state.userData,
          gameData: orderCopyRating,
        },
      };

      case FILTERORIGIN:

      let orderCopyOrigin = []
     
      if (action.payload === "API") {
        orderCopyOrigin = state.userData.DataCopy.filter((element) => 
          typeof element.id === 'number'
        );

      } else if (action.payload === "DB"){

        orderCopyOrigin = state.userData.DataCopy.filter((element) => 
      element.id.length > 10
      );
      } else if (action.payload === "All"){
        orderCopyOrigin = state.userData.DataCopy
      }

      return{
        ...state,
        userData:{
          ...state.userData,
          gameData: orderCopyOrigin,
          gameFiltered:orderCopyOrigin,
        }
      }

      case FILTERGENRE:

  let orderCopyGenre = [];

  if (action.payload === "All"){
    if(state.userData.gameFiltered.length === 0){
      orderCopyGenre = state.userData.gameData;
    }else {
      orderCopyGenre = state.userData.gameFiltered;
    }
  }

  else if (state.userData.gameFiltered.length === 0) {

    orderCopyGenre = state.userData.DataCopy.filter((element) =>
      element.Genres.some((genre) => genre.name === action.payload)
    );
  } else {
    orderCopyGenre = state.userData.gameFiltered.filter((element) =>
      element.Genres.some((genre) => genre.name === action.payload)
    );
  }

  

  return {
    ...state,
    userData: {
      ...state.userData,
      gameData: orderCopyGenre,
    },
  };

  case DELETEGAME:

  const filteredGames = state.userData.DataCopy.filter((element)=>
  element.id !== action.payload
  )

  return{
    ...state,
    userData: {
      ...state.userData,
      DataCopy: filteredGames
    }
  }

    default:
      return state;
  }
}
