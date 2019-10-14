
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View,TextInput,Text, Modal } from 'react-native';
import ContainerSettings from '../components/ContainerSettings';
import Search from '../components/Search';
import { Button } from 'react-native-elements';
import styles from '../styles/styles';
import { Slider } from 'react-native';

export default class ScreenHome extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      value_slider: 2,
    };
  }

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render(){
    const {value_slider} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.titleFlex} >
          <Text style={styles.title}>Cards Game</Text>
          <ContainerSettings />
          <Search navigation ={this.props.navigation}/>
          <Modal
            transparent = {true}
            backgroundColor = {'rgba(0,0,0,0.5)'}
            visible={this.state.modalVisible}
            animationType={'fade'}
            onRequestClose={() => this.closeModal()} >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text style={styles.text_creer_partie}>Créer une partie</Text>
                <TextInput style={styles.input_cree_partie} placeholder=" Nom de la partie" />
                <Text style={styles.text_nbr_joueur}>Nombre de joueurs : {this.state.value_slider}</Text>
                <Slider
                  style={{width: 200, height: 40}}
                  minimumValue={2}
                  maximumValue={4}
                  step={1}
                  minimumTrackTintColor="green"
                  maximumTrackTintColor="#000000"
                  onValueChange={(value_slider) => this.setState({ value_slider })}
                  value={this.state.value_slider}
                />
                {/*<Players nbrPlayers={this.state.value_slider} visible={false}/>*/}
                <Button style={styles.btn_close_modal} onPress={() => {this.closeModal(); this.props.navigation.navigate('Game',{nbPlayers: this.state.value_slider, })}} title="Jouer" ></Button>
                <Button style={styles.btn_close_modal} onPress={() => this.closeModal()} title="Annuler" ></Button>
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
