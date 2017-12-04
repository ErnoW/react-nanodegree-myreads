import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll().then(books => {
      this.setState({books})
      console.log(this.state); //TEST: show initial loaded books
    });
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then(books => {
      let newBooks = [...this.state.books];
      newBooks[newBooks.findIndex(oldBook => oldBook.id === book.id)].shelf = shelf;
      this.setState({books: newBooks});
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks books={this.state.books}/>
        ) : (
            <ListBooks
              onClickSearch={() => this.setState({ showSearchPage: true })}
              onUpdateBook={(book, shelf) => this.updateBook(book, shelf)}
              books={this.state.books}/>
        )}
      </div>
    )
  }
}

export default BooksApp
