import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from 'components/app';
import * as actions from 'actions';
import { createSelector } from 'reselect';

const mapDispatchToProps = (disathch) => {
  const {
    toggleRandomHouse: onToggleRandomHouse,
    submit: onSubmit,
    deleteItem: onDeleteItem,
    changeProperty: onChangeProperty,
    getAllPeople: onGetAllPeople,
  } = bindActionCreators(actions, disathch);
  return {
    onGetAllPeople,
    onToggleRandomHouse,
    formFunctions: {
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
  peopleListState: getPeople(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
