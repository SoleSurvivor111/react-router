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

const mapStateToProps = state => ({
  values: getFormValues('characterAddForm')(state),
  isValid: isValid('characterAddForm')(state),
});

export default reduxForm({
  form: 'characterAddForm',
  initialValues: InitialValues,
})(connect(mapStateToProps)(CharacterAddForm));
