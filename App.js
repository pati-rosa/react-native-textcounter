import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import TextCounter from './TextCounter';

export default function App() {
  return (
    <View style={styles.container}>
      <TextCounter limit={50}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 5,
    paddingLeft: 15,
    paddingRight: 15
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
