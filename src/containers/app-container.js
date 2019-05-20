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
    changeProperty: onChangeProperty,
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
    recordFunctions: {
      onChangeProperty,
    },
    itemDetailsdFunctions: {
      onChangeProperty,
    },
  };
};
const mapStateToProps = (state) => {
  const {
    gender,
    name,
    culture,
    playedBy,
    characterPicture,
  } = state.peopleList.addCharacterForm;
  return {
    showRamdomHouse: state.showRandomHouse,
    stateOfForm: {
      gender,
      name,
      culture,
      playedBy,
      characterPicture,
    },
    peopleListState: state.peopleList.people,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
