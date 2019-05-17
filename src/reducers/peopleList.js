import { ADD_PERSON, CHANGE_FORM_VALUE } from 'const';
import some from 'lodash/some';
import { v4 } from 'node-uuid';

const initialState = {
  addCharacterForm: {
    name: '',
    gender: 'Male',
    culture: '',
    playedBy: '',
  },
  people: [],
};

const peopleList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON: {
      if (some(state.addCharacterForm, i => i === '')) {
        return state;
      }
      return {
        ...state,
        people: [...state.people,
          { ...state.addCharacterForm, id: v4() },
        ],
      };
    }
    case CHANGE_FORM_VALUE:
      return {
        ...state,
        addCharacterForm: {
          ...state.addCharacterForm,
          [action.payload.fieldName]: action.payload.value,
        },
      };
    default:
      return state;
  }
};
export default peopleList;
