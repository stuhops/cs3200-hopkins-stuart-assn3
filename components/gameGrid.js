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

export default class App extends React.Component {
  state = {
    grid: [
      [null,null,null,null,null],
      [null,null,null,null,null],
      [null,null,null,null,null],
      [null,null,null,null,null],
      [null,null,null,null,null],
      [null,null,null,null,null],
      [null,null,null,null,null],
      [null,null,null,null,null],
    ],
    time: 10,
    score: 0,
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
      fontSize: 36,
      color: 'black',
    },
  });

  componentDidMount() {
    this.generateGrid();
  }

  get randomColor() {
    return `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`;
  }

  generateGrid = route => {
    let tmpGrid = _.map(this.state.grid, row => row.slice() );
    _.map(tmpGrid, row => {
      return _.map(row, index => {
        if(route === 'level_1')
          return null;

        else if(route === 'level_2')
          return this.randomColor();

      });
    });

    tmpGrid[Math.floor(Math.random() * 8)][Math.floor(Math.random() * 5)] = 'rgb(0, 0, 255)';

    this.setState(state => ({ grid: tmpGrid }));
  }

  set score(value) {
    if(value === 'rgb(0, 0, 255)')
      this.setState(state => ({ score: state.score + 1 }))
    else if(value === null)
      return
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
            />
    });
  }

  render() {
    return (
      <SafeAreaView style={ this.styles.body }>
        <StatusBar barStyle="dark-content" />

        <View style={ this.styles.scoreBar }>
          <Text style={ this.styles.score }>SCORE</Text>
        </View>

        <View style={ this.styles.mainContainer }>
          { this.rowComponents }
        </View>
      </SafeAreaView>
    )
  }

}