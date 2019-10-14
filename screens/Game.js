
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View,TextInput,Text } from 'react-native';
import Deck from '../components/Deck';
import styles from '../styles/styles';

//import Styles from "./assets/css/Styles"
//import AppNavigator from './navigation/AppNavigator';

export default class Game extends React.Component{
  constructor(props) {
    super(props);

    this.state ={
      params: props.navigation.state.params.nbPlayers
    }
    
  }
  render(){
    
    console.log(this.state.params)
    return (
      <View style={styles.container_game}>
        <View style={styles.players}>
          
            <Text>Nombre de joueurs: {this.state.params}</Text>
        </View>
        <View style={styles.deck_Pioches}>
            <Deck/>
        </View>
      </View>
    );
  }
}

