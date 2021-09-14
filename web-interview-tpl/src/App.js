import React from 'react';
import SearchHeader from './components/SearchHeader';
import SearchBox from './components/SearchBox';
import SearchList from './components/SearchList';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <SearchHeader/>
      <SearchBox/>
      <SearchList/>
    </div>
  );
}

export default App;
