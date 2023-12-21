import { CLEANUSER, GETUSER, GETVIDEOGAMES } from "./types";

const initialState = {
  userData: {
    username: "",
    avatar: "",
    gameData:[],
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
          },
        };
    default:
      return state;
  }
}

