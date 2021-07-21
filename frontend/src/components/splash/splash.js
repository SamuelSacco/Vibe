import React from 'react'
import { connect } from 'mongodb'
import { Link } from 'react-router-dom'
import { login } from '../../actions/session_actions'

class Splash extends React.Component {
    render() {
        return(
            <div className='splash'>
                <h2 className='logo'>
                    (( vibe ))
                </h2>
                <br />
                <Link to="/login">Log in</Link>
            </div>
        )
    }
}

export default Splash