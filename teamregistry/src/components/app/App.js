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
    const { profiles, searchFilter } = this.state;

    const filteredProfiles = profiles.filter(profiles => {
      return (profiles.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
              profiles.email.toLowerCase().includes(searchFilter.toLowerCase()));
    });

    if(profiles.length === 0) {
      return <h1 className="tc loading-title">Loading profiles...</h1>
    }

    return (
      <div className="tc">
        <Header title='Team Registry'/>
        <SearchBox
          searchChange={this.onSearchChange}
          searchFilter={searchFilter}
        />
        <Scroll>
          <CardList list={filteredProfiles}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
