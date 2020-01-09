import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  Animated,
  Easing,
} from 'react-native';
import logo from './dragon-2646934_960_720.png';

class App extends Component {
  state = {
    spinValue: new Animated.Value(0),
  }

  onClick = () => {
    const wasRotate = this.state.spinValue._value === 1;
    Animated.timing(
      this.state.spinValue,
      {
        toValue: wasRotate ? 0 : 1,
        duration: 400,
        easing: Easing.linear
      }
    ).start()
  }

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={styles.container}>
        <Animated.Image source={logo} style={[styles.logo, { transform: [{rotate: spin}] }]}/>
        <Text style={styles.title}>Belajar Aplikasi React Native</Text>
        <Text>Open up src/App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        {Platform.OS !== 'web' && <Text>Shake your phone to open the developer menu.</Text>}
        <TouchableHighlight
          onPress={this.onClick}
          style={styles.button}
          underlayColor={'#8b008b'}
        >
          <Text style={styles.buttonText}>Rotate Logo</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 500,
    height: 500,
    tintColor: '#ffd700',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  button: {
    borderRadius: 50,
    padding: 40,
    marginVertical: 50,
    marginTop: 50,
    backgroundColor: '#4b0082',
  },
  buttonText: {
    color: '#ffe4c4',
    fontWeight: 'bold',
    fontSize: 19,
  },
});

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);

