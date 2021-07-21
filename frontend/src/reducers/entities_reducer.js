import { combineReducers } from 'redux';
import users from './users_reducer';
import playlistsReducer from './playlists_reducer';
import vibeReducer from './score_reducer';



export default combineReducers({
  users,
  playlists: playlistsReducer,
  vibe: vibeReducer
});
