import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, Subheader } from 'react-native-material-ui';
import ToolbarCollapsingScrollLayout from '../layouts/ToolbarCollapsingScrollLayout';

const styles = StyleSheet.create({
  cardText: {
    padding: 15,
    paddingTop: 0,
  },
});

const SettingsAndActivateScreen = () => (
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
    {/* TODO: Floating action button */}
  </ToolbarCollapsingScrollLayout>
);

export default SettingsAndActivateScreen;
