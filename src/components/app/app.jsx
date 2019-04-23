import React, { Component } from 'react';
import ThroneService from 'services/throne-service';
import Header from 'components/header';
import RandomHouse from 'components/random-house';
import PeoplePage from 'components/people-page';
import ItemDetails from 'components/item-details';
import Row from 'components/row';
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
    const { getPerson, getBook } = this.throneService;
    const personDetails = (
      <ItemDetails
        itemId={5}
        getData={getPerson}
        getImageUrl={this.throneService.getPersonImage}
      />
    );
    const bookDetails = (
      <ItemDetails
        itemId={5}
        getData={getPerson}
        getImageUrl={this.throneService.getPersonImage}
      />
    );
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
        <Row
          left={personDetails}
          right={bookDetails}
        />
      </div>
    );
  }
}
