import React from 'react';
import { Link } from 'react-router-dom';

import 'components/header/header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          Game of thrones
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people/">People</Link>
        </li>
        <li>
          <Link to="/houses/">Houses</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
