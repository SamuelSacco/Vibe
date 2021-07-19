import * as PlaylistAPIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS"
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYISTS"
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST"


export const receivePlaylists = (playlists) => {
  return({
    type: RECEIVE_PLAYLISTS, //
    playlists
  })
}

export const receivePlaylists = (playlist) => {
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

export const requestPlaylists = () => dispatch => {
  return(
    PlaylistAPIUtil.fetchPlaylists()
    .then(playlists => dispatch(receivePlaylists(playlists)))
  )
}
  
export const requestPlaylist = (playlistId) => dispatch => {
  return(
    PlaylistAPIUtil.fetchPlaylist(playlistId)
    .then(playlist => dispatch(receivePlaylist(playlist)))
  )
}
      
export const createPlaylist = playlist => dispatch => {
  return(
    PlaylistAPIUtil.createPlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)))
  )
}

export const updateplaylist = (playlist) => dispatch => {
  return(
    PlaylistAPIUtil.updatePlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)))
  )
}

export const deleteplaylist = (playlistId) => dispatch => {
  return(
    PlaylistAPIUtil.deletePlaylist(playlistId)
    .then(() => dispatch(removePlaylist(playlistId)))
  )
}
