import React from 'react';
import BookShelf from './BookShelf'

const ListBooks = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf 
          category="Currently Reading"
          books={props.books.filter(book => book.shelf === 'currentlyReading')}/>
        <BookShelf
          category="Want to Read"
          books={props.books.filter(book => book.shelf === 'wantToRead')}/>
        <BookShelf
          category="Read"
          books={props.books.filter(book => book.shelf === 'read')}/>
      </div>
    </div>
    <div className="open-search">
      <a onClick={props.onClickSearch}>Add a book</a>
    </div>
  </div>
)

export default ListBooks;
