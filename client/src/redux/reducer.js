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

const initialState = {
  userData: {
    id: "",
    username: "",
    avatar: "",
    email: "",
    password: "",
    gameData: [],
    gameOrigin: [],
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
          id: action.payload.id,
          username: action.payload.username,
          avatar: action.payload.avatar,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    case CLEANUSER:
      return {
        ...state,
        userData: {
          ...state.userData,
          id: "",
          username: "",
          avatar: "",
          email: "",
          password: "",
          gameData: [],
          gameFiltered: [],
          DataCopy: [],
        },
      };

    case GETVIDEOGAMES:
      return {
        ...state,
        userData: {
          ...state.userData,
          gameData: action.payload,
          DataCopy: action.payload,
          gameOrigin: [],
          gameFiltered: [],
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

      orderCopyName = [...state.userData.gameData];

      if (action.payload === "Ascendent") {
        orderCopyName.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === "Descendent") {
        orderCopyName.sort((a, b) => b.name.localeCompare(a.name));
      }

      return {
        ...state,
        userData: {
          ...state.userData,
          gameData: orderCopyName,
        },
      };

    case ORDERRATING:
      let orderCopyRating = [];

      orderCopyRating = [...state.userData.gameData];

      if (action.payload === "Ascendent") {
        orderCopyRating.sort((a, b) => a.rating - b.rating);
      } else if (action.payload === "Descendent") {
        orderCopyRating.sort((a, b) => b.rating - a.rating);
      }

      return {
        ...state,
        userData: {
          ...state.userData,
          gameData: orderCopyRating,
        },
      };

    case FILTERORIGIN:
      let orderCopyOrigin = [];
      let filterOrigin = [];

      const resetState = {
        ...state,
        userData: {
          ...state.userData,
          gameData: state.userData.DataCopy,
          gameOrigin: [],
          gameFiltered: [],
        },
      };

      if (state.userData.gameFiltered.length === 0) {
        if (action.payload === "API") {
          orderCopyOrigin = state.userData.DataCopy.filter(
            (element) => typeof element.id === "number"
          );

          filterOrigin = orderCopyOrigin;
        } else if (action.payload === "DB") {
          orderCopyOrigin = state.userData.DataCopy.filter(
            (element) => element.id.length > 10
          );

          filterOrigin = orderCopyOrigin;
        } else if (action.payload === "All") {
          return resetState;
        }
      } else {
        if (action.payload === "API") {
          orderCopyOrigin = state.userData.gameFiltered.filter(
            (element) => typeof element.id === "number"
          );

          filterOrigin = state.userData.DataCopy.filter(
            (element) => typeof element.id === "number"
          );
        } else if (action.payload === "DB") {
          orderCopyOrigin = state.userData.gameFiltered.filter(
            (element) => element.id.length > 10
          );

          filterOrigin = state.userData.DataCopy.filter(
            (element) => element.id.length > 10
          );
        } else if (action.payload === "All") {
          return resetState;
        }
      }
      return {
        ...state,
        userData: {
          ...state.userData,
          gameData: orderCopyOrigin,
          gameOrigin: filterOrigin,
        },
      };

    case FILTERGENRE:
      let orderCopyGenre = [];
      let filterCopyGenre = [];

      if (action.payload === "All") {
        if (state.userData.gameOrigin.length === 0) {
          orderCopyGenre = state.userData.gameData;
        } else {
          orderCopyGenre = state.userData.gameOrigin;
        }
      } else {
        filterCopyGenre = state.userData.DataCopy.filter((element) =>
          element.Genres.some((genre) => genre.name === action.payload)
        );

        if (state.userData.gameOrigin.length === 0) {
          orderCopyGenre = state.userData.DataCopy.filter((element) =>
            element.Genres.some((genre) => genre.name === action.payload)
          );
        } else {
          orderCopyGenre = state.userData.gameOrigin.filter((element) =>
            element.Genres.some((genre) => genre.name === action.payload)
          );
        }
      }
      return {
        ...state,
        userData: {
          ...state.userData,
          gameData: orderCopyGenre,
          gameFiltered: filterCopyGenre,
        },
      };

    case DELETEGAME:
      const filteredGames = state.userData.DataCopy.filter(
        (element) => element.id !== action.payload
      );

      return {
        ...state,
        userData: {
          ...state.userData,
          DataCopy: filteredGames,
        },
      };

    case UPDATEUSER:
      return {
        ...state,
        userData: {
          ...state.userData,
          avatar: action.payload.avatar,
          email: action.payload.email,
          password: action.payload.password,
        },
      };

    default:
      return state;
  }
}
