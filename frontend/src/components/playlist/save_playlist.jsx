import React from 'react'
import {withRouter} from 'react-router-dom';

const SavePlaylist = (props) => {
   const playlistArray = props.playlist.map((song) => {
        return ({
            title: song.track.name,
            artist: song.track.artists[0].name,
            preview: song.track.preview_url,
            image: song.track.album.images[0].url
        })
    })

    const playlist = {
        userId: props.currentUserId, 
        songs: playlistArray,
        widget: `https://open.spotify.com/embed/playlist/${props.selectedPlaylist}`
    }
    // const savePlaylist = () => {
    //     props.createPlaylist(playlist)
    //     props.ownProps.history.push(`/user/${props.currentUserId}`)
    // }
    // console.log(`userId: ${props.currentUserId}, playlist: ${playlistArray}`)


    function handleSubmit() {
      
      props.createPlaylist(playlist)
      props.history.push(`/user/${props.currentUserId}`)
    }

      return (
        <div>
            <button onClick={handleSubmit} className='playlist-func-button'>Save Playlist</button>
        </div>
    )

}

// .then(() => {)

export default withRouter(SavePlaylist);

// import React, { Component } from 'react'

// export default class SavePlaylist extends Component {
//   constructor(props){
//     super(props)

//     this.playlistTest = this.playlistTest.bind(this);

//     this.playlistArray = this.props.playlist.map((song) => {
//       return ({
//           title: song.track.name,
//           artist: song.track.artists[0].name,
//           preview: song.track.preview_url,
//           image: song.track.album.images[0].url
//       })
//    })
   
//     this.state = {
//         playlist: {

//         }
//     }
    
//   }

//   playlistTest(){
//     this.setState({
        
//         playlist: {
//           userId: this.props.currentUserId, 
//           songs: this.playlistArray,
//           widget: `https://open.spotify.com/embed/playlist/${this.props.selectedPlaylist}`
//         }
//     })
//     console.log("props", this.props)
//   }

//   render() {
//     return (
      
//           <div>
//               <button onClick={this.playlistTest}>TEST</button>
//             <button onClick={this.props.createPlaylist(this.playlist)}>Save Playlist</button>
//         </div>
      
//     )
//   }
// }