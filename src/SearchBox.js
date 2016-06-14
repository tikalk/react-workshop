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

  handleDoSeach() {
    const { doSearch } = this.props;
    const { searchQuery } = this.state;
    
    doSearch(searchQuery);
  }

  render() {
    const { searchQuery } = this.state;

    return (
      <div>
          <div>
            <input
              value={searchQuery}
              onChange={this.handleChange.bind(this)}
            />
            <button onClick={this.handleDoSeach.bind(this)}>
              Search
            </button>
          </div>
      </div>

    );
  }
}

SearchBox.propTypes = {
  doSearch: React.PropTypes.func.isRequired
};

export default SearchBox;
