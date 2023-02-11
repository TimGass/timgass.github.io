import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './style/main.scss';

import Router from './js/router';

const render = Component => {
  ReactDOM.createRoot(document.getElementById('root')).render(
      <Component />);
};

render(Router);