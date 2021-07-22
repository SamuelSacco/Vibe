import React, { useState, useEffect } from 'react';
import UserListItem from './user_list_item';

function UserShow(props){
  
  const [playlists, updatePlaylists] = useState('')
  
  useEffect(() => {
    updatePlaylists(props.requestPlaylists(props.userId))
  }, [])
  
  return (
    // <h1>Test</h1>
    <ul>
      <h1>Test</h1>
      {
        props.playlists.map( (playlist, idx) => 
          <UserListItem key={idx} widget={playlist.widget} />
        )
      }
        {/* {
          props.playlists.data ?
          props.playlists.data.map((playlist, idx) => {
            return (
              <UserListItem 
              key={idx}
              widget={playlist.widget}
              />
            )
          })
          :
          null
        } */}
      </ul>
    )
}

export default UserShow;