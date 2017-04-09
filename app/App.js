import React from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import { MaterialDesignTheme } from './config/styles';
import SettingsAndActivateScreen from './screens/SettingsAndActivateScreen';

const App = () => (
  <ThemeProvider uiTheme={MaterialDesignTheme}>
    <SettingsAndActivateScreen />
  </ThemeProvider>
);

export default App;
