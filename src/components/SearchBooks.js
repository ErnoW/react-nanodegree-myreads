import React from 'react';
import BooksGrid from './BooksGrid'
import SearchBooksBar from './SearchBooksBar'

const SearchBooks = () => (
  <div className="search-books">
    <SearchBooksBar/>
    <div className="search-books-results">
      <BooksGrid />
    </div>
  </div>
)

export default SearchBooks;
