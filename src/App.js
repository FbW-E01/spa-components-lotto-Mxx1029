import React from 'react';
import './App.css';
import ShowNumbers from './components/ShowNumbers';

function App() {
  return (
    <div className="App">
      <h1>Lotto 6 / 49</h1>
      <p>Generating lucky numbers</p>
      <ShowNumbers />
    </div>
  );
}


export default App;
