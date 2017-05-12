import React from 'react';
import { shallow } from 'enzyme'
import Shells from './Shells';

it('renders without crashing', () => {
  shallow(<Shells />);
});

it('renders shells', () => {
  const shells = shallow(<Shells shells={[ , , , ]}/>);
  expect(shells.find('.shells')).toHaveLength(1);
})
