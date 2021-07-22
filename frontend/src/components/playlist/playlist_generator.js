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
          .filter((el) => {
            let moodAll = ['Pop', 'At Home', 'In the car','Workout', 'Mood', 'Chill', 'Party'];
            let moodHappy = ['At Home', 'Mood', 'In the car', 'Workout'];
            let moodSad = ['Chill', 'Workout', 'Party', 'Pop'];
            
          })
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
      console.log(playlistResponse)
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistsFromAPI: playlistResponse.data.playlists.items
        // .filter((el) => {
        //   let happyMood = 'Mood';// score 1-3
        //   let happyAtHome = 'At Home';
        //   let happyInTheCar = 'In the car';
        //   let happyWorkout = 'Workout';
         
        //   return happyMood.includes(el.name)
        // })
      })
    })
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
  console.log(props.ownProps)
  const listboxClicked = val => {

    const currentSongs = [...songs.listOfSongsFromAPI];
    // console.log("SONGS", currentSongs)
    // console.log(songs.listOfSongsFromAPI)

    const songInfo = currentSongs.filter(s => s.song.id === val);

    setSongDetail(songInfo[0].track);
  }

  return (
    <div>
      <form onSubmit= {buttonClicked}>
        <div className="container">
          <Dropdown options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} dropDownType="Select a Genre"/>
          <Dropdown options={playlist.listOfPlaylistsFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} dropDownType="Select a Playlist"/>
          <body>
            {
              playlist.selectedPlaylist ? 
              <div>
                <iframe title="playlist-widget" src={`https://open.spotify.com/embed/playlist/${playlist.selectedPlaylist}`} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <SavePlaylist currentUserId={props.currentUser.id} playlist={songs.listOfSongsFromAPI} createPlaylist={createPlaylist} ownProps={props.ownProps} selectedPlaylist={playlist.selectedPlaylist} />
              </div>
            : null
            }
          </body>
          {/* <button type="submit">
            Search
          </button> */}
          {/* <Listbox items={songs.listOfSongsFromAPI} clicked={listboxClicked}/> */}
        </div>
        {/* {songs.listOfSongsFromAPI.length > 1 ? <SavePlaylist currentUserId={props.currentUser.id} playlist={songs.listOfSongsFromAPI} createPlaylist={createPlaylist} selectedPlaylist={playlist.selectedPlaylist} /> : null} */}
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