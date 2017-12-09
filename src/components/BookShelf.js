import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';

const BookShelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.category}</h2>
    <div className="bookshelf-books">
      <BooksGrid books={props.books} onUpdateBook={props.onUpdateBook} />
    </div>
  </div>
);

BookShelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    shelf: PropTypes.string,
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string,
    }),
  })).isRequired,
  category: PropTypes.string.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default BookShelf;
