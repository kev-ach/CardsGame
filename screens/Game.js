
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View,TextInput,Text,Image, ImageBackground, TouchableOpacity } from 'react-native';
import Deck from '../components/Deck';
import styles from '../styles/styles';
import { CustomPicker } from 'react-native-custom-picker';

//import Styles from "./assets/css/Styles"
//import AppNavigator from './navigation/AppNavigator';

export default class Game extends React.Component{
  constructor(props) {
    super(props);

    this.state ={
      params: props.navigation.state.params.nbPlayers,
      deck_back: null
    }
    
  }

  renderField(settings) {
    const { selectedItem, defaultText, getLabel, clear } = settings
    return (
      <View style={styles.containerPicker}>
        <View>
          {!selectedItem && <Image source={require('../assets/images/blue_back.png')} style={styles.card_picker}/>}
          {selectedItem && (
            <View style={styles.innerContainer}>
              <Image source={getLabel(selectedItem)} style={styles.card_picker}/>
            </View>
          )}
        </View>
      </View>
    )
  }
 
  renderOption(settings) {
    const { item, getLabel } = settings
    return (
      <View style={styles.optionContainer}>
        <View style={styles.innerContainer}>
          <Image source={getLabel(item)} style={styles.card_picker}/>
        </View>
      </View>
    )
  }

  render(){
    const options = [
      {
        label: require('../assets/images/green_back.png'),
        value: 1
      },
      {
        label: require('../assets/images/gray_back.png'),
        value: 2
      },
      {
        label: require('../assets/images/blue_back.png'),
        value: 3
      },
      {
        label: require('../assets/images/purple_back.png'),
        value: 4
      },
      {
        label: require('../assets/images/yellow_back.png'),
        value: 5
      }
    ]
    return (
      <ImageBackground source={require('../assets/images/bg.png')} style={{flex: 1}}>
        <View style={styles.container_game}>
          <View style={styles.players}>
              <Text>Nombre de joueurs: {this.state.params}</Text>
              
              {console.log(this.state.deck_back)}
          </View>
          <CustomPicker
                modalStyle={{ width:90, marginBottom: 350}}
                options={options}
                getLabel={item => item.label}
                fieldTemplate={this.renderField}
                optionTemplate={this.renderOption}
              /> 
          <Deck backDeck={this.state.deck_back}/>
        </View>
      </ImageBackground>
      
    );
  }
}

