// Below is if we don't write individual actions/axios requests for Users and just get user's playlists through looking up playlists  

import axios from 'axios';

// export const createPlaylist = (playlist) => {
//   return axios.post(`/api/playlists`)
// }

export const getPlaylists = () => {
  return axios.get(`/api/playlists`)
};

export const postPlaylist = (playlist) => {
  return axios.post('/api/playlists', playlist)
};


export const getUserPlaylists = id => {

  return axios.get(`/api/playlists/user/${id}`)
};

