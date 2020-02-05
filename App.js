import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Menu from './components/menu.js';
import GameGrid from './components/gameGrid.js';

export default class App extends React.Component {

  state = {
    route: 'level_1',
  }

  get currentPageComponent() {
    if (this.state.route === 'welcome') {
      return  <Menu 
                title='Tapit'
                text='Tap the blue button as many times as you can before time expires.
                      If you score at least 10 points, you get to go to Level 2!'
                btnTitle='Start Level 1'
                navigateToDestination='level_1'
                navigateToFunction={this.navigateTo}
              />;
    } else if (this.state.route === 'level_1') {
      return <GameGrid route={ this.state.route }/>;
    }
    return <Text>Page not found</Text>;
  }

  navigateTo = (route) => {
    this.setState({ route });
  }

  render() {
    return (
      <SafeAreaView style={ this.styles.container }>
        {this.currentPageComponent}
      </SafeAreaView>
    );
  }

  styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    }
  });


}