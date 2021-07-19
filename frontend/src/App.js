import logo from './logo.svg';
import './App.css';
import Dropdown from './dropdown';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const clientId = '79eb0fab585d4f86bcfba8abde304372'
  const secretId = 'b704db72f82c45cd83aff68ad527d664'

  const [token, setToken] = useState('');
  const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []});
  const [playlist, setPlaylist] = useState({selectPlaylist: '', listOfPlaylistsFromAPI: []})

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
      console.log(genres.selectedGenre, tokenresponse.data.access_token);
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
      setPlaylist({
        selectPlaylist: playlist.selectPlaylist,
        listOfPlaylistsFromAPI: playlistResponse.data.playlists.items
      })
    })

    console.log(val)
  }

  const playlistChanged = val => {
    setPlaylist({
      selectPlaylist: val,
      listOfPlaylistsFromAPI: playlist.listOfPlaylistsFromAPI
    });
  }

  return (
    <div className="App">
      <form onSubmit= {() => {}}>
        <div className="container">
          <Dropdown options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged}/>
          <Dropdown options= {playlist.listOfPlaylistsFromAPI} selectedValue={playlist.selectedPlaylist} />
          <button type="submit">
            Search
          </button>

        </div>

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

export default App;
