import React from 'react'
import { shallow } from 'enzyme'
import ListBooks from '../components/ListBooks'

describe("ListBooks", () => {
  let props = {
    books: [
      {
        id: '1',
        authors: ['author'],
        title: 'title',
        imageLinks: {
          smallThumbnail: null
        },
        shelf: 'none'
      },
      {
        id: '1',
        authors: ['author'],
        title: 'title',
        imageLinks: {
          smallThumbnail: null
        },
        shelf: 'none'
      }
    ],
    onClickSearch: jest.fn(),
    onUpdateBook: jest.fn()
  }

  const componentWrapper = () => shallow(<ListBooks {...props} />);

  it('renders itstelf', () => {
    const divs = componentWrapper().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it('render all children', () => {
    const divs = componentWrapper().find("div");
    const wrappingDiv = divs.first();
    expect(wrappingDiv.children()).toEqual(componentWrapper().children());
  });
})
