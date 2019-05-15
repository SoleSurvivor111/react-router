import { connect } from 'react-redux';
import App from 'components/App';
import * as actions from 'actions';

const mapStateToProps = state => ({
  showRamdomHouse: state.showRandomHouse,
});

export default connect(mapStateToProps, actions)(App);
