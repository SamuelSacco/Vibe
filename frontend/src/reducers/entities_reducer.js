import { combineReducers } from 'redux';
import users from './users_reducer';
import playlistsReducer from './playlists_reducer';
import scoreReducer from './score_reducer';



export default combineReducers({
  users,
  playlists: playlistsReducer,
  mood: scoreReducer
});
