import React from 'react'

const SongItem = (props) => {
    const audio = new Audio (props.preview)

    const start = () => {
        audio.play()
    }
    
    return (
        <button onClick={start}>{props.name}</button>
    )
}

export default SongItem;