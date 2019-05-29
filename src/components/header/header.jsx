import React from 'react';
import Link from 'react-router-dom'

import 'components/header/header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Game of thrones
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Houses</a>
        </li>
        <li>
          <a href="#">Books</a>
        </li>

      </ul>
    </div>
  );
};

export default Header;
