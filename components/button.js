import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';


export default class Button extends React.Component {
  styles = StyleSheet.create({
    button: {
      backgroundColor: '#4ccc25',
      padding: 8,
      borderRadius: 10,
    },
    title: {
      fontSize: 24,
      alignSelf: 'center',
      color: 'white',
    }
  });

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={ this.styles.button }>
          <Text style={ this.styles.title }>{ this.props.title }</Text>
        </View>
      </TouchableOpacity>
    );
  }

}