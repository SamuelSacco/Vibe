import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tracks = () => {

    // Set up states for retrieving access token and top tracks
    const [token, setToken] = useState('');
    const [tracks, setTracks] = useState([]);

    useEffect(() => {

        // Api call for retrieving token
        axios('https://accounts.spotify.com/api/token', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + (new Buffer('79eb0fab585d4f86bcfba8abde304372' + ':' + 'b704db72f82c45cd83aff68ad527d664').toString('base64')),
            },
            data: 'grant_type=client_credentials'
        }).then(tokenresponse => {
            console.log("hello",tokenresponse.data.access_token);
            setToken(tokenresponse.data.access_token);
        })
    }, [])

    return (
        <div>
          <h1>Hello</h1>
        </div>
    )
}


export default Tracks;