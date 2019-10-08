
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View,TextInput,Text,FlatList, Button } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
//import Styles from "./assets/css/Styles"
//import AppNavigator from './navigation/AppNavigator';

export default class ContainerSettings extends React.Component{
  
  render(){
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
    return (
      <View style={styles.container}>
          <Dropdown
            label='Favorite Fruit'
            data={data}
          />
          
          <TextInput
            style={{paddingLeft: 10}}
            placeholder="Pseudo"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
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
  item: {
    flex: 20,
    padding: 10,
    fontSize: 18,
    height: 44,
    display: 'none'
  },
});

