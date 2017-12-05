import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll().then(books => {
      this.setState({books});
    });
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks();
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
          <SearchBooks 
            onUpdateBook={(book, shelf) => this.updateBook(book, shelf)}
            books={this.state.books} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
