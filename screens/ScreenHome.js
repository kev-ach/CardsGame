
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View,TextInput,Text, Modal } from 'react-native';
import ContainerSettings from '../components/ContainerSettings';
import Search from '../components/Search';
import { Button } from 'react-native-elements';
import styles from '../styles/styles';
import { Slider } from 'react-native';

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
          <Search navigation ={this.props.navigation}/>
          <Modal
            transparent = {true}
            visible={this.state.modalVisible}
            animationType={'fade'}
            onRequestClose={() => this.closeModal()} >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text style={styles.text_creer_partie}>Créer une partie</Text>
                <TextInput style={styles.input_cree_partie} placeholder=" Nom de la partie" />
                <Text style={styles.text_nbr_joueur}>Nombre de joueurs : </Text>
                <Slider
                  style={{width: 200, height: 40}}
                  minimumValue={0}
                  maximumValue={4}
                  step={1}
                  minimumTrackTintColor="green"
                  maximumTrackTintColor="#000000"
                />
                <Button style={styles.btn_close_modal} onPress={() => {this.closeModal(); this.props.navigation.navigate('Game');}} title="Jouer" ></Button>
              </View>
            </View>
          </Modal>
          <View style={styles.bottom}>
            <Button
              style={styles.button}
              type="outline"
              onPress={() => this.openModal()} title="Crée une partie" />
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
    height: 415 ,
    width: '90%',
    marginTop: 370,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 2,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text_creer_partie: {
    width: 300,
    marginTop: -100,
    fontSize: 25,
    textAlign: 'center',
    borderWidth: 2,
  },
  input_cree_partie: {
    width: 250,
    height: 40,
    marginTop: 30,
    backgroundColor: '#F1F1F1',
    borderRadius: 4,
  },
  text_nbr_joueur: {
    width: 300,
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  btn_close_modal: {
    marginTop: 50,
  },
  innerContainer: {
    alignItems: 'center',
  }
});
