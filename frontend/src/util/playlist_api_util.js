import axios from 'axios';

export const fetchPlaylists = (userId) => (
  axios.get(`/api/playlists/${userId}`)
)

export const createPlaylist = (playlist) => {
  return axios.post(`/api/playlists`, playlist)
}

export const getPlaylists = () => {
  return axios.get(`/api/playlists`)
};

export const postPlaylist = (playlist) => {
  return axios.post('/api/playlists', playlist)
};


export const getUserPlaylists = id => {
  return axios.get(`/api/playlists/user/${id}`)
};