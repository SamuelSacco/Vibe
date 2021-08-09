import React, { useState, useEffect } from 'react';
import SavePlaylist from './save_playlist';
import { getMultiplePlaylistsBySearch } from '../../util/spotify-api-util'
import { WidgetItem } from './widget_item';

function SearchItems(props) {

    const [playlistArray, setPlaylistArray] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        getMultiplePlaylistsBySearch(keyword).then(response => {
            setPlaylistArray(response)
        })
    }, [keyword])

    const handleChange = event => {
        setKeyword(event.target.value);
    };

    return (
       <div>
            <div>
                <label htmlFor="">
                    <input
                        type="text"
                        value={keyword}
                        onChange={handleChange}
                        placeholder="Type to search Spotify's playlists!"
                        onFocus={(e) => e.target.placeholder = ""}
                        onBlur={(e) => e.target.placeholder = "Type to search Spotify's playlists!"}
                    />
                    {/* <button>Submit</button> */}
                </label>
            </div>
            <ul className='user-playlists'>
                {
                    playlistArray.map((el) => 
                        <WidgetItem 
                        widgetId= {el.id}
                        />
                    )
                }
            </ul>
       </div>
    );
}

export default SearchItems;