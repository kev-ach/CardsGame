
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View,TextInput,Text } from 'react-native';
import Deck from '../components/Deck';
// import PlayerHand from '../components/PlayerHand';
// import Pioches from '../components/Pioches';

//import Styles from "./assets/css/Styles"
//import AppNavigator from './navigation/AppNavigator';

export default class Game extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.players}></View>
        <View style={styles.deck_Pioches}>
            <Deck/>
        </View>
        
        <View style={styles.carte}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    zIndex:1
  },
  titleFlex: {
    flex: 1,
    height: 50, 
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color:'white',
  },
  search: {
    flex: 5,
  },
  buttonJouer: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'flex-end',
    bottom:10
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 36
  },
  button: {
    width: 300,
  },
  players: {
    flex: 1,
    backgroundColor: 'red'
  },
  deck_Pioches: {
    flex: 3,
    backgroundColor: 'grey',
    zIndex:2
  },
  carte: {
    flex: 2,
    backgroundColor: 'skyblue',
    zIndex:1
  },
});

