import React, { useState, useEffect } from 'react';
import SavePlaylist from './save_playlist';
import { getRandomPlaylist } from '../../util/spotify-api-util'

function PlaylistGenerator(props) {
  // console.log("PROPS", props.activity)
  const [widgetId, setWidgetId] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {

    setTimeout(() => setLoading(false), 5000)

    getRandomPlaylist(props.activity).then(response => {
      setWidgetId(response)
    })
  }, [])

  return (
    <div className="mood-playlist">
      {
        widgetId && loading === false ? 
        <div className='playlist-wrapper'>
        <h1 className='playlist-show-header'>Your vibe is...</h1>
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
      : <div className='playlist-loading'>
          <h1 className='playlist-loading-header'>Fetching your vibe...</h1>
          <img 
            src='https://media.giphy.com/media/glvyCVWYJ21fq/source.gif'
            className='vibe-gif'
            alt="no_img"
          ></img>
      </div>
      }
    </div>
  );
}

export default PlaylistGenerator;