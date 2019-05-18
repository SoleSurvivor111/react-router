import {
  ADD_PERSON,
  CHANGE_FORM_VALUE,
  DELETE_ITEM,
} from 'const';
import some from 'lodash/some';
import { v4 } from 'node-uuid';

const addFormInitialState = {
  name: '',
  gender: 'Male',
  culture: '',
  playedBy: '',
};

const initialState = {
  addCharacterForm: addFormInitialState,
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
        addCharacterForm: addFormInitialState,
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
    case DELETE_ITEM:
      return {
        ...state,
        people: state.people.filter(i => i.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export default peopleList;
