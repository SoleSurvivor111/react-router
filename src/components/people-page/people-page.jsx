import React, { Component } from 'react';
import ItemList from 'components/item-list';
import PersonDetails from 'components/item-details';
import ErrorIndicator from 'components/error-indicator';
import ThroneService from 'services/throne-service';
import 'components/people-page/people-page.css';
import ErrorBoundry from 'components/error-boundry';
import Row from 'components/row';
import { Record } from 'components/item-details/item-details';


export default class PeoplePage extends Component {
  throneService = new ThroneService();

  state = {
    selectedPerson: null,
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  }

  render() {
    const {
      selectedPerson,
      hasError,
    } = this.state;
    const {
      getPerson,
      getPersonImage,
    } = this.throneService;
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
        itemId={selectedPerson}
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
        <Row
          left={itemList}
          right={personDetails}
        />
      </ErrorBoundry>
    );
  }
}
