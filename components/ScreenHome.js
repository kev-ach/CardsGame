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
        <View style={{height: 50, backgroundColor: 'powderblue'}} >
          <Text style={styles.title}>Cards Game</Text>
        </View>
        <View style={{height: 50, backgroundColor: 'blue'}} >
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
  container2: {
    flex: 1,
    height: 300,
    backgroundColor: 'skyblue',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  textView: {
    flex: 90,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingLeft: 10,
  },
  message: {
    flex: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color:'white',
  },
});

