import React from 'react';
import { shallow } from 'enzyme'
import GameControls from './GameControls';

it('renders without crashing', () => {
  shallow(<GameControls />);
});
