import React, { Component } from 'react';

// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: []
//     };
//   }

const FilteredFruitList = ({fruit, filter}) => {
  const list = !filter ? fruit : fruit.filter(i => i.fruit_type === filter);
    return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  )
  }

  FilteredFruitList.defaultProps = {
    fruit: [],
    filter: null
  };




  // componentWillMount() {
  //   fetch('/api/fruit')
  //     .then(response => response.json())
  //     .then(items => this.setState({ items }));
  // }



export default FilteredFruitList;
