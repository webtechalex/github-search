import React from 'react';
import Loader from '../Loader/Loader';

import './SearchResults.css';

const SearchResults = ({searchLoader, searchResults}) => (
  <div>
    {searchLoader && <Loader />}
    <ul>
      {
        searchResults &&
          searchResults.data.items.map(searchResult =>
            <li key={searchResult.id}><a href={searchResult.html_url}>{searchResult.full_name}</a></li>
          )
      }
    </ul>
  </div>
);

export default SearchResults;