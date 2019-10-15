import React, { useState } from 'react';
import { Platform,TouchableHighlight, Modal, StatusBar, StyleSheet, View,TextInput,Text,FlatList, Button,Picker,
  Alert, TouchableOpacity } from 'react-native';
import { CustomPicker } from 'react-native-custom-picker';
import Emoji from 'react-native-emoji';
import styles from '../styles/styles';

export default class ContainerSettings extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: 'Default value!',
      pickerDisplayed: false
    }
  }

  
  render(){
    const options = [
      {
        color: '#2660A4',
        label: 'grinning',
        value: 1
      },
      {
        color: '#FF6B35',
        label: 'grin',
        value: 2
      },
      {
        color: '#FFBC42',
        label: 'joy',
        value: 3
      },
      {
        color: '#AD343E',
        label: 'sweat_smile',
        value: 4
      },
      {
        color: '#051C2B',
        label: 'laughing',
        value: 5
      }
    ]
    return (
      <View style={styles.container_settings}>
        <View style={styles.half1_settings}>
          <CustomPicker
            modalStyle={{width:80}}
            options={options}
            getLabel={item => item.label}
            fieldTemplate={this.renderField}
            optionTemplate={this.renderOption}
          />
        </View>
        <View style={styles.half2_settings}>
          <TextInput
            style={styles.textPseudo}
            placeholder="Pseudo"
          />
        </View>  
      </View>
    );
  }
 
  renderField(settings) {
    const { selectedItem, defaultText, getLabel, clear } = settings
    return (
      <View style={styles.containerPicker}>
        <View>
          {!selectedItem && <Emoji name="grinning" style={{fontSize: 35}} />}
          {selectedItem && (
            <View style={styles.innerContainer}>
              <Emoji name={getLabel(selectedItem)} style={{fontSize: 35}} />
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
          <Emoji name={getLabel(item)} style={{fontSize: 35}} />
        </View>
      </View>
    )
  }
}

