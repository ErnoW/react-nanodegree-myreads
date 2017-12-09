import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

it('renders without crashing', () => {
  const render = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  mount(render);
});
