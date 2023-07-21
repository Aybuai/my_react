import React from 'react';
import './App.css';
import robots from './mockData/robots.json';
import Robots from './components/Robots';

function App() {
  return (
    <ul>
      { robots.map( r => <Robots id={r.id} name={r.name} email={r.email} /> ) }
    </ul>
  );
}

export default App;
