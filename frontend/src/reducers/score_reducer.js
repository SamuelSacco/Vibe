import { RECEIVE_MOOD_SCORE } from "../actions/quiz_actions";

const scoreReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_MOOD_SCORE:
      return Object.assign({}, oldState, { score: action.score });
    default:
      return oldState;
  }
};

export default scoreReducer;

