import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './SearchBox';

window.onload = () => {
  const obj = {};

  ReactDOM.render(
    <SearchBox
      requiredString='This is a required prop'
      optionalObject={obj}
    />,
    document.querySelector('#container')
  );
};
