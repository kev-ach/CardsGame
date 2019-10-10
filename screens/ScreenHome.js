import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View,TextInput,Text, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ContainerSettings from '../components/ContainerSettings';
import Search from '../components/Search';
import { Button } from 'react-native-elements';

export default class ScreenHome extends React.Component{
  state = {
    modalVisible: false,
  };

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.titleFlex} >
          <Text style={styles.title}>Cards Game</Text>
          <ContainerSettings />
          <Search />
          <Modal
            visible={this.state.modalVisible}
            animationType={'slide'}
            onRequestClose={() => this.closeModal()} >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text style={styles.text_creer_partie}>Créer une partie</Text>
                <TextInput placeholder="Créer une partie" />
                <Button onPress={() => this.closeModal()} title="Close modal" ></Button>
              </View>
            </View>
          </Modal>
          <View style={styles.bottom}>
            <Button
              style={styles.button}
              type="outline"
              onPress={() => this.openModal()} title="Jouer" />
              {/*onPress={() => this.props.navigation.navigate('Game')}*/}
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
    color:'red',
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
  text_creer_partie: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 500
  }
});
