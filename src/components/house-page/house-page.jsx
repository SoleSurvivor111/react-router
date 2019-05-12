import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import ItemList from 'components/item-list';
import ErrorIndicator from 'components/error-indicator';
import ThroneService from 'services/throne-service';
import 'components/people-page/people-page.css';
import ErrorBoundry from 'components/error-boundry';
import { withRouter } from 'react-router-dom';

class HousePage extends Component {
  throneService = new ThroneService();

  state = {
    hasError: null,
  }

  onHouseSelected = (itemId) => {
    const { history } = this.props;
    history.push(`/houses/${itemId}`);
  }

  render() {
    const {
      hasError,
    } = this.state;
    if (hasError) {
      return <ErrorIndicator />;
    }
    return (
      <ErrorBoundry>
        <h2>Houses</h2>
        <ItemList
          onItemSelected={this.onHouseSelected}
          getData={this.throneService.getAllHouses}
        >
          {i => `${i.name} (${i.region})`}
        </ItemList>
      </ErrorBoundry>
    );
  }
}
export default withRouter(HousePage);

HousePage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
