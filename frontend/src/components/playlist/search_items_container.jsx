import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';
import SearchItems from './search_items';

const mSTP = (state, ownProps) => {
    return ({
        userId: ownProps.match.params.userId,
        playlists: Object.values(state.entities.playlists),
        user: state.entities.users
    })
}

const mDTP = (dispatch) => {
    return ({
        createPlaylist: userId => dispatch(createPlaylist(userId)),
    })
}

export default connect(mSTP, mDTP)(SearchItems)