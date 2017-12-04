import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'

class BooksApp extends Component {
  state = {
    books: [],
    query: ''
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
        <Route exact path="/" render={() => (
          <ListBooks
            onClickSearch={() => this.setState({ showSearchPage: true })}
            onUpdateBook={(book, shelf) => this.updateBook(book, shelf)}
            books={this.state.books} />
        )}/>
        <Route exact path="/search" render={() => (
          <SearchBooks books={this.state.books} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
