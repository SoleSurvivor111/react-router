import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
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


  handlePersonSelected = (itemId) => {
    const { history } = this.props;
    history.push(`/people/${itemId}`);
  }

  setParams = ({ query = '' }) => {
    const searchParams = new URLSearchParams();
    searchParams.set('search', query);
    return searchParams.toString();
  }

  getParams = () => {
    const { location } = this.props;
    const searchParams = new URLSearchParams(location.search);
    return {
      query: searchParams.get('search') || '',
    };
  }

  handleUpdateURL = (e) => {
    const { history } = this.props;
    const url = this.setParams({ query: e.target.value });
    history.push(`?${url}`);
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
        <h3>Search</h3>
        <input
          type="text"
          value={this.getParams().query}
          className="form-control"
          onChange={this.handleUpdateURL}
        />
        <h2>People</h2>
        <ItemList
          onItemSelected={this.handlePersonSelected}
          getData={this.throneService.getAllPeople}
          searchValue={this.getParams().query}
        >
          {i => `${i.aliases} (${i.gender})`}
        </ItemList>
      </ErrorBoundry>
    );
  }
}
export default withRouter(PeoplePage);

PeoplePage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};
