import React, { useState, useEffect } from 'react'
import { getRandomPlaylist } from './spotify-api-util'

export const Test = () => {
    const [widgetId, setWidgetId] = useState('')

    useEffect(() => {
        getRandomPlaylist("Workout").then(response => {
            console.log(response); 
            setWidgetId(response)
        })
    }, [])

    return (
        <div>
            {
                widgetId ?
                <iframe
                    title="playlist-widget"
                    src={`https://open.spotify.com/embed/playlist/${widgetId}`}
                    width="300"
                    height="380"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    className='playlist-show-widget'
                ></iframe>
                :
                <h1>isLoading</h1>
            }
        </div>
    )
}