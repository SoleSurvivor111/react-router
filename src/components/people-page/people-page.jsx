import React, { Component } from 'react';
import ItemList from 'components/item-list';
import PersonDetails from 'components/person-details';
import ErrorIndicator from 'components/error-indicator';
import ThroneService from 'services/throne-service';
import 'components/people-page/people-page.css';

export default class PeoplePage extends Component {
  throneService = new ThroneService();
  state = {
    selectedPerson: null,
    hasError: false,
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.throneService.getAllPeople}
            renderItem={item => item.name || item.aliases[0]}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
