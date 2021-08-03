import axios from 'axios'

const clientId = '79eb0fab585d4f86bcfba8abde304372'
const secretId = 'b704db72f82c45cd83aff68ad527d664'

// return a token promise => 2389750987230958523lkjgsdlkjgds
export const getToken = () => {
    const tokenPromise = axios('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer(clientId + ':' + secretId).toString('base64')),
        },

        data: 'grant_type=client_credentials'
    })

    return tokenPromise
}


export async function getRandomFeaturedPlaylist(){
    const token = await getToken() // gets token

    const tokenPromise = await axios('https://api.spotify.com/v1/browse/featured-playlists?country=US&limit=20', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token.data.access_token
        }
    })

    const playlistArray = tokenPromise.data.playlists.items
    const randomNumber = Math.floor(Math.random() * playlistArray.length)
    return playlistArray[randomNumber]
}

export async function getPlaylistBySearch(keyword){
    const token = await getToken() // gets token

    const tokenPromise = await axios(`https://api.spotify.com/v1/search?q=${keyword}&type=playlist&market=US&limit=10&offset=5`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token.data.access_token
        }
    })

    const playlistArray = tokenPromise.data.playlists.items
    const randomNumber = Math.floor(Math.random() * playlistArray.length)
    return playlistArray[randomNumber]
}


// returns a promise of an array of genre objects (need to isolate id)
export async function getGenres(){
    const token = await getToken()

    const genrePromise = axios(`https://api.spotify.com/v1/browse/categories?locale=en_US`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token.data.access_token
        }
    })

    const genres = await genrePromise
    return genres.data.categories.items
}

// returns an promise of an array of playlists objects (need to isolate name)
export async function getPlaylists(mood){
    const token = await getToken() // gets token
    const genres = await getGenres() // gets a promise array of genre objects
    // debugger
    const playlistName = genres.filter(el => mood.includes(el.name))[0].id 
    // .filter to reduce array to 1 object
    // [0] to get first object in array
    // .id to string interpolate instead of name
    const playlistPromise = axios(`https://api.spotify.com/v1/browse/categories/${playlistName}/playlists?limit=10`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token.data.access_token
        }
    })
    
    const playlists = await playlistPromise
    return playlists.data.playlists.items
}

export async function getRandomPlaylist(mood){
    const playlistArray = await getPlaylists(mood)
    const randomNumber = Math.floor(Math.random() * playlistArray.length)
    return playlistArray[randomNumber].id
}