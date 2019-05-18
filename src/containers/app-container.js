import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from 'components/app';
import * as actions from 'actions';

const mapDispatchToProps = (disathch) => {
  const {
    toggleRandomHouse: onToggleRandomHouse,
    changeFormValue: onChangeFormValue,
    submit: onSubmit,
    deleteItem: onDeleteItem,
  } = bindActionCreators(actions, disathch);
  return {
    onToggleRandomHouse,
    formFunctions: {
      onChangeFormValue,
      onSubmit,
    },
    itemFunctions: {
      onDeleteItem,
    },
  };
};
const mapStateToProps = (state) => {
  const {
    gender,
    name,
    culture,
    playedBy,
  } = state.peopleList.addCharacterForm;
  return {
    showRamdomHouse: state.showRandomHouse,
    stateOfForm: {
      genderValue: gender,
      nameValue: name,
      cultureValue: culture,
      playedByValue: playedBy,
    },
    peopleListState: state.peopleList.people,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
