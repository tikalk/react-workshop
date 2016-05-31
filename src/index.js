import React from 'react';
import ReactDOM from 'react-dom';
import SearchWrapper from './SearchWrapper';

window.onload = () => {

  ReactDOM.render(
    <SearchWrapper />,
    document.querySelector('#container')
  );
};
