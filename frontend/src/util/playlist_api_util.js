
// Below is if we don't write individual actions/axios requests for Users and just get user's playlists through looking up playlists  

import axios from 'axios';

export const getPlaylists = () => {
  return axios.get('/api/playlists')
};

export const getUserPlaylists = id => {
  return axios.get(`/api/tweets/user/${id}`)
};
