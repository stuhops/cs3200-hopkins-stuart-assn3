import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Button from './components/button.js';
import Counter from './components/counter.js';
import GameGrid from './components/gameGrid.js';

export default class App extends React.Component {

  state = {
    count: 0,
  }

  upCount = () => {
    this.setState(state => {
      state.count += 1;
      return state;
    });
  }

  downCount = () => {
    this.setState(state => {
      state.count -= 1;
      return state;
    });
  }


  render() {
    return (
      <GameGrid>

      </GameGrid>
      
    )
  }

}