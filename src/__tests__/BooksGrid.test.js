import React from 'react';
import { shallow } from 'enzyme';
import BooksGrid from '../components/BooksGrid';
import Book from '../components/Book';

describe('BooksGrid', () => {
  const props = {
    books: [
      {
        id: '1',
        authors: ['author'],
        title: 'title',
        imageLinks: {
          smallThumbnail: null,
        },
        shelf: 'none',
      },
      {
        id: '1',
        authors: ['author'],
        title: 'title',
        imageLinks: {
          smallThumbnail: null,
        },
        shelf: 'none',
      },
    ],
    onUpdateBook: jest.fn(),
  };

  const componentWrapper = () => shallow(<BooksGrid {...props} />);

  it('renders itstelf', () => {
    const divs = componentWrapper().find('ol');
    expect(divs.length).toBeGreaterThan(0);
  });

  it('render all children', () => {
    const divs = componentWrapper().find('ol');
    const wrappingDiv = divs.first();
    expect(wrappingDiv.children()).toEqual(componentWrapper().children());
  });

  it('renders a book', () => {
    expect(componentWrapper().find(Book).length).toBeGreaterThan(0);
  });
});
