import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThroneService from 'services/throne-service';
import 'components/item-details/item-details.css';
import Spinner from 'components/spinner';
import Content from 'components/item-details/Content';

export const Record = ({ item, field, label }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>
);

Record.propTypes = {
  item: PropTypes.object.isRequired,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default class PersonDetails extends Component {
  throneService = new ThroneService();

  state = {
    item: null,
    loading: true,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    const { itemId } = this.props;
    if (itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const {
      itemId,
      getData,
      getImageUrl,
    } = this.props;

    if (!itemId) {
      return;
    }

    this.setState({
      loading: true,
    });

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item),
          loading: false,
        });
      });
  }

  render() {
    const { itemId, children } = this.props;
    const {
      item,
      loading,
      image,
    } = this.state;
    const content = !loading ? (
      <Content
        {...item}
        itemId={itemId}
        imageUrl={image}
        childrenArr={children}
      />
    )
      : null;
    const spinner = loading ? <Spinner /> : null;
    return (
      <div className="person-details card">
        {content}
        {spinner}
      </div>
    );
  }
}

PersonDetails.propTypes = {
  itemId: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  getImageUrl: PropTypes.func.isRequired,
  children: PropTypes.node,
};

PersonDetails.defaultProps = {
  children: null,
};
