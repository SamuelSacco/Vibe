import React, { useState, useEffect } from 'react';
import SavePlaylist from './save_playlist';
import { getRandomFeaturedPlaylist } from '../../util/spotify-api-util'

function FeaturedPlaylist(props) {

    const [widgetId, setWidgetId] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 5000)
        getRandomFeaturedPlaylist().then(response => {
            setWidgetId(response.id)
            setDescription(response.description)
        })
    }, [])

    return (
        <div className="mood-playlist">
            {
                widgetId && loading === false ?
                    <div className='playlist-wrapper'>
                        <h1 className='playlist-show-header'>{description}</h1>
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
                        <div className='playlist-func-button-wrapper'>
                            <SavePlaylist
                                currentUserId={props.currentUser.id}
                                // playlist={songs.listOfSongsFromAPI} 
                                createPlaylist={props.createPlaylist}
                                widgetId={widgetId}
                                className='playlist-func-button'
                                ownProps={props.ownProps}
                            />
                        </div>
                    </div>
                : 
                    <div className='playlist-loading'>
                        <h1 className='playlist-loading-header'>Fetching your vibe...</h1>
                    </div>
            }
        </div>
    );
}

export default FeaturedPlaylist;