import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Menu from './components/menu.js';
import GameGrid from './components/gameGrid.js';

export default class App extends React.Component {

  state = {
    route: 'welcome',
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
    }
    else if (this.state.route === 'level_1') {
      return <GameGrid
                route={ this.state.route }
                navigateToFunction={this.navigateTo}
             />;
    }
    else if (this.state.route === 'level_2_menu') {
      return  <Menu 
                title='Success!'
                text="That wasn't hard enough. Now let's really test your skills."
                btnTitle='Start Level 2'
                navigateToDestination='level_2'
                navigateToFunction={this.navigateTo}
              />;
    }
    else if (this.state.route === 'level_2') {
      return <GameGrid
                route={ this.state.route }
                navigateToFunction={this.navigateTo}
             />;
    }
    else if (this.state.route === 'level_3_menu') {
      return  <Menu 
                title='nice.'
                text="If you are good enough to get to this point, you are better than the gamemaker..."
                btnTitle='Return to Welcome'
                navigateToDestination='welcome'
                navigateToFunction={this.navigateTo}
              />;
    }
    else if (this.state.route == 'game_over') {
      return  <Menu 
                title='Game Over'
                btnTitle='Main Menu'
                navigateToDestination='welcome'
                navigateToFunction={this.navigateTo}
              />;
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