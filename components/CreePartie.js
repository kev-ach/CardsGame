import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

export default class CreePartie extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>

      {/*<View style={styles.main_container}>
        <Text style={styles.text_titre} >Cards Game</Text>
        <TextInput style={styles.text_input} placeholder='Pseudo'/>
        <Button title='Rechercher' onPress={() => {}}/>
      </View>*/}
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  text_titre: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    borderColor: '#000000',
    paddingLeft: 5,
    fontSize: 40,
    fontWeight: '500',
    color: "red"
  },
  text_input: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    width: 200,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})
