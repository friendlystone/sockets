import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
window.navigator.userAgent = 'react-native';
import io from 'socket.io-client/dist/socket.io';

export default class App extends Component {
  state = {
    name: 'Bob'
  }

  constructor() {
    super();
    this.socket = io('localhost:3000', {jsonp: false});
    this.socket.on('update', () => this.setState({ name: 'Vasile' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> { this.state.name } </Text>
        <StatusBar style="auto" />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
