import React, { useState } from 'react';


const Dropdown = props => {

    const [selectedValue, setSelectedValue] = useState('')

    
    return (
        <form onSubmit={() => {}}>
            <div>
                <select value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
                    {props.options.map((item, idx) => <option key={idx} value={item.value}>{item.name}</option>)}
                </select>
                <p>{selectedValue}</p>
                <button type="submit">Search</button>
            </div>
        </form>
    )
}

export default Dropdown;