import React from 'react';

import './error-indicator.css';
import icon from './white-walker-children.jpg';

const ErrorIndicator = () => (
  <div className="error-indicator">
    <img src={icon} alt="error icon" />
    <span className="boom">BOOM!</span>
    <span>
        something has gone terribly wrong
    </span>
    <span>
        (but we already sent our programmers to fix it)
    </span>
  </div>
);

export default ErrorIndicator;
