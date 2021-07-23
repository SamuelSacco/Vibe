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

// returns a promise of genre items?
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

export async function getPlaylists(mood){
    const token = await getToken()
    const genres = await getGenres()
    const playlistName =  genres.filter(el => mood.includes(el.name))[0].id
    // debugger
    const playlistPromise = axios(`https://api.spotify.com/v1/browse/categories/${playlistName}/playlists?limit=10`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token.data.access_token
        }
    })
    
    return playlistPromise
}

export async function getRandomPlaylist(mood){
    const playlistPromise = await getPlaylists("Chill")
    // debugger
    const playlistArray = playlistPromise.data.playlists.items
    const randomNumber = Math.floor(Math.random() * playlistArray.length)
    // console.log(randomNumber)
    return playlistPromise.data.playlists.items[randomNumber].id

    // const playlistArray = await getPlaylists(mood)
    // return playlistArray.data.playlists.items[0].id
}