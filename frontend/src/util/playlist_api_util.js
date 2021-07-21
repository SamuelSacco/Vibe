import axios from 'axios';

export const fetchPlaylists = (userId) => (
  axios.get(`/api/playlists/${userId}`)
)

export const createPlaylist = (playlist) => (
  axios.post(`/api/playlists`, playlist)
);

export const deletePlaylist = playlistId => (
  axios.delete(`/api/playlists/${playlistId}`)
);