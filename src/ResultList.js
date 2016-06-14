import React from 'react';

class ResultList extends React.Component {

  render() {
    const { results, onResultSelected } = this.props;

    return (
      <div>
        {
          results.map((r) => {
            return (<div key={r.id}>
              <a id={r.id} onClick={onResultSelected}>
                {r.name}
              </a>
            </div>);
          })
        }
      </div>
    );
  }
}

ResultList.propTypes = {
  results: React.PropTypes.array,
  onResultSelected: React.PropTypes.func.isRequired
};

export default ResultList;

