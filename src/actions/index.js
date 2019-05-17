import {
  TOGGLE_RANDOM_HOUSE,
  ADD_PERSON,
  CHANGE_FORM_VALUE,
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
  type: ADD_PERSON,
});
