export const SET_PLAYLIST = "SET_PLAYLIST";
export const SET_LIKE = "SET_LIKE"

export const setPlayList = movie => ({
  type: SET_PLAYLIST,
  payload: movie
});


export const setLike = movie => ({
  type: SET_LIKE,
  payload: movie
});
