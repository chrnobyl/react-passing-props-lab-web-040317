import React, {Component} from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor(){
    super()
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  componentWillMount() {
    this.fetchFilters();
  }

  render(){
    return (
      <div>
        <FruitBasket handleFilterChange={this.handleFilterChange} filters={this.state.filters} fruit={this.state.fruit} currentFilter={this.state.currentFilter} />
      </div>
    )
  }
}
// const App = () => <FruitBasket />;

export default App;
