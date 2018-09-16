import React, { Component } from 'react';

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
    this.props.searchRequested(`https://api.github.com/search/repositories?q=${this.state.searchInput}`);
  }

  render() {
    return (
      <div>
        <input value={this.state.searchInput} onChange={this.handleChangeSearchInput} />
        <button onClick={this.handleSubmitSearch}>Search</button>
      </div>
    );
  }
}

export default SearchForm;