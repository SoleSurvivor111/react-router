import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import queryString from 'query-string';
import ThroneService from 'services/throne-service';
import ItemList from 'components/item-list';
import ErrorIndicator from 'components/error-indicator';
import ErrorBoundry from 'components/error-boundry';
import 'components/people-page/people-page.css';


class PeoplePage extends Component {
  throneService = new ThroneService();

  state = {
    hasError: null,
  }

  componentDidMount() {
    const { location } = this.props;
    const values = queryString.parse(location.search);
    values.sorton = 'asdasd';
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
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};
