import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './components/cardList/cardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { profiles } from './profiles';

ReactDOM.render(
  <CardList list={profiles}/>
  , document.getElementById('root'));
registerServiceWorker();
