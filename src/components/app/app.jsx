import React, { Component } from 'react';
import ThroneService from 'services/throne-service';
import Header from 'components/header';
import RandomHouse from 'components/random-house';
import PeoplePage from 'components/people-page';
import ItemList from 'components/item-list';
import PersonDetails from 'components/person-details';
import 'components/app/app.css';

export default class App extends Component {
  throneService = new ThroneService();

  state = {
    showRandomHouse: true,
  }

  toggleRandomHouse = () => {
    this.setState(state => ({
      showRandomHouse: !state.showRandomHouse,
    }));
  };

  render() {
    const { showRandomHouse } = this.state;
    const randomHouse = showRandomHouse ? <RandomHouse /> : null;
    return (
      <div className="container">
        <Header />
        {randomHouse}
        <button
          type="button"
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomHouse}
        >
          Toggle Random Planet
        </button>
        <PeoplePage />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.throneService.getAllBooks}
            >
              {i => `${i.name || i.aliases[0]} - (${i.numberOfPages} pages, ${i.publisher})`}
            </ItemList>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
