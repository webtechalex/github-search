import React from 'react';

import './SearchResults.css';

const SearchResults = ({searchResults}) => (
  <ul>
    {
      searchResults &&
        searchResults.data.items.map(searchResult =>
          <li key={searchResult.id}><a href={searchResult.html_url}>{searchResult.full_name}</a></li>
        )
    }
  </ul>
);

export default SearchResults;