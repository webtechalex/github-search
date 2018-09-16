import React from 'react';
import SearchFormContainer from './SearchFormContainer'
import SearchResultsContainer from './SearchResultsContainer'
import './App.css'


const App = () => {
  return (
    <div className='app-container'>
      <SearchFormContainer />
      <SearchResultsContainer />
    </div>
  );
};

export default App;
