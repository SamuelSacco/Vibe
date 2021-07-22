import { RECEIVE_VIBE } from "../actions/quiz_actions";

const vibeReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_VIBE:
      return Object.assign({}, oldState, { activity: action.vibe.activity, mood: action.vibe.mood });
    default:
      return oldState;
  }
};

export default vibeReducer;