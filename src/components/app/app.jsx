import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      <Router>
        <div className="container">
          <Header />
          {randomHouse}
          <button
            type="button"
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomHouse}
          >
          Toggle Random House
          </button>
          <Route
            path="/"
            render={() => (
              <img
                alt="Main houses"
                className="main-page"
                src="https://images.alphacoders.com/307/thumb-1920-307471.jpg"
              />
            )}
            exact
          />
          <Route
            path="/people/:id?"
            component={PeoplePage}
            exact
          />
          <Route
            path="/houses/:id?"
            component={HousePage}
          />
        </div>
      </Router>
    );
  }
}
