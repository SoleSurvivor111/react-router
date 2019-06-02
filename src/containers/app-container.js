import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from 'components/app';
import * as actions from 'actions';
import { createSelector } from 'reselect';

const mapDispatchToProps = (disathch) => {
  const {
    toggleRandomHouse: onToggleRandomHouse,
    changeFormValue: onChangeFormValue,
    submit: onSubmit,
    deleteItem: onDeleteItem,
    changeProperty: onChangeProperty,
    getAllPeople: onGetAllPeople,
  } = bindActionCreators(actions, disathch);
  return {
    onGetAllPeople,
    onToggleRandomHouse,
    formFunctions: {
      onChangeFormValue,
      onSubmit,
    },
    itemFunctions: {
      onDeleteItem,
    },
    recordFunctions: {
      onChangeProperty,
    },
    itemDetailsdFunctions: {
      onChangeProperty,
    },
    itemListFunctions: {
      onGetAllPeople,
    },
  };
};
const getStateOfForm = createSelector(
  state => state.peopleList.addCharacterForm,
  addCharacterForm => addCharacterForm,
);
const getStateOfRandomHouse = createSelector(
  state => state.showRandomHouse,
  showRandomHouse => showRandomHouse,
);
const getPeople = createSelector(
  state => state.peopleList.people,
  people => people,
);
const mapStateToProps = state => ({
  showRandomHouse: getStateOfRandomHouse(state),
  stateOfForm: getStateOfForm(state),
  peopleListState: getPeople(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
