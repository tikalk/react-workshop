import React from 'react';
import SearchBox from './SearchBox';
import ResultsList from './ResultList';

export default class SearchWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      results: []
    };
  }

  handleSearch() {
    setTimeout(() => {
      const results = [];

      for (let i = 0; i < 10; i++) {
        results.push({ id: i, name: 'name ' + i });
      }

      this.setState({ results });
    }, 1000);
  }

  handleResultSelect(evt) {
    evt.preventDefault();
    alert(evt.target.id);
  }

  render() {
    return (
        <div>
          <SearchBox doSearch={this.handleSearch.bind(this)} />
          <ResultsList results={this.state.results} onResultSelected={this.handleResultSelect.bind(this)} />
        </div>
    );
  }
}
