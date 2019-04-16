import React, { Component } from 'react';
import ThroneService from 'services/throne-service';
import Spinner from 'components/spinner';

import 'components/item-list/item-list.css';

export default class ItemList extends Component {
  trhroneService = new ThroneService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.trhroneService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList,
        });
      });
  }

  renderItems(arr) {
    return arr.map(({ id, name, aliases }) => (
      <li
        className="list-group-item"
        key={id}
        onClick={() => this.props.onItemSelected(id)}
      >
        {name || aliases[0]}
      </li>
    ));
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
