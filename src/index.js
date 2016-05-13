import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './SearchBox';

window.onload = () => {
  ReactDOM.render(
    <SearchBox />,
    document.querySelector('#container')
  );
};
