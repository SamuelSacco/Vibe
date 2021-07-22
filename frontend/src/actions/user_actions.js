import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS"
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUser = user => {
  debugger
  return({
    type: RECEIVE_USER,
    user
  })
};

// export const receiveUsers = users => {
//   return({
//     type: RECEIVE_USERS,
//     users
//   })
// };

// something to implement later
export const receiveErrors = errors => {
  return ({
    type: RECEIVE_USER_ERRORS,
    errors
  })
};



// thunk actions
export const requestUser = userId => dispatch => {
  return (
    UserAPIUtil.getUser(userId)
      .then( user => dispatch(receiveUser(user)) )
      .catch( err => dispatch(receiveErrors(err.response.data)) )
  );
};