import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View,TextInput,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ContainerSettings from '../components/ContainerSettings';
import Search from '../components/Search';
import { Button } from 'react-native-elements';

//import Styles from "./assets/css/Styles"

export default class ScreenHome extends React.Component{
  
  render(){
    
    return (
      <View style={styles.container}>
        <View style={styles.titleFlex} >
          <Text style={styles.title}>Cards Game</Text>
          <ContainerSettings />
          <Search />
          <View style={styles.bottom}>
            <Button
              style={styles.button}
              title="Jouer"
              type="outline"
              onPress={() => this.props.navigation.navigate('Game')} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingTop:100
  },
  titleFlex: {
    flex: 1,
    height: 50, 
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color:'grey',
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
  }
});

