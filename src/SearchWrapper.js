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

  handleSearch(searchQuery) {
    this.setState({ searchQuery });
    const results = [];

    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        results.push({
          id: i,
          name: searchQuery + ' ' + i
        });
      }
      this.setState({ results });
    }, 2000);
  }

  handleResultSelect(evt) {
    // ...
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({serverData: 'Server Ready'});
    }, 3000);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    return (
        <div>
          <SearchBox doSearch={this.handleSearch.bind(this)} />
          { this.state.serverData &&
            <h1>{this.state.serverData}</h1>
          }
          { this.state.searchQuery &&
            <h2>{this.state.searchQuery}</h2>
          }
          <ResultsList
            results={this.state.results}
            onResultSelected={this.handleResultSelect.bind(this)}
          />
        </div>
    );
  }
}
