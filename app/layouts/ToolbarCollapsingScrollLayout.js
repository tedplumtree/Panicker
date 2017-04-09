import React, { PropTypes } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Toolbar } from 'react-native-material-ui';

const propTypes = {
  children: PropTypes.any.isRequired,
  toolbar: PropTypes.object.isRequired,
};

const contextTypes = {
  uiTheme: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ToolbarCollapsingScrollLayout = ({ children, toolbar }, { uiTheme }) => (
  <View style={styles.container}>
    <StatusBar backgroundColor={uiTheme.palette.primaryColor} />
    <ScrollView style={styles.container}>
      <Toolbar {...toolbar} />
      {children}
    </ScrollView>
  </View>
);

ToolbarCollapsingScrollLayout.propTypes = propTypes;
ToolbarCollapsingScrollLayout.contextTypes = contextTypes;

export default ToolbarCollapsingScrollLayout;
