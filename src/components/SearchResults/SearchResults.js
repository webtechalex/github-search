import React from 'react';

const SearchResults = ({searchResults}) => (
  <ul>
    {
      searchResults &&
        searchResults.data.items.map(searchResult =>
          <li><a href={searchResult.html_url}>{searchResult.name}</a></li>
        )
    }
  </ul>
);

export default SearchResults;