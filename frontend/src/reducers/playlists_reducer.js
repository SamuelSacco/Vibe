import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, REMOVE_PLAYLIST } from '../actions/playlist_actions';

const playlistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState;

  switch (action.type){
    case RECEIVE_PLAYLISTS:
      newState = {};
      action.playlists.forEach( playlist => newState[playlist._id] = playlist)
      return newState;
    case RECEIVE_PLAYLIST:
      return Object.assign({}, oldState, {[action.playlist.id]: action.playlist})
    case REMOVE_PLAYLIST:
      debugger
      newState = Object.assign({}, oldState)
      delete newState[action.playlistId]
      return newState
    default: 
      return oldState
  }
}

export default playlistsReducer

