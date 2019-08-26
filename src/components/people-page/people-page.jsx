import React, { Component } from 'react';
import ItemList from 'components/item-list';
import PersonDetails from 'components/item-details';
import ErrorIndicator from 'components/error-indicator';
import ThroneService from 'services/throne-service';
import 'components/people-page/people-page.css';
import ErrorBoundry from 'components/error-boundry';
import Row from 'components/row';

export default class PeoplePage extends Component {
  throneService = new ThroneService();

  state = {
    selectedPerson: null,
  }

  onPersonSelected = (id) => {
    console.log({id});
    this.setState({
      selectedPerson: id,
    });
  }

  render() {
    const { selectedPerson, hasError } = this.state;
    if (hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.throneService.getAllPeople}
        getPersonImage={this.throneService.getPersonImage}
      />
    );
    const personDetails = (
      <PersonDetails
        itemId={selectedPerson}
        getData={this.throneService.getPerson}
        getImageUrl={this.throneService.getPersonImage}
      />
    );
    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
