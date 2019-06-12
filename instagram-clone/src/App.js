import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import uuid from 'uuid';
import SearchBar from './components/SearchBar/SearchBar.js';

function App() {
  return (
    <div className="App">
      
      <SearchBar />

      {dummyData.map(obj => {
        return <PostContainer key={uuid()} data={data} />
      })}
      
    </div>
  );
}

export default App;
