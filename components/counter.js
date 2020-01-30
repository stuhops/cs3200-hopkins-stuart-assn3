import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class Counter extends React.Component {
  styles = StyleSheet.create({
    count: {
      fontSize: 128,
      fontFamily: 'Helvetica',
      alignSelf: 'center',
      color: 'black',
    },
  });

  render() {
    return (
      <View>
        <Text style={ this.styles.count }>{ this.props.count }</Text>
      </View>
    );
  }
}