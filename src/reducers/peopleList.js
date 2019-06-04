import {
  ADD_ITEM,
  DELETE_ITEM,
  CHANGE_PROPERTY,
  PEOPLE_RECEIVED,
} from 'const';
import { v4 } from 'node-uuid';


const initialState = {
  people: [],
};

const peopleList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        people: [...state.people,
          {
            ...action.payload, id: v4(),
          },
        ],
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
    case PEOPLE_RECEIVED:
      return {
        ...state,
        people: [
          ...state.people,
          ...action.payload.people,
        ],
      };
    default:
      return state;
  }
};
export default peopleList;
