
import React, { useState } from 'react';
import { Component,
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions,
  TouchableOpacity } from 'react-native';
import Cards from './Cards';
//import Styles from "./assets/css/Styles"
//import AppNavigator from './navigation/AppNavigator';
import * as Actions from '../actions';

export default class Deck extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
      // var names = ['Jake', 'Jon', 'Thruster','Nam'];
      return (
        <View style={styles.container}>
          <View style={styles.half1}>
            <TouchableOpacity
              onPress={() => { this.shuffle(); }}>
              <Cards />
            </TouchableOpacity>
            {/* {names.map(function(name, index){
              return <Cards key={index} />;
            })}   */}          
          </View>
          <View style={styles.half2}>            
          </View>         
        </View>
      );
  }

  shuffle() {
    this.props.dealCards();
    this.playAnimation();
  }

  playAnimation() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.top, {
          toValue: -900,
          duration: 200,
          delay: 20,
        }),
        Animated.timing(this.state.top, {
          toValue: -175 / 2,
          duration: 1,
          delay: 1,
        }),
        Animated.timing(this.state.top, {
          toValue: 900,
          duration: 200,
          delay: 20,
        }),
      ]),
      {
        iterations: 3,
      }
    ).start();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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

