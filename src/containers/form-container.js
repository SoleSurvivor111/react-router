import { connect } from 'react-redux';
import {
  reduxForm,
  getFormValues,
  isValid,
} from 'redux-form';
import {
  InitialValues,
} from 'const';
import CharacterAddForm from 'components/character-add-form/character-add-form';

export default reduxForm({
  form: 'characterAddForm',
  initialValues: InitialValues,
})(connect(state => ({
  values: getFormValues('characterAddForm')(state),
  valid: isValid('characterAddForm')(state),
}))(CharacterAddForm));
