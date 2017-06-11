import React, { Component } from 'react';

// class Filter extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: []
//     };
//   }

const Filter = ({filters, handleChange}) => (

    // Filter.defaultProps = { filters: props.filters }
    <select onChange={handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
);

Filter.defaultProps = {
  filters: [],
  handleChange: function() {}
};

  // componentWillMount() {
  //   this.fetchFilters();
  // }

  // fetchFilters = () => {
  //   fetch('/api/fruit_types')
  //     .then(response => response.json())
  //     .then(filters => this.setState({ filters }));
  // }



export default Filter;
