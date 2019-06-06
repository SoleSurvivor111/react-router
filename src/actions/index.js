import {
  TOGGLE_RANDOM_HOUSE,
  ADD_ITEM,
  DELETE_ITEM,
  CHANGE_PROPERTY,
  GET_ALL_PEOPLE,
  CHANGE_LIST_ORDER,
} from 'const';

export const toggleRandomHouse = () => ({
  type: TOGGLE_RANDOM_HOUSE,
});

export const submit = values => ({
  type: ADD_ITEM,
  payload: {
    name: { value: values.name },
    gender: { value: values.gender },
    culture: { value: values.culture },
    playedBy: { value: values.playedBy },
    characterPicture: { value: values.characterPicture },
  },
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: { id },
});

export const changeProperty = (e, fieldName, id) => ({
  type: CHANGE_PROPERTY,
  payload: {
    value: e.target.value,
    fieldName,
    id,
  },
});

export const getAllPeople = () => ({
  type: GET_ALL_PEOPLE,
});

export const changeListOrder = newItemList => ({
  type: CHANGE_LIST_ORDER,
  payload: { newItemList },
});
