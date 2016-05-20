import React from 'react';

class SearchBox extends React.Component {

  handleClick(name, event) {
    console.log(this);
    console.log(this.refs.searchInput.value);
    console.log(this.refs._mySecondInput.value);
  }

  render() {
    return (
      <div>
        <input ref='searchInput' />
        <input ref={(c) => this._mySecondInput = c} />
        <button onClick={this.handleClick.bind(this)}>Search</button>
      </div>
    );
  }
}

export default SearchBox;
