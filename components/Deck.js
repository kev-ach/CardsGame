
import React, { useState } from 'react';
import { Component,
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions } from 'react-native';
import Cards from './Cards';
//import Styles from "./assets/css/Styles"
//import AppNavigator from './navigation/AppNavigator';

export default class Deck extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      cards: this.initCards(),
      card: '',
    };
    
  }  
  
  initCards () {
    var cards =[];
    var colors = ['C','D','H','S'];
    for(var i in colors){
      for (var j = 1; j<=13; j++){
        cards.push(j + colors[i])
      }
    }
    return cards
  };

  render(){
    
    var deck = this.state.cards;
    console.log(this.state.card);
    return (
      <View style={styles.container}>
        <View style={styles.half1}>
          {deck.map(function(card, index){ 
                    return <Cards key={index} style={position='absolute'} value={card}>

                    </Cards>;
                  })}
        </View>
        <View style={styles.half2}>
          
        </View>   
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 20
  },
  half1: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent:"center",
    alignItems:"center",
  },
  half2: {
    flex: 2,
    backgroundColor: 'transparent',
  },
  textPseudo: {
    padding: 10,
    fontSize: 15
  },
});

