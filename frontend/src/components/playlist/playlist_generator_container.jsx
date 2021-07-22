import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';
import PlaylistGenerator from './playlist_generator';

const mSTP = (state, ownProps) => {
    return ({
        currentUser: state.session.user,
        ownProps: ownProps
        //MOOD: state.entities.mood
    })
}

const mDTP = (dispatch) => {
    return ({
        createPlaylist: playlist => dispatch(createPlaylist(playlist))
    })
}

export default connect(mSTP, mDTP)(PlaylistGenerator)