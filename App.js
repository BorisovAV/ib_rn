import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  _onPress() {
    Alert.alert('on Press!');
   }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}>
        <View style={{backgroundColor: 'gray', flex: 0.3}} />
        <View style={{backgroundColor: 'red', flex: 0.5}} />
        <View style={styles.container}></View>
        <View style={styles.buttonContainer}>
        <Text>Hello World!</Text>
        <Button onPress={this._onPress} title="Hello" color="#000000" accessibilityLabel="Tap on Me!"/>
      </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
})
