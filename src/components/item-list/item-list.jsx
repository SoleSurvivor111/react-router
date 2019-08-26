import React from 'react';


import 'components/item-list/item-list.css';

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const lable = renderLabel(item);
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {lable}
      </li>
    );
  });
  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

export default ItemList;
