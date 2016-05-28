import React from 'react';
import ResultList from './ResultList';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      results: []
    };
  }

  handleChange(event) {
    this.setState({searchQuery: event.target.value});
  }

  handleClick() {
    setTimeout(() => {
      const results = [];

      for (let i = 0; i < 10; i++) {
        results.push({ id: i, name: 'name ' + i });
      }

      this.setState({ results });
    }, 1000);
  }

  render() {
    const { searchQuery, results } = this.state;

    return (
      <div>
          <div>
            <h1>{this.props.requiredString}</h1>
            <input
              value={searchQuery}
              onChange={this.handleChange.bind(this)}
            />
            <button onClick={this.handleClick.bind(this)}>
              Search
            </button>
          </div>
          <ResultList results={results}/>
      </div>

    );
  }
}

SearchBox.propTypes = {
  requiredString: React.PropTypes.string
};

export default SearchBox;
