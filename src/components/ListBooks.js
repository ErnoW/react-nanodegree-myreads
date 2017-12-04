import React from 'react';
import BookShelf from './BookShelf'

const ListBooks = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf category="Currently Reading" />
        <BookShelf category="Want to Read" />
        <BookShelf category="Read" />
      </div>
    </div>
    <div className="open-search">
      <a onClick={props.onClickSearch}>Add a book</a>
    </div>
  </div>
)

export default ListBooks;
