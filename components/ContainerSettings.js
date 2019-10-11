import React, { useState } from 'react';
import { Platform,TouchableHighlight, Modal, StatusBar, StyleSheet, View,TextInput,Text,FlatList, Button,Picker,
  Alert, TouchableOpacity } from 'react-native';
import { CustomPicker } from 'react-native-custom-picker'
import Emoji from 'react-native-emoji';

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
      <View style={styles.container}>
        <View style={styles.half1}>
          <CustomPicker
            modalStyle={{width:80}}
            options={options}
            getLabel={item => item.label}
            fieldTemplate={this.renderField}
            optionTemplate={this.renderOption}
          />
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

  renderHeader() {
    return (
      <View style={styles.headerFooterContainer}>
        <Text>This is header</Text>
      </View>
    )
  }
 
  renderFooter(action) {
    return (
      <TouchableOpacity
        style={styles.headerFooterContainer}
        onPress={() => {
          Alert.alert('Footer', "You've click the footer!", [
            {
              text: 'OK'
            },
            {
              text: 'Close Dropdown',
              onPress: action.close.bind(this)
            }
          ])
        }}
      >
        <Text>This is footer, click me!</Text>
      </TouchableOpacity>
    )
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
          <Emoji name={getLabel(item)} style={{fontSize: 50}} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
  },
  half1: {
    flex: 1,
  },
  half2: {
    flex: 3,
    backgroundColor: 'red',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent:"center"
  },
  textPseudo: {
    padding: 10,
    fontSize: 18,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  text: {
    fontSize: 18
  },
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center'
  },
  clearButton: { backgroundColor: 'grey', borderRadius: 5, marginRight: 10, padding: 5 },
  optionContainer: {
    padding: 10,
    backgroundColor:'transparent',
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  containerPicker: {
    padding: 15,
  },
});

