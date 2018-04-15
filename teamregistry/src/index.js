import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProfileCard from './components/profileCard/profileCard';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { profiles } from './profiles';

ReactDOM.render(
  <div>
    <ProfileCard
      id={profiles[0].id}
      firstName={profiles[0].name.first}
      lastName={profiles[0].name.last}
      email={profiles[0].email}
      phone={profiles[0].phone}
      company={profiles[0].company}
    />
  </div>
  , document.getElementById('root'));
registerServiceWorker();
