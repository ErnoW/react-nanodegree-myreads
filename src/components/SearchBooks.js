import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import BooksGrid from './BooksGrid'

class SearchBooks extends Component {
  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({ query });
    if (query === '') {
      return this.setState({ searchResults: [] });
    }
    this.getSearchResults(escapeRegExp(query));
  }

  getSearchResults = (query) => {
    BooksAPI.search(query, 20).then(searchResults => {
      if (searchResults.error) {
        return this.setState({ searchResults: [] })
      }
      this.setShelve(searchResults);
      this.setState({ searchResults });   
    });
  }

  setShelve = (books) => {
    books.map((searchedBook) => {
      let match = this.props.books.find((shelvedBook) => (
        shelvedBook.id === searchedBook.id
      ));
      return searchedBook.shelf = match ? match.shelf : 'none'; 
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={this.state.searchResults} onUpdateBook={this.props.onUpdateBook}/>
        </div>
      </div>
    )
  }
}

export default SearchBooks;
