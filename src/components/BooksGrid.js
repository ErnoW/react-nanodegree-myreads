import React from 'react'
import Book from './Book'

const BooksGrid = () => (
  <ol className="books-grid">
    <li>
      <Book />
    </li>
    <li>
      <Book />
    </li>
    <li>
      <Book />
    </li>
  </ol>
)

export default BooksGrid;
