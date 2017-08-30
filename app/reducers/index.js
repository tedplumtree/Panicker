import { combineReducers } from 'redux';
import sensor from './sensor';

const combined = combineReducers({
  sensor,
});

export default combined;
