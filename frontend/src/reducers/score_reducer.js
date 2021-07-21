import { RECEIVE_VIBE } from "../actions/quiz_actions";

const scoreReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_VIBE:
      return Object.assign({}, oldState, { score: action.score, mood: action.mood });
    default:
      return oldState;
  }
};

export default scoreReducer;

