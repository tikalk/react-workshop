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
        <h1>{this.props.requiredString}</h1>
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

SearchBox.propTypes = {
  requiredString: React.PropTypes.string
};

export default SearchBox;
