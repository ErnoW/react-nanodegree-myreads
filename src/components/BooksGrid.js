import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksGrid = props => (
  <ol className="books-grid">
    {props.books.map(book => (
      <li key={book.id}>
        <Book book={book} onUpdateBook={props.onUpdateBook} />
      </li>
    ))}
  </ol>
);

BooksGrid.propTypes = {
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

export default BooksGrid;
