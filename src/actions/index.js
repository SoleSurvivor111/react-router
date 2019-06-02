import {
  TOGGLE_RANDOM_HOUSE,
  ADD_ITEM,
  CHANGE_FORM_VALUE,
  DELETE_ITEM,
  CHANGE_PROPERTY,
  GET_ALL_PEOPLE,
} from 'const';

export const toggleRandomHouse = () => ({
  type: TOGGLE_RANDOM_HOUSE,
});

export const changeFormValue = e => ({
  type: CHANGE_FORM_VALUE,
  payload: {
    fieldName: e.target.name,
    value: e.target.value,
  },
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
