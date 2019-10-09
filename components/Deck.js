
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

    render(){

      var names = ['Jake', 'Jon', 'Thruster','Nam'];
      return (
        <View style={styles.container}>
          <View style={styles.half1}>

            {names.map(function(name, index){
                      return <Cards key={index} />;
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

