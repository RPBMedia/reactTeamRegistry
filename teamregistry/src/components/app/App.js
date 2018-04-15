import React, { Component } from 'react';
import CardList from '../cardList/CardList';
import Header from '../header/Header';
import SearchBox from '../searchBox/SearchBox';
import Scroll from '../scroll/Scroll';

class App extends Component {

  constructor() {
    super();
    this.state = {
      profiles: [],
      searchFilter: '',
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(profiles =>
        this.setState({
          profiles: profiles
        }));
  }

  onSearchChange = (event) => {
    this.setState({
      searchFilter: event.target.value,
    });
  }

  render() {

    const filteredProfiles = this.state.profiles.filter(profiles => {
      return (profiles.name.toLowerCase().includes(this.state.searchFilter.toLowerCase()) ||
              profiles.email.toLowerCase().includes(this.state.searchFilter.toLowerCase()));
    });

    if(this.state.profiles.length === 0) {
      return <h1 className="tc loading-title">Loading profiles...</h1>
    }

    return (
      <div className="tc">
        <Header title='Team Registry'/>
        <SearchBox
          searchChange={this.onSearchChange}
          searchFilter={this.state.searchFilter}
        />
        <Scroll>
          <CardList list={filteredProfiles}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
