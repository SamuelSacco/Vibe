import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('state');
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const RootReducer = combineReducers({
  entities,
  errors,
  session: SessionReducer
});

export default RootReducer;