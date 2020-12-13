import { combineReducers } from "redux";
import { playlist } from './playlist';
import { like } from './like'

export const reducers = combineReducers({
    playlist,
    like
});
