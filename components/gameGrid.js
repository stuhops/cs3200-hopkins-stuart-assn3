import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Tile from './tile.js';

export default class App extends React.Component {

  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <View style={ this.styles.scoreBar }>
          <Text style={ this.styles.score }>Hello</Text>
        </View>
        <View style={ this.styles.mainContainer }>
          {/* Row 1 */}
          <View style={ this.styles.rowContainer }>
            <View style={ this.styles.columnContainer }>
              <Tile backgroundColor='backgroundColor: "green"'></Tile>
            </View>
            <View style={ this.styles.columnContainer }>
              <Tile backgroundColor='backgroundColor: "green"'></Tile>
            </View>
            <View style={ this.styles.columnContainer }>
              <Tile backgroundColor='backgroundColor: "green"'></Tile>
            </View>
            <View style={ this.styles.columnContainer }>
              <Tile backgroundColor='backgroundColor: "green"'></Tile>
            </View>
            <View style={ this.styles.columnContainer }>
              <Tile backgroundColor='backgroundColor: "green"'></Tile>
            </View>
          </View>
          {/* Row 2 */}
          <View style={ this.styles.rowContainer }>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
          </View>
          {/* Row 3 */}
          <View style={ this.styles.rowContainer }>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
          </View>
          {/* Row 4 */}
          <View style={ this.styles.rowContainer }>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
          </View>
          {/* Row 5 */}
          <View style={ this.styles.rowContainer }>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
          </View>
          {/* Row 6 */}
          <View style={ this.styles.rowContainer }>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
          </View>
          {/* Row 7 */}
          <View style={ this.styles.rowContainer }>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
          </View>
          {/* Row 8 */}
          <View style={ this.styles.rowContainer }>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
            <View style={ this.styles.columnContainer }>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }

  styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      margin: 10,
      justifyContent: 'space-between',
    },

    rowContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    columnContainer: {
      flex: 1,
      width: 20,
      height: 20,

    },

    title: {
      fontSize: 48,
      alignSelf: 'center',
      color: '#000680',
    },

    scoreBar: {
      height: 20,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    score: {
      flex: 1,
      fontSize: 15,
      color: 'black',
    },
  });

}