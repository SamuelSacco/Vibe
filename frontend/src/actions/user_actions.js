import * as UserAPIUtil from '../util/user_api_util';
export const RECEIVE_USERS = "RECEIVE_USERS"
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUser = user => {
  return({
    type: RECEIVE_USER,
    user
  })
};

export const receiveUsers = users => {
  return({
    type: RECEIVE_USERS,
    users
  })
};


export const receiveErrors = errors => {
  return ({
    type: RECEIVE_USER_ERRORS,
    errors
  })
};


export const requestUser = userId => dispatch => {
  return UserAPIUtil.requestUser(userId).then(res => (
    dispatch(receiveUser(res))
  ), err => (
    dispatch(receiveErrors(err.status))
  ))
};


export const requestUsers = () => dispatch => {
  return UserAPIUtil.requestUsers().then(res => (
    dispatch(receiveUsers(res))
  ), err => (
    dispatch(receiveErrors(err.status))
  ))
};