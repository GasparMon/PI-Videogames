import { CLEANUSER, GETUSER } from "./types";

const initialState = {
  userData: {
    username: "",
    avatar: "",
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
    default:
      return state;
  }
}
