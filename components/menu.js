import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Button from './button.js';

export default class App extends React.Component {

  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <View style={ this.styles.container }>
          <h1 style={ this.styles.title }>{ this.props.title }</h1>
          <p>{ this.props.text }</p>

          <Button title={ this.props.btnTitle } onPress={ this.props.onPress } />

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
    title: {
      fontSize: 48,
      alignSelf: 'center',
      color: '#000680',
    }
  });

}