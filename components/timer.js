import React from 'react';
import { Text, View } from 'react-native';

export default class StopwatchPage extends React.Component {
  state = {
    secondsLeft: 10,
    stopwatchRunning: true,
  }

  timerId = null

  componentDidMount = () => {
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
  }

  componentWillUnmount = () => {
    clearTimeout(this.timerId);
  }

  render() {
    return (
      <View>
        <Text style={ this.props.style }>Time Left: {this.state.secondsLeft}</Text>
      </View>
    );
  }
}
