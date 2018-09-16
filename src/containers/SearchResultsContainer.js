import { connect } from 'react-redux';

import SearchResults from '../components/SearchResults/SearchResults'

const mapStateToProps = ({searchResults}) => ({
  searchResults
})

export default connect(mapStateToProps)(SearchResults)