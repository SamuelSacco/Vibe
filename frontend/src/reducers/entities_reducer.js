import { combineReducers } from 'redux';
import users from './users_reducer';
import playlistsReducer from './playlists_reducer';
import moodReducer from './mood_reducer';



export default combineReducers({
  users,
  playlists: playlistsReducer,
  mood: moodReducer
});
