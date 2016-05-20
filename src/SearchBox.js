import React from 'react';

class SearchBox extends React.Component {

  handleChange(event) {
    this.setState({searchQuery: event.target.value});
  }

  handleClick() {
    alert(this.state.searchQuery);
  }

  render() {
    const state = this.state || {};

    return (
      <div>
        <input
          value={state.searchQuery}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleClick.bind(this)}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchBox;
