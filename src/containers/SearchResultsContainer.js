import { connect } from 'react-redux';

import SearchResults from '../components/SearchResults/SearchResults'

const mapStateToProps = ({searchLoader, searchResults}) => ({
  searchLoader,
  searchResults
})

export default connect(mapStateToProps)(SearchResults)