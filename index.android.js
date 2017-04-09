import React from 'react';
import { AppRegistry, UIManager } from 'react-native';
import App from './app/App';

// Enable animation on Android
if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Panicker = () => (
  <App />
);

export default Panicker;

AppRegistry.registerComponent('Panicker', () => Panicker);
