import React from 'react'

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
    console.log(playlist)
    // console.log(`userId: ${props.currentUserId}, playlist: ${playlistArray}`)
    return (
        <div>
            <button onClick={props.createPlaylist(playlist)}>Save Playlist</button>
        </div>
    )
}

export default SavePlaylist;