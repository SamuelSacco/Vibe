import React from "react";
import SongItem from "./songItem";

const Listbox = props => {

  const clicked = e => {
    e.preventDefault()
  }

  return (
    <div>
      {/* {console.log(props.items)} */}
      <div>
        {
          props.items.map((item, idx) => 
          <SongItem 
            key={idx}
            onClick={clicked}
            id={item.track.id}
            name={item.track.name} 
            preview={item.track.preview_url}
          />)
        }
      </div>
    </div>
  );
};

export default Listbox;