import React from 'react';

class SearchBox extends React.Component {

  handleClick(name, event) {
    console.log(this);
    console.log(event.target);
    console.log(name);
  }

  render() {
    return (
      <div>
        <input />
        <button onClick={this.handleClick.bind(this, 'button1')}>Search</button>
      </div>
    );
  }
}

export default SearchBox;
