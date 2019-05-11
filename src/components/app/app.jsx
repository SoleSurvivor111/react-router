import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThroneService from 'services/throne-service';
import Header from 'components/header';
import RandomHouse from 'components/random-house';
import PeoplePage from 'components/people-page';
import PeopleDetails from 'components/people-details';
import HouseDetails from 'components/house-details';
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
    const {
      getPerson,
      getPersonImage,
      getHouse,
      getHouseImage,
    } = this.throneService;
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
          <Switch>
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
              path="/people/"
              component={PeoplePage}
              exact
            />
            <Route
              path="/people/:id?"
              render={({ match }) => {
                const { id } = match.params;
                return (
                  <PeopleDetails
                    itemId={id}
                    getPerson={getPerson}
                    getPersonImage={getPersonImage}
                  />
                );
              }}
            />
            <Route
              path="/houses/"
              component={HousePage}
              exact
            />
            <Route
              path="/houses/:id?"
              render={({ match }) => {
                const { id } = match.params;
                return (
                  <HouseDetails
                    itemId={id}
                    getHouse={getHouse}
                    getHouseImage={getHouseImage}
                  />
                );
              }}
            />
            <Route render={() => <h2>Page not found</h2>} />
          </Switch>
        </div>
      </Router>
    );
  }
}
