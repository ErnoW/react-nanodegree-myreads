import React from 'react'
import { shallow } from 'enzyme'
import Book from '../components/Book'

describe("Book", () => {
  let props = {
    book: {
      id: '1',
      authors: ['author1', 'author2'],
      title: 'title',
      imageLinks: {
        smallThumbnail: null
      },
      shelf: 'none'
    },
    onUpdateBook: jest.fn()
  }

  const componentWrapper = () => shallow(<Book {...props} />);

  it('renders itstelf', () => {
    const divs = componentWrapper().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it('has an cover', () => {
    const bookCover = componentWrapper().find('.book-cover');
    expect(bookCover).toHaveLength(1);
  });

  it('has an author', () => {
    const bookAuthors = componentWrapper().find('.book-authors');
    expect(bookAuthors.length).toBeGreaterThan(0);
  });
})
