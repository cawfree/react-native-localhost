import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import localhost from 'react-native-localhost';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{`${localhost}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
