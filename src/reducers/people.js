import { ADD_PERSON, CHANGE_FORM_VALUE } from 'const';

const initialState = {
  addCharacterForm: {
    name: '',
    gender: '',
    culture: '',
    playedBy: '',
  },
  people: [],
};

const peopleList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON: {
      const {
        id,
        name,
        gender,
        culture,
        playedBy,
      } = action.payload;
      return {
        ...state,
        people: [
          ...state.people,
          {
            id,
            name,
            gender,
            culture,
            playedBy,
          },
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
