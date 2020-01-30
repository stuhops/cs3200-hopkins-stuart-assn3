import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';


export default class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity style={this.styles.button} onPress={this.props.onPress}>
      </TouchableOpacity>
    );
  }

  styles = StyleSheet.create({
    button: {
      borderRadius: 5,
      width: '75%',
      height: '75%',
      backgroundColor: 'green',
    },
  });

}