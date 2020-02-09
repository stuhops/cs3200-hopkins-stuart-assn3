import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';


export default class Button extends React.Component {
  styles = StyleSheet.create({
    title: {
      fontSize: 24,
      alignSelf: 'center',
      color: 'white',
    }
  });

  render() {
    return (
      <TouchableOpacity onPress={ () => this.props.onPress(this.props.value) }>
        <View style={ this.props.style }>
          <Text>{ this.props.title }</Text>
        </View>
      </TouchableOpacity>
    );
  }

}