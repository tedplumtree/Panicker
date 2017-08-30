import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Subheader } from 'react-native-material-ui';
import ToolbarCollapsingScrollLayout from '../layouts/ToolbarCollapsingScrollLayout';
import SensorActionButton from '../containers/SensorActionButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardText: {
    padding: 15,
    paddingTop: 0,
  },
});

const SettingsAndActivateScreen = () => (
  <View style={styles.container}>
    <ToolbarCollapsingScrollLayout toolbar={{ centerElement: 'Panicker' }}>
      <Card>
        <Subheader text="Welcome!" />
        <Text style={styles.cardText}>
           This app will scream if someone tries to steal your phone. Click
           the action button below to drop the pin at your location. The best
           part about it is that you don&apos;t need to enable location tracking!
        </Text>
      </Card>
      {/* TODO: Card with settings */}
    </ToolbarCollapsingScrollLayout>
    <SensorActionButton activateIcon="alarm-add" deactivateIcon="alarm-off" />
  </View>
);

export default SettingsAndActivateScreen;
