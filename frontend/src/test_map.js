import React from 'react'

const TestMap = (props) => {
    console.log(props.playlist)
    
   const newArray = props.playlist.map((song, idx) => {
        return ({
            title: song.track.name,
            artist: song.track.artists[0].name,
            preview: song.track.preview_url,
            image: song.track.album.images[0].url
        })
    })
    
    console.log("test", newArray)

    return (
        <div>
            <button>Save Playlist</button>
        </div>
    )
}


export default TestMap;