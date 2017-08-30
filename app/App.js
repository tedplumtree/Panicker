import React from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';
import { MaterialDesignTheme } from './config/styles';
import SettingsAndActivateScreen from './screens/SettingsAndActivateScreen';
import combinedReducers from './reducers/index';

const store = createStore(combinedReducers);

const App = () => (
  <StoreProvider store={store}>
    <ThemeProvider uiTheme={MaterialDesignTheme}>
      <SettingsAndActivateScreen />
    </ThemeProvider>
  </StoreProvider>
);

export default App;
