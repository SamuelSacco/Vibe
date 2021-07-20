import React from 'react';

const Dropdown = props => {

    const dropDownChanged = e => {
        props.changed(e.currentTarget.value)
    }

    return (
        <div>
            <select value={props.selectedValue} onChange={dropDownChanged} placeholder="choose a song">
                <option selected>{props.dropDownType}</option>
                {props.options.map((item, idx) => <option key={idx} value={item.id}>{item.name}</option>)}
            </select>
        </div>
    )
}

export default Dropdown;