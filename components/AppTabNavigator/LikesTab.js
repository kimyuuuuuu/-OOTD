import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

function HomeTab() {
  return (
    <View style={styles.container}>
      <Text>HomeTab</Text>
    </View>
  );
}

HomeTab.navigationOptions = {
  tabBarIcon: ({ color }) => (
    <Icon name='ios-heart' style={{ color: color }} />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeTab;
