// import * as PlaylistAPIUtil from '../util/playlist_api_util';

// export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS"

// export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST"

// export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST"

// export const receivePlaylists = (playlists) => {
//   return({
//     type: RECEIVE_PLAYLISTS, //
//     playlists
//   })
// }

// export const receivePlaylist = (playlist) => {
//   return({
//     type: RECEIVE_PLAYLIST, //
//     playlist
//   })
// }

// export const removePlaylist = (playlistId) => {
//   return({
//     type: REMOVE_PLAYLIST, 
//     playlistId
//   })
// }

// export const requestPlaylists = () => dispatch => {
//   return(
//     PlaylistAPIUtil.fetchPlaylists()
//     .then(playlists => dispatch(receivePlaylists(playlists)))
//   )
// }
  
// export const requestPlaylist = (playlistId) => dispatch => {
//   return(
//     PlaylistAPIUtil.fetchPlaylist(playlistId)
//     .then(playlist => dispatch(receivePlaylist(playlist)))
//   )
// }
      
// export const createPlaylist = playlist => dispatch => {
//   return(
//     PlaylistAPIUtil.createPlaylist(playlist)
//     .then(playlist => dispatch(receivePlaylist(playlist)))
//   )
// }

// export const updatePlaylist = (playlist) => dispatch => {
//   return(
//     PlaylistAPIUtil.updatePlaylist(playlist)
//     .then(playlist => dispatch(receivePlaylist(playlist)))
//   )
// }

// export const deletePlaylist = (playlistId) => dispatch => {
//   return(
//     PlaylistAPIUtil.deletePlaylist(playlistId)
//     .then(() => dispatch(removePlaylist(playlistId)))
//   )
// }


//  Below will need to be used if we don't have a separate User lookup functionality.  Obv replace with Playlists...

// import { getTweets, getUserTweets, writeTweet } from '../util/tweet_api_util';

// export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
// export const RECEIVE_USER_TWEETS = "RECEIVE_USER_TWEETS";
// export const RECEIVE_NEW_TWEET = "RECEIVE_NEW_TWEET";

// export const receiveTweets = tweets => ({
//   type: RECEIVE_TWEETS,
//   tweets
// });

// export const receiveUserTweets = tweets => ({
//   type: RECEIVE_USER_TWEETS,
//   tweets
// });

// export const receiveNewTweet = tweet => ({
//   type: RECEIVE_NEW_TWEET,
//   tweet
// })

// export const fetchTweets = () => dispatch => (
//   getTweets()
//     .then(tweets => dispatch(receiveTweets(tweets)))
//     .catch(err => console.log(err))
// );

// export const fetchUserTweets = id => dispatch => (
//   getUserTweets(id)
//     .then(tweets => dispatch(receiveUserTweets(tweets)))
//     .catch(err => console.log(err))
// );

// export const composeTweet = data => dispatch => (
//   writeTweet(data)
//     .then(tweet => dispatch(receiveNewTweet(tweet)))
//     .catch(err => console.log(err))
// );