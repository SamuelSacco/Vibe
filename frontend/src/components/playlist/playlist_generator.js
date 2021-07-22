// import logo from './logo.svg';
// import './App.css';
import Dropdown from './dropdown';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Listbox from './listbox';
import { createPlaylist } from '../../actions/playlist_actions';
import SavePlaylist from './save_playlist';

function PlaylistGenerator(props) {

  const clientId = '79eb0fab585d4f86bcfba8abde304372'
  const secretId = 'b704db72f82c45cd83aff68ad527d664'
  const [token, setToken] = useState('');
  const [genres, setGenres] = useState({ selectedGenre: '', listOfGenresFromAPI: [] });
  const [playlist, setPlaylist] = useState({ selectedPlaylist: '', listOfPlaylistsFromAPI: [] })
  const [songs, setSongs] = useState({ selectedSong: '', listOfSongsFromAPI: [] });
  const [songDetail, setSongDetail] = useState(null);

  useEffect(() => {

    // Api call for retrieving token
    axios('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (new Buffer('79eb0fab585d4f86bcfba8abde304372' + ':' + 'b704db72f82c45cd83aff68ad527d664').toString('base64')),
      },
      data: 'grant_type=client_credentials'
    }).then(tokenresponse => {

      setToken(tokenresponse.data.access_token);

      axios(`https://api.spotify.com/v1/browse/categories?locale=en_US`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + tokenresponse.data.access_token
        }
      }).then(genreResponse => {
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items
            .filter((el) => {
              let filter = 'Workout'
              return filter.includes(el.name)
            })
        })

        let filteredResponse =
          genreResponse.data.categories.items
            .filter((el) => {
              let filter = 'Workout'
              return filter.includes(el.name)
            })[0].id

        axios(`https://api.spotify.com/v1/browse/categories/${filteredResponse}/playlists?limit=10`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + tokenresponse.data.access_token
          }
        }).then(playlistResponse => {

          setPlaylist({
            selectedPlaylist: playlistResponse.data.playlists.items[0].id,
            listOfPlaylistsFromAPI: playlistResponse.data.playlists.items

            // .filter((el) => el.name.includes(props.vibe.score))
            // playlistUrl: playlistResponse.dada.playlists
          })
        })
      })
    })
  }, [])
  const genreChanged = (val) => {

    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI
    })

    axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(playlistResponse => {

      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistsFromAPI: playlistResponse.data.playlists.items

        // .filter((el) => el.name.includes(props.vibe.score))
        // playlistUrl: playlistResponse.dada.playlists
      })
    })
  }

  const playlistChanged = val => {
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistsFromAPI: playlist.listOfPlaylistsFromAPI
    });

  }

  const buttonClicked = e => {

    e.preventDefault();

    axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(songsResponse => {
        setSongs({
          selectedSong: songs.selectedSong,
          listOfSongsFromAPI: songsResponse.data.items
        })
      });
  }

  // const listboxClicked = val => {

  //   const currentSongs = [...songs.listOfSongsFromAPI];

  //   const songInfo = currentSongs.filter(s => s.song.id === val);

  //   setSongDetail(songInfo[0].track);
  // }

  return (
    <div className="mood-playlist">
      <form onSubmit={buttonClicked}>
          {/* <Dropdown options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} dropDownType="Select a Genre" />
          <Dropdown options={playlist.listOfPlaylistsFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} dropDownType="Select a Playlist" /> */}
            {
              playlist.selectedPlaylist ? 
            <div className='playlist-wrapper'>
              <iframe 
                title="playlist-widget" 
                src={`https://open.spotify.com/embed/playlist/${playlist.selectedPlaylist}`} 
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
                playlist={songs.listOfSongsFromAPI} 
                createPlaylist={createPlaylist} 
                selectedPlaylist={playlist.selectedPlaylist}
                className='playlist-func-button'
              />
              </div>
            </div>
            : <div>
              <h1> Fetching your vibe...</h1>
            </div>
            }
          {/* <button type="submit">
            Search
          </button> */}
          {/* <Listbox items={songs.listOfSongsFromAPI} clicked={listboxClicked}/> */}
        {/* {songs.listOfSongsFromAPI.length > 1 ? <SavePlaylist currentUserId={props.currentUser.id} playlist={songs.listOfSongsFromAPI} createPlaylist={createPlaylist} selectedPlaylist={playlist.selectedPlaylist} /> : null} */}
      </form>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default PlaylistGenerator;