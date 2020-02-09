import React from 'react';
import _ from 'lodash';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Row from './row.js';
import Timer from './timer.js';

const ROWS = 8;
const COLS = 5;

export default class App extends React.Component {
  state = {
    grid: [],
    score: 0,
    won: false,
  }

  styles = StyleSheet.create({
    body: {
      height: '100%',
      width: '100%',
    },

    mainContainer: {
      flex: 10,
      padding: 10,
    },

    title: {
      fontSize: 48,
      alignSelf: 'center',
      color: '#000680',
    },

    scoreBar: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    score: {
      flex: 1,
      fontSize: 24,
      color: 'black',
    },
  });

  componentDidMount() {
    this.setState(state => ({ grid: this.generateGrid(this.props.route) }));
  }

  randomColor = () => {
    return `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 100))})`;
  }

  generateGrid = (route) => {
    let stack;
    stack = _.fill(Array(COLS * ROWS), null);
    if(route !== 'level_1') {
      stack = _.map(stack, index => {
        return this.randomColor();
      });
    }
    stack[0] = 'rgb(0, 0, 255)';
    stack = _.shuffle(stack);
    const grid = _.map(_.range(0, ROWS), () => {
      return _.map(_.range(0, COLS), () => stack.pop());
    });
    return grid;
  }

  onTilePress = (value) => {
    if(value === 'rgb(0, 0, 255)') {
      if(this.state.score === Number(this.props.pointsToWin)-1)
        this.setState(state => ({won: true}));

      this.setState(state => ({ 
        score: state.score + 1,
        grid: this.generateGrid(this.props.route),
      }));
    }
    else if(value === null)
      return;
    else
      this.props.navigateToFunction('game_over');
  }

  get rowComponents() {
    // use a passed in generate function to generate the rest of the objects.
    return _.map(this.state.grid, (row, i) => {
      return <Row 
              rowKey={ `row_${i}` }
              rowIndex={ i }
              rowData={ row }
              onPress={ this.onTilePress }
            />
    });
  }

  onTimeOut = () => {
    if(this.state.won) {
      this.props.navigateToFunction(this.props.winRoute);
    }

    else
      this.props.navigateToFunction('game_over');
  }

  render() {
    return (
      <SafeAreaView style={ this.styles.body }>
        <StatusBar barStyle="dark-content" />

        <View style={ this.styles.scoreBar }>
          <Text style={ this.styles.score }>SCORE: { this.state.score }</Text>
          <Text style={ this.styles.score }>{ this.props.route }</Text>
          <Timer
              style={ this.styles.score }
              onTimeOut={ this.onTimeOut }
          />
          
        </View>

        <View style={ this.styles.mainContainer }>
          { this.rowComponents }
        </View>
      </SafeAreaView>
    )
  }

}