import 'react-native';
import React from 'react';
import { ThemeProvider } from 'react-native-material-ui';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import SettingsAndActivateScreen from '../../../app/screens/SettingsAndActivateScreen';

jest.mock(
  // Force SensorActionButton (connected component) to render so we can test it
  '../../../app/containers/SensorActionButton',
  () => 'MockSensorActionButton',
);

jest.mock(
  '../../../app/layouts/ToolbarCollapsingScrollLayout',
  () => 'MockToolbarCollapsingScrollLayout',
);

const dummyMaterialDesignTheme = {
  palette: {
    primaryColor: '#009688',
  },
  toolbar: {
    container: {
      height: 123,
    },
  },
};

it('renders correctly', () => {
  const tree = renderer.create(
    <ThemeProvider uiTheme={dummyMaterialDesignTheme}>
      <SettingsAndActivateScreen />
    </ThemeProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
