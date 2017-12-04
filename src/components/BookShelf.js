import React from 'react'
import BooksGrid from './BooksGrid'

const BookShelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.category}</h2>
    <div className="bookshelf-books">
      <BooksGrid books={props.books}/>
    </div>
  </div>
)

export default BookShelf;
