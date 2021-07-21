import { connect } from 'react-redux';
import UserShow from './user_show';

const mSTP = (state, ownProps) => {
  // debugger  
  return ({
        userId: ownProps.match.params.userId,
    })
}

const mDTP = (dispatch) => {
    // return ({
    //     createPlaylist: playlist => dispatch(createPlaylist(playlist))
    // })
}

export default connect(mSTP, null)(UserShow)