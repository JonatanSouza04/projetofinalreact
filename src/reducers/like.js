import { SET_LIKE  } from "../actions/playlistActions";
  
  // ESTADO INICIAL
  const initialState = {
    movies: []
  };
  
  export const like = (state = initialState, action) => {
    switch (action.type) {
      case SET_LIKE:
        return {
          ...state,
          movies: action.payload 
        };
      default:
        return state;
    }
  };
  