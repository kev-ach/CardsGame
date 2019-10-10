
import React, { useState } from 'react';
import { Platform,TouchableHighlight, Modal, StatusBar, StyleSheet, View,TextInput,Text,FlatList, Button,Picker } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
//import Styles from "./assets/css/Styles"
//import AppNavigator from './navigation/AppNavigator';

export default class ContainerSettings extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: 'Default value!',
      pickerDisplayed: false
    }
  }

    setPickerValue(newValue) {
      this.setState({
        pickerSelection: newValue
      })
  
      this.togglePicker();
    }
  
    togglePicker() {
      this.setState({
        pickerDisplayed: !this.state.pickerDisplayed
      })
    }
  
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.half1}>
          <Picker>
              <Picker.Item label="😀" />
              <Picker.Item label="😄"/>
          </Picker>
        </View>
        <View style={styles.half2}>
          <TextInput
            style={styles.textPseudo}
            placeholder="Pseudo"
          />
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
    flex: 3,
    backgroundColor: 'red',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  textPseudo: {
    padding: 10,
    fontSize: 15
  },
});

