import { combineReducers } from 'redux';
import showRandomHouse from 'reducers/show-random-house';
import people from 'reducers/people';

export default combineReducers({
  showRandomHouse,
  people,
});
