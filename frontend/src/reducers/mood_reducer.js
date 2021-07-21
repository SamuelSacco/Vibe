import { RECEIVE_MOOD } from "../actions/quiz_actions";

const moodReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_MOOD:
      return Object.assign({}, oldState, { score: action.mood });
    default:
      return oldState;
  }
};

export default moodReducer;

