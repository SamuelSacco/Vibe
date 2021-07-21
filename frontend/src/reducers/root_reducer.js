import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';

const RootReducer = combineReducers({
  entities,
  errors,
  session: SessionReducer
});

export default RootReducer;