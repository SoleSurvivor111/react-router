import {
  TOGGLE_RANDOM_HOUSE,
  ADD_ITEM,
  DELETE_ITEM,
  CHANGE_PROPERTY,
  GET_ALL_PEOPLE,
} from 'const';

export const toggleRandomHouse = () => ({
  type: TOGGLE_RANDOM_HOUSE,
});

export const submit = () => ({
  type: ADD_ITEM,
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
