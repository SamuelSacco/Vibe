import React from 'react'

const SavePlaylist = (props) => {
//    const playlistArray = props.playlist.map((song) => {
//         return ({
//             title: song.track.name,
//             artist: song.track.artists[0].name,
//             preview: song.track.preview_url,
//             image: song.track.album.images[0].url
//         })
//     })

    const playlist = {
        userId: props.currentUserId, 
        songs: [],
        widget: `https://open.spotify.com/embed/playlist/${props.widgetId}`
    }

    function handleSubmit() {
      props.createPlaylist(playlist)
      props.ownProps.history.push(`/user/${props.currentUserId}`)
    }

    // console.log("PROPS", props, "PLAYLIST", playlist)
    return (
        <div>
            <button onClick={handleSubmit} className='playlist-func-button'>Save Playlist</button>
        </div>
    )
}

export default SavePlaylist;