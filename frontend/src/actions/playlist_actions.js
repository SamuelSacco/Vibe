import * as PlaylistAPIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS"
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST"
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST"

export const receivePlaylists = (playlists) => {
  return({
    type: RECEIVE_PLAYLISTS, //
    playlists: playlists.data
  })
}

export const receivePlaylist = (playlist) => {
  return({
    type: RECEIVE_PLAYLIST, //
    playlist
  })
}

export const removePlaylist = (playlistId) => {
  return({
    type: REMOVE_PLAYLIST, 
    playlistId
  })
}



// thunk actions
export const requestPlaylists = (userId) => dispatch => {
  return(
    PlaylistAPIUtil.fetchPlaylists(userId)
      .then(playlists => dispatch(receivePlaylists(playlists)))
  )
};
      
export const createPlaylist = playlist => dispatch => {
  return(
    PlaylistAPIUtil.createPlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)))
  )
};

export const deletePlaylist = playlistId => dispatch => (
  PlaylistAPIUtil.deletePlaylist(playlistId)
    .then( () => dispatch(removePlaylist(playlistId)))
)

// need to fix(?) receivePlaylist and removePlaylist regular actions

// export const updatePlaylist = (playlist) => dispatch => {
//   return(
//     PlaylistAPIUtil.updatePlaylist(playlist)
//     .then(playlist => dispatch(receivePlaylist(playlist)))
//   )
// }
