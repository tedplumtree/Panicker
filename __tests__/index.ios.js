import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Index from '../index.ios';

jest.mock('../app/App', () => 'App');

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
