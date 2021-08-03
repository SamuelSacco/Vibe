import React, { useState, useEffect } from 'react';
import SavePlaylist from './save_playlist';
import { getPlaylistBySearch } from '../../util/spotify-api-util'

function SearchPlaylists(props) {

    const [widgetId, setWidgetId] = useState(''); // this.widgetId = '', this.setState({widgetId: whatever})
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 5000)
        getPlaylistBySearch(keyword).then(response => {
            setWidgetId(response.id)
        })
    }, [keyword])

    const handleChange = event => {
        setKeyword(event.target.value);
    };

    return (
        <div className="mood-playlist">
            {
                // widgetId && loading === false ?
                    <div className='playlist-wrapper'>
                        {/* <h1 className='playlist-show-header'>Your vibe is...</h1> */}
                        <div>
                            <input 
                            type="text" 
                            value={keyword}
                            onChange={handleChange}
                            />
                        </div>
                        <br />
                        <iframe
                            title="playlist-widget"
                            src={`https://open.spotify.com/embed/playlist/${widgetId}`}
                            width="300"
                            height="380"
                            frameBorder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                            className='playlist-show-widget'
                        >
                        </iframe>
                        <div className='playlist-func-button-wrapper'>
                            {/* <SavePlaylist
                                currentUserId={props.currentUser.id}
                                // playlist={songs.listOfSongsFromAPI} 
                                createPlaylist={props.createPlaylist}
                                widgetId={widgetId}
                                className='playlist-func-button'
                                ownProps={props.ownProps}
                            /> */}
                        </div>
                    </div>
            }
        </div>
    );
}

export default SearchPlaylists;