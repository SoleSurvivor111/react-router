import React from 'react';
import Header from 'components/header';
import RandomHouse from 'components/random-house';
import ItemList from 'components/item-list';
import PersonDetails from 'components/person-details';
import 'components/app/app.css';

const App = () => (
  <div className="container">
    <Header />
    <RandomHouse />

    <div className="row mb2">
      <div className="col-md-6">
        <ItemList />
      </div>
      <div className="col-md-6">
        <PersonDetails />
      </div>
    </div>
  </div>
);

export default App;
