import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import CharacterAddForm from 'components/character-add-form/character-add-form';
import ItemList from 'components/item-list';
import ErrorIndicator from 'components/error-indicator';
import ErrorBoundry from 'components/error-boundry';
import 'components/people-page/people-page.css';


class PeoplePage extends Component {
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

  getInitialValues = {
    name: '',
    gender: '',
    culture: '',
    playedBy: '',
    characterPicture: '',
  };

  render() {
    const {
      hasError,
    } = this.state;
    const {
      peopleListState,
      itemFunctions,
      itemListFunctions,
      formFunctions,
    } = this.props;
    if (hasError) {
      return <ErrorIndicator />;
    }
    return (
      <ErrorBoundry>
        <CharacterAddForm
          {...formFunctions}
        />
        <h2>People</h2>
        <ItemList
          onItemSelected={this.handlePersonSelected}
          itemList={peopleListState}
          {...itemListFunctions}
          searchValue={this.getParams().query}
          checkedValues={i => [
            i.name.value.toLowerCase(), i.gender.value.toLowerCase(),
          ]}
          itemFunctions={itemFunctions}
        >
          {i => `${i.name.value} (${i.gender.value})`}
        </ItemList>
        <h3>Search</h3>
        <input
          type="text"
          value={this.getParams().query}
          className="form-control"
          onChange={this.handleUpdateURL}
        />
      </ErrorBoundry>
    );
  }
}
export default withRouter(PeoplePage);

PeoplePage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  itemListFunctions: PropTypes.object.isRequired,
  formFunctions: PropTypes.object.isRequired,
  peopleListState: PropTypes.array.isRequired,
  itemFunctions: PropTypes.object.isRequired,
};
