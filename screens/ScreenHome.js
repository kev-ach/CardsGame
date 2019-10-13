
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View,TextInput,Text } from 'react-native';
import ContainerSettings from '../components/ContainerSettings';
import Search from '../components/Search';
import { Button } from 'react-native-elements';
import styles from '../styles/styles';

//import Styles from "./assets/css/Styles"

export default class ScreenHome extends React.Component{
  
  render(){
    
    return (
      <View style={styles.container}>
        <View style={styles.titleFlex} >
          <Text style={styles.title}>Cards Game</Text>
          <ContainerSettings />
          <Search navigation ={this.props.navigation}/>
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


