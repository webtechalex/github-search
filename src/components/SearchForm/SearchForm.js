import React, { Component } from 'react';

import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };

    this.handleChangeSearchInput = this.handleChangeSearchInput.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  handleChangeSearchInput(event) {
    this.setState({
      searchInput: event.target.value
    })
  }

  handleSubmitSearch() {
    if (this.state.searchInput) {
      this.props.searchRequested(`https://api.github.com/search/repositories?q=${this.state.searchInput}`);
      this.setState({
        searchInput: ''
      })
    }
  }

  render() {
    return (
      <div className='form-container'>
        <input value={this.state.searchInput} onChange={this.handleChangeSearchInput} placeholder='search Github...' />
        <button onClick={this.handleSubmitSearch}>Search</button>
      </div>
    );
  }
}

export default SearchForm;