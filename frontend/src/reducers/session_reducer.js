import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

const SessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
      };
    case LOGOUT_CURRENT_USER:
      return {
        isAuthenticated: false,
        user: undefined,
      };
    // case RECEIVE_USER_SIGN_IN:
    //   return {
    //     ...state,
    //     isAuthenticated: !!action.user,
    //     user: action.user,
    //   };
    default:
      return state;
  }
}

export default SessionReducer;