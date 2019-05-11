import React, { Component } from 'react';
import ItemList from 'components/item-list';
import ErrorIndicator from 'components/error-indicator';
import ThroneService from 'services/throne-service';
import 'components/people-page/people-page.css';
import ErrorBoundry from 'components/error-boundry';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';


class PeoplePage extends Component {
  throneService = new ThroneService();

  state = {
    hasError: null,
  }

  onPersonSelected = (itemId) => {
    const { history } = this.props;
    history.push(`/people/${itemId}`);
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
        <h2>People</h2>
        <ItemList
          onItemSelected={this.onPersonSelected}
          getData={this.throneService.getAllPeople}
        >
          {i => `${i.name || i.aliases} (${i.gender})`}
        </ItemList>
      </ErrorBoundry>
    );
  }
}
export default withRouter(PeoplePage);

PeoplePage.propTypes = {
  history: PropTypes.func.isRequired,
};
