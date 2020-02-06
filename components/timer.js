import React from 'react';
import { Text, View } from 'react-native';
import Button from './common/button';

export default class StopwatchPage extends React.Component {
  state = {
    secondsLeft: 10,
    stopwatchRunning: true,
  }

  timerId = null

  componentWillUnmount = () => {
    clearTimeout(this.timerId);
  }

  render() {
    const { navigateTo } = this.props;

    this.timerId = setInterval(
      () => {
        if(this.state.secondsLeft > 1) {
          this.setState((state) => {
            const newState = { ...state };
            newState.secondsLeft = state.secondsLeft - 1;
            return newState;
          });
        }
        else {
          this.props.onTimeOut();
        }
      },
      1000
    );

    return (
      <View>
        <Text style={ this.props.style }>{this.state.secondsLeft}</Text>
      </View>
    );
  }
}
