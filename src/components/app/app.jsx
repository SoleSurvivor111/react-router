import React, { Component } from 'react';
import Header from 'components/header';
import RandomHouse from 'components/random-house';
import ItemList from 'components/item-list';
import PersonDetails from 'components/person-details';
import 'components/app/app.css';

export default class App extends Component {
  state ={
    showRandomHouse: true,
    selectedPerson: null,
  }

  toggleRandomHouse = () => {
    this.setState(state => ({
      showRandomHouse: !state.showRandomHouse,
    }));
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  }

  render() {
    const { showRandomHouse, selectedPerson } = this.state;
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
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
