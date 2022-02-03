import React from 'react';
import renderer from 'react-test-renderer';
import LoginScreen from '../screens/LoginScreen';

const {LoginScreen} = require('../screens/LoginScreen');
test('pikarupika7@gmail.com should be in email', () => {
  email = ['pikarupika7@gmail.com', 'bipinaghimire7@gmail.com']
  expect(email).toContain('pikarupika7@gmail.com');
});

//to see if it renders correctly
test('renders correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});