import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './components/Count.js'


function App({
  store
}) {
  return (
    <div className="App">
      <Count store={store} />
    </div>
  );
}

export default App;
