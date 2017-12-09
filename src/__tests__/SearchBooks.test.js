import React from 'react';
import { shallow } from 'enzyme';
import SearchBooks from '../components/SearchBooks';

describe('SearchBooks', () => {
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

  const componentWrapper = () => shallow(<SearchBooks {...props} />);

  it('renders itstelf', () => {
    const divs = componentWrapper().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
