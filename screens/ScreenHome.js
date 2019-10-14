
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
