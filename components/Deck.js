
import React, { useState } from 'react';
import { Platform,TouchableHighlight, Modal, StatusBar, StyleSheet, View,TextInput,Text,FlatList, Button,Picker } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Swiper from 'react-native-deck-swiper'
//import Styles from "./assets/css/Styles"
//import AppNavigator from './navigation/AppNavigator';

export default class Deck extends React.Component{
  
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.half1}>
            
        </View>
        <View style={styles.half2}>
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
  },
  half1: {
    flex: 1,
    backgroundColor: 'green',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  half2: {
    flex: 2,
    backgroundColor: 'red',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  textPseudo: {
    padding: 10,
    fontSize: 15
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
});

