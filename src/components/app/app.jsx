import React, { Component } from 'react';
import ThroneService from 'services/throne-service';
import Header from 'components/header';
import RandomHouse from 'components/random-house';
import PeoplePage from 'components/people-page';
import HousePage from 'components/house-page';
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
        <HousePage />
      </div>
    );
  }
}
