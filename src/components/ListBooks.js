import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const ListBooks = props => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf
          category="Currently Reading"
          books={props.books.filter(book => book.shelf === 'currentlyReading')}
          onUpdateBook={props.onUpdateBook}
        />
        <BookShelf
          category="Want to Read"
          books={props.books.filter(book => book.shelf === 'wantToRead')}
          onUpdateBook={props.onUpdateBook}
        />
        <BookShelf
          category="Read"
          books={props.books.filter(book => book.shelf === 'read')}
          onUpdateBook={props.onUpdateBook}
        />
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

ListBooks.propTypes = {
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

export default ListBooks;
