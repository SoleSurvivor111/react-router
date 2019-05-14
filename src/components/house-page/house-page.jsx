import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import ItemList from 'components/item-list';
import ErrorIndicator from 'components/error-indicator';
import ThroneService from 'services/throne-service';
import ErrorBoundry from 'components/error-boundry';
import 'components/people-page/people-page.css';


class HousePage extends Component {
  throneService = new ThroneService();

  state = {
    hasError: null,
  }

  onHouseSelected = (itemId) => {
    const { history } = this.props;
    history.push(`/houses/${itemId}`);
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
        <h2>Houses</h2>
        <ItemList
          onItemSelected={this.onHouseSelected}
          getData={this.throneService.getAllHouses}
          searchValue={this.getParams().query}
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
  location: ReactRouterPropTypes.location.isRequired,
};
