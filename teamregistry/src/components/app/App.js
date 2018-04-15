import React from 'react';
import CardList from '../cardList/CardList';
import Header from '../header/Header';
import SearchBox from '../searchBox/SearchBox';
import { profiles } from '../../profiles';

const App = () => {
  return (
    <div>
      <Header title='Team Registry'/>
      <SearchBox />
      <CardList list={profiles}/>
    </div>
  );
}

export default App;
