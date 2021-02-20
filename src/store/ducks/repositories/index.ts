import { Reducer } from "redux";
import { RepositoriesState, RepositoriesTypes } from "./types";

const INITIAL_STATE: RepositoriesState = {
  data: [
    {
      id: 1,
      name: "yagoernandes",
    },
  ],
  error: false,
  loading: true,
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    case RepositoriesTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        data: [],
      };
    case "testando":
      return {
        ...state,
        data: [{ id: 42, name: new Date().toUTCString() }],
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
