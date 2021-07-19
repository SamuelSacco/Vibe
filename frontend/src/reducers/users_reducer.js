import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';


const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USERS:
      return action.users
    case RECEIVE_USER:
      return Object.assign({}, oldState, { [action.user.id]: action.user });
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return oldState;
  }
};

export default usersReducer;

