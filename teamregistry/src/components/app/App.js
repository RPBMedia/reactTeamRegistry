import React, { Component } from 'react';
import CardList from '../cardList/CardList';
import Header from '../header/Header';
import SearchBox from '../searchBox/SearchBox';
import { profiles } from '../../profiles';

class App extends Component {

  constructor() {
    super();
    this.state = {
      profiles: profiles,
      searchFilter: '',
    }
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({
      searchFilter: event.target.value,
    });
  }

  render() {

    const filteredProfiles = this.state.profiles.filter(profiles => {
      return (profiles.name.first.toLowerCase().includes(this.state.searchFilter.toLowerCase()) ||
              profiles.name.last.toLowerCase().includes(this.state.searchFilter.toLowerCase()));
    });

    return (
      <div className="tc">
        <Header title='Team Registry'/>
        <SearchBox
          searchChange={this.onSearchChange}
          searchFilter={this.state.searchFilter}
        />
        <CardList list={filteredProfiles}/>
      </div>
    );
  }
}

export default App;
