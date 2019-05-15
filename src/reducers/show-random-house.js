import { TOGGLE_RANDOM_HOUSE } from 'const';

const showRandomHouse = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_RANDOM_HOUSE:
      return !state;
    default:
      return state;
  }
};
export default showRandomHouse;
