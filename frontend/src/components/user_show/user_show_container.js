import { connect } from 'react-redux';
import { requestPlaylists, deletePlaylist } from '../../actions/playlist_actions';
import UserShow from './user_show';

const mSTP = (state, ownProps) => {
    // debugger
    return ({
        userId: ownProps.match.params.userId,
        playlists: Object.values(state.entities.playlists),
    })
}

const mDTP = (dispatch) => {
    return ({
        requestPlaylists: userId => dispatch(requestPlaylists(userId)),
        deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId))
    })
}

export default connect(mSTP, mDTP)(UserShow)