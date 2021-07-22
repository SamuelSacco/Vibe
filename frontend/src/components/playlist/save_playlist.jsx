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
    const savePlaylist = () => {
        props.createPlaylist(playlist)
        props.ownProps.history.push(`/user/${props.currentUserId}`)
    }
    // console.log(`userId: ${props.currentUserId}, playlist: ${playlistArray}`)
    return (
        <div>
            <button onClick={() => savePlaylist(playlist)}>Save Playlist</button>
        </div>
    )
}

// .then(() => {)

export default SavePlaylist;