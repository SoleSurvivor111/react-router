import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  sortableContainer,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Item from 'components/item-list/item';
import 'components/item-list/item-list.css';


const SortableContainer = sortableContainer(({ items }) => (
  <ul className="item-list list-group">
    {items}
  </ul>
));

export default class ItemList extends Component {
  componentDidMount() {
    const { onGetAllPeople, itemList } = this.props;
    if (!itemList.length)onGetAllPeople();
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { itemList, onChangeListOrder } = this.props;
    const newItemList = arrayMove(itemList, oldIndex, newIndex);
    onChangeListOrder(newItemList);
  };

  renderItems(arr) {
    const {
      searchValue,
      onItemSelected,
      checkedValues,
      itemFunctions,
    } = this.props;
    const filteredArr = arr.filter(
      (i) => {
        const values = checkedValues(i);
        return _.some(values, str => str.includes(searchValue.toLowerCase()));
      },
    );
    return filteredArr.map((item, index) => {
      const {
        children,
      } = this.props;
      const { id } = item;
      const lable = children(item);
      return (
        <Item
          key={`item-${id}`}
          id={id}
          lable={lable}
          index={index}
          onItemSelected={onItemSelected}
          {...itemFunctions}
        />
      );
    });
  }

  render() {
    const {
      itemList,
    } = this.props;
    const items = this.renderItems(itemList);
    return (
      <SortableContainer items={items} onSortEnd={this.onSortEnd} useDragHandle />
    );
  }
}
ItemList.propTypes = {
  itemList: PropTypes.array.isRequired,
  itemFunctions: PropTypes.object.isRequired,
  searchValue: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  onGetAllPeople: PropTypes.func.isRequired,
  checkedValues: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
  onChangeListOrder: PropTypes.func.isRequired,
};
