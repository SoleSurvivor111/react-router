import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { imagesPerson } from 'images';
import Header from 'components/header';
import RandomHouse from 'components/random-house';
import PeoplePage from 'components/people-page';
import PeopleDetails from 'components/people-details';
import 'components/app/app.css';

const App = ({
  showRamdomHouse,
  stateOfForm,
  formFunctions,
  peopleListState,
  itemFunctions,
  recordFunctions,
  onToggleRandomHouse,
  itemDetailsdFunctions,
}) => (
  <Router>
    <div className="container">
      <Header />
      {showRamdomHouse && <RandomHouse />}
      <button
        type="button"
        className="toggle-planet btn btn-warning btn-lg"
        onClick={onToggleRandomHouse}
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
          render={({ location }) => (
            <PeoplePage
              location={location}
              stateOfForm={stateOfForm}
              formFunctions={formFunctions}
              peopleListState={peopleListState}
              itemFunctions={itemFunctions}
            />
          )}
          exact
        />
        <Route
          path="/people/:id?"
          render={({ match }) => {
            const { id } = match.params;
            return (
              <PeopleDetails
                itemId={id}
                getPerson={peopleListState[id - 1]}
                getPersonImage={key => imagesPerson[key - 1]}
                recordFunctions={recordFunctions}
                itemDetailsdFunctions={itemDetailsdFunctions}
              />
            );
          }}
        />
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </div>
  </Router>
);
export default App;

App.propTypes = {
  showRamdomHouse: PropTypes.bool.isRequired,
  stateOfForm: PropTypes.object.isRequired,
  formFunctions: PropTypes.object.isRequired,
  peopleListState: PropTypes.array.isRequired,
  itemFunctions: PropTypes.object.isRequired,
  recordFunctions: PropTypes.object.isRequired,
  itemDetailsdFunctions: PropTypes.object.isRequired,
  onToggleRandomHouse: PropTypes.func.isRequired,
};
