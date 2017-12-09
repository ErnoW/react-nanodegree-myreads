import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from '../BooksAPI';
import BooksGrid from './BooksGrid';

class SearchBooks extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      searchResults: [],
    };
  }

  componentWillMount() {
    this.setSearchResults = debounce(150, this.setSearchResults);
  }

  updateQuery(query) {
    this.setState({ query });
    if (query === '') {
      return this.setState({ searchResults: [] });
    }
    return this.setSearchResults(escapeRegExp(query));
  }

  setSearchResults(query) {
    BooksAPI.search(query, 20).then((searchResults) => {
      if (searchResults.error) {
        return this.setState({ searchResults: [] });
      }
      this.setShelve(searchResults);
      return this.setState({ searchResults });
    });
  }

  setShelve(books) {
    books.map((searchedBook) => {
      const match = this.props.books.find(book => book.id === searchedBook.id);
      const shelvedbook = searchedBook;
      shelvedbook.shelf = match ? match.shelf : 'none';
      return shelvedbook;
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
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
          <BooksGrid books={this.state.searchResults} onUpdateBook={this.props.onUpdateBook} />
        </div>
      </div>
    );
  }
}

SearchBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    shelf: PropTypes.string,
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string,
    }),
  })).isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default SearchBooks;
