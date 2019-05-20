import {
  ADD_ITEM,
  CHANGE_FORM_VALUE,
  DELETE_ITEM,
  CHANGE_PROPERTY,
} from 'const';
import some from 'lodash/some';
import { v4 } from 'node-uuid';

const addFormInitialState = {
  name: { value: '', error: '' },
  gender: { value: 'Male', error: '' },
  culture: { value: '', error: '' },
  playedBy: { value: '', error: '' },
  characterPicture: { value: '', error: '' },
};

const initialState = {
  addCharacterForm: addFormInitialState,
  people: [],
};

const peopleList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      if (some(state.addCharacterForm, i => i.value === '')) {
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
          [action.payload.fieldName]: {
            ...state.addCharacterForm[action.payload.fieldName],
            value: action.payload.value,
          },
        },
      };
    case DELETE_ITEM:
      return {
        ...state,
        people: state.people.filter(i => i.id !== action.payload.id),
      };
    case CHANGE_PROPERTY:
      return {
        ...state,
        people: state.people.map((i) => {
          if (i.id === action.payload.id) {
            return {
              ...i,
              [action.payload.fieldName]: {
                ...[action.payload.fieldName],
                value: action.payload.value,
              },
            };
          }
          return i;
        }),
      };
    default:
      return state;
  }
};
export default peopleList;
