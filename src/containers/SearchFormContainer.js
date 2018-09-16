import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchRequested } from '../redux/actions';
import SearchForm from '../components/SearchForm/SearchForm';

const mapDispatchToProps = (dispatch) => bindActionCreators({ searchRequested }, dispatch);

export default connect(undefined, mapDispatchToProps)(SearchForm);