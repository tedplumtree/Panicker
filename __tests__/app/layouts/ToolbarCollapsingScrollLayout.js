import { Text } from 'react-native';
import { ThemeProvider } from 'react-native-material-ui';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ToolbarCollapsingScrollLayout from '../../../app/layouts/ToolbarCollapsingScrollLayout';

const dummyMaterialDesignTheme = {
  uiTheme: {
    palette: {
      primaryColor: '#009688',
    },
    toolbar: {
      container: {
        height: 123,
      },
    },
  },
};

const dummyToolbarProps = {
  leftElement: 'menu',
  centerElement: 'Foo bar test center element',
  searchable: {
    autoFocus: true,
    placeholder: 'Search this thing!',
  },
};

it('renders correctly', () => {
  const tree = renderer.create(
    <ThemeProvider uiTheme={dummyMaterialDesignTheme}>
      <ToolbarCollapsingScrollLayout toolbar={dummyToolbarProps}>
        <Text>Some dummy child component</Text>
        <Text>Another dummy child component</Text>
      </ToolbarCollapsingScrollLayout>
    </ThemeProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
