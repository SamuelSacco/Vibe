import React, { useState, useEffect } from 'react';
import UserListItem from './user_list_item';

function UserShow(props){
  
  const [playlists, updatePlaylists] = useState('')
  
  useEffect(() => {
    updatePlaylists(props.requestPlaylists(props.userId))
  }, [])
  
  return (
    <>
      <h1 className='user-show-header'>My Vibes</h1>
      <ul className='user-playlists'>
        {
          props.playlists.map( (playlist, idx) => 
            <UserListItem 
              key={idx} 
              widget={playlist.widget} 
              deletePlaylist={props.deletePlaylist}
              playlistId={playlist._id}
              />
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
    </>
    )
}

export default UserShow;