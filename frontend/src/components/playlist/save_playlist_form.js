// import React, { Component } from 'react'

// export default class SavePlaylistForm extends Component {
//   constructor(props){
//     super(props)

    

//     const playlistArray = this.props.playlist.map((song) => {
//       return ({
//           title: song.track.name,
//           artist: song.track.artists[0].name,
//           preview: song.track.preview_url,
//           image: song.track.album.images[0].url
//       })
//    })
  
//     this.playlist = {
//       userId: this.props.currentUserId, 
//       songs: playlistArray,
//       widget: `https://open.spotify.com/embed/playlist/${props.selectedPlaylist}`
//     }
//   }

//   render() {
//     return (
      
//           <div>
//             <button onClick={this.props.createPlaylist(this.playlist)}>Save Playlist</button>
//         </div>
      
//     )
//   }
// }
