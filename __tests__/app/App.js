import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import App from '../../app/App';

jest.mock('react-native-material-ui', () => ({
  // Force ThemeProvider to render a component by mocking it, so we can test it
  ThemeProvider: 'MockThemeProvider',
  COLOR: {
    amber500: 'dummy color',
  },
}));

jest.mock('react-redux', () => ({
  // Force Provider to render a component by mocking it, so we can test it
  Provider: 'MockStoreProvider',
}));

jest.mock('../../app/screens/SettingsAndActivateScreen', () => (
  'MockSettingsAndActivateScreen'
));

it('sets up the app and renders correctly', () => {
  const tree = renderer.create(
    <App />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
