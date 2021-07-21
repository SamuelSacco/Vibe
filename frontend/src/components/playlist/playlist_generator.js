// import logo from './logo.svg';
// import './App.css';
import Dropdown from './dropdown';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Listbox from './listbox';
import { createPlaylist } from '../../actions/playlist_actions';
import SavePlaylist from './save_playlist';

function PlaylistGenerator(props) {
  console.log(props)
  const clientId = '79eb0fab585d4f86bcfba8abde304372'
  const secretId = 'b704db72f82c45cd83aff68ad527d664'
  
  const [token, setToken] = useState('');
  const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []});
  const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistsFromAPI: []})
  const [songs, setSongs] = useState({selectedSong: '', listOfSongsFromAPI: []});
  const [songDetail, setSongDetail] = useState(null);
  
  console.log("token:", token, "genres:", genres, "playlist:", playlist, "songs:", songs)
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
      // console.log(genres.selectedGenre, tokenresponse.data.access_token);
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
        })
      })
    })
  }, [genres.selectedGenre, clientId, secretId])
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
      // console.log(playlistResponse)
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistsFromAPI: playlistResponse.data.playlists.items
      })
    })

    // console.log("val", val)
  }

  const playlistChanged = val => {
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistsFromAPI: playlist.listOfPlaylistsFromAPI
    });

  }
  // console.log("playlist test", playlist.selectedPlaylist);

  const buttonClicked = e => {
    // debugger;
    e.preventDefault();

    axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    })
    .then(songsResponse => {
      // console.log(songsResponse)
      setSongs({
        selectedSong: songs.selectedSong,
        listOfSongsFromAPI: songsResponse.data.items
      })
    });
  }

  const listboxClicked = val => {

    const currentSongs = [...songs.listOfSongsFromAPI];
    // console.log("SONGS", currentSongs)
    // console.log(songs.listOfSongsFromAPI)

    const songInfo = currentSongs.filter(s => s.song.id === val);

    setSongDetail(songInfo[0].track);
  }

  return (
    <div className="App">
      <form onSubmit= {buttonClicked}>
        <div className="container">
          <Dropdown options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} dropDownType="Select a Genre"/>
          <Dropdown options={playlist.listOfPlaylistsFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} dropDownType="Select a Playlist"/>
          <button type="submit">
            Search
          </button>
          <Listbox items={songs.listOfSongsFromAPI} clicked={listboxClicked}/>
        </div>
        {songs.listOfSongsFromAPI.length > 1 ? <SavePlaylist currentUserId={props.currentUserId} playlist={songs.listOfSongsFromAPI} createPlaylist={createPlaylist}/> : null}
        {/* {console.log(songs.listOfSongsFromAPI)} */}
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