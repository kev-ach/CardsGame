import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View,TextInput,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ContainerSettings from './ContainerSettings';

//import Styles from "./assets/css/Styles"
//import AppNavigator from './navigation/AppNavigator';

export default class ScreenHome extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.titleFlex} >
          <Text style={styles.title}>Cards Game</Text>
          <ContainerSettings />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  message: {
    flex: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  titleFlex: {
    flex: 1,
    height: 50, 
    backgroundColor: 'powderblue'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color:'white',
  },
});

