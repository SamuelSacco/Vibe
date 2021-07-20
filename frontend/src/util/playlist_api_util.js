// Below is if we don't write individual actions/axios requests for Users and just get user's playlists through looking up playlists  

import axios from 'axios';

export const getPlaylists = () => {
  return axios.get('/api/playlists')
};

export const postPlaylist = (playlist) => {
  return axios.post('/api/playlists', playlist)
};


export const getUserPlaylists = id => {

  return axios.get(`/api/playlists/user/${id}`)
};

// OR

// export const getPlaylist = playlistId => {
//   return axios.get(`/api/playlists/${playlistId}`)
// };

//and then have some sort of association tying the playlist to the user...

