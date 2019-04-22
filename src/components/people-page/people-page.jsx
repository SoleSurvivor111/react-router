import React, { Component } from 'react';
import ItemList from 'components/item-list';
import PersonDetails from 'components/person-details';
import ErrorIndicator from 'components/error-indicator';
import ThroneService from 'services/throne-service';
import 'components/people-page/people-page.css';
import ErrorBoundry from 'components/error-boundry';

const Row = ({ left, right }) => (
  <div className="row mb2">
    <div className="col-md-6">
      {left}
    </div>
    <div className="col-md-6">
      {right}
    </div>
  </div>
);

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
    const { selectedPerson, hasError } = this.state;
    if (hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.throneService.getAllPeople}
      >
        {i => `${i.name || i.aliases[0]} (${i.gender})`}
      </ItemList>
    );
    const personDetails = (<PersonDetails personId={selectedPerson} />);
    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
