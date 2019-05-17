import { combineReducers } from 'redux';
import showRandomHouse from 'reducers/show-random-house';
import peopleList from 'reducers/peopleList';

export default combineReducers({
  showRandomHouse,
  peopleList,
});
