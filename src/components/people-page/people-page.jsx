import React, { Component } from 'react';
import ItemList from 'components/item-list';
import PersonDetails from 'components/item-details';
import ErrorIndicator from 'components/error-indicator';
import ThroneService from 'services/throne-service';
import 'components/people-page/people-page.css';
import ErrorBoundry from 'components/error-boundry';
import Row from 'components/row';
import { Record } from 'components/item-details/item-details';
import { withRouter } from 'react-router-dom';


class PeoplePage extends Component {
  throneService = new ThroneService();

  state = {
    hasError: null,
  }

  onPersonSelected = (itemId) => {
    const { history } = this.props;
    history.push(itemId);
  }

  render() {
    const {
      hasError,
    } = this.state;
    const {
      getPerson,
      getPersonImage,
    } = this.throneService;
    const { match } = this.props;
    if (hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.throneService.getAllPeople}
      >
        {i => `${i.name || i.aliases} (${i.gender})`}
      </ItemList>
    );
    const personDetails = (
      <PersonDetails
        itemId={match.params.id}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record
          label="Gender:"
          field="gender"
        />
        <Record
          label="Culture:"
          field="culture"
        />
        <Record
          label="Played by:"
          field="playedBy"
        />
      </PersonDetails>
    );
    return (
      <ErrorBoundry>
        <h2>People</h2>
        <Row
          left={itemList}
          right={personDetails}
        />
      </ErrorBoundry>
    );
  }
}
export default withRouter(PeoplePage);
