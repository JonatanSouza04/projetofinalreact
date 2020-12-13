import { SET_PLAYLIST  } from "../actions/playlistActions";
  
  // ESTADO INICIAL
  const initialState = {
    movies: []
  };
  
  export const playlist = (state = initialState, action) => {
    switch (action.type) {
      case SET_PLAYLIST:
        return {
          ...state,
          movies: action.payload 
        };
      default:
        return state;
    }
  };
  