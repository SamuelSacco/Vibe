import { connect } from 'react-redux';
import { requestPlaylists } from '../../actions/playlist_actions';
import UserShow from './user_show';

const mSTP = (state, ownProps) => {
    return ({
        userId: ownProps.match.params.userId,
        playlists: state.entities.playlists
    })
}

const mDTP = (dispatch) => {
    return ({
        requestPlaylists: userId => dispatch(requestPlaylists(userId))
    })
}

export default connect(mSTP, mDTP)(UserShow)