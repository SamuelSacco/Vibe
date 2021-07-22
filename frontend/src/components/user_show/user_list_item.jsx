import React, { useEffect, useState } from 'react'

function UserListItem(props){
    return (
        <div>
            <iframe title="playlist-widget" src={props.widget} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <button onClick={() => props.deletePlaylist(props.playlistId)}>Delete</button>
        </div>
    )
}

export default UserListItem;