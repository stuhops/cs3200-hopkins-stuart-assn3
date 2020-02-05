import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from 'react-native';

import Button from './button.js';

export default class App extends React.Component {

  render() {
    return (
      <SafeAreaView style={ this.styles.fullContainer }>
        <StatusBar barStyle="dark-content" />
        <View style={ this.styles.container }>
          <Text style={ this.styles.title }>{ this.props.title }</Text>
          <Text>{ this.props.text }</Text>

          <Button title={ this.props.btnTitle } onPress={() => this.props.navigateToFunction(this.props.navigateToDestination)} />

        </View>
      </SafeAreaView>
    )
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '75%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fullContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 48,
      textAlign: 'center',
      color: '#000680',
    },
  });

}