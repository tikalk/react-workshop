import React from 'react';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
  }

  handleChange(event) {
    this.setState({searchQuery: event.target.value});
  }

  render() {
    const { searchQuery } = this.state;
    const { doSearch } = this.props;

    return (
      <div>
          <div>
            <h1>{this.props.requiredString}</h1>
            <input
              value={searchQuery}
              onChange={this.handleChange.bind(this)}
            />
            <button onClick={doSearch}>
              Search
            </button>
          </div>
      </div>

    );
  }
}

SearchBox.propTypes = {
  requiredString: React.PropTypes.string,
  doSearch: React.PropTypes.func.isRequired
};

export default SearchBox;
