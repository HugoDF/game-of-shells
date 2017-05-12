import React from 'react';
import { shallow } from 'enzyme'
import { App } from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders Shells', () => {
  expect(shallow(<App />).find('Shells')).toHaveLength(1);
});

it('renders GameControls', () => {
  expect(shallow(<App />).find('GameControls')).toHaveLength(1);
});
