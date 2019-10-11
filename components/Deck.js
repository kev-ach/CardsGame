
import React, { useState } from 'react';
import { Component,
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions,
  TouchableOpacity,
  Image } from 'react-native';
import Cards from './Cards';
//import Styles from "./assets/css/Styles"
//import AppNavigator from './navigation/AppNavigator';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class Deck extends React.Component{
  /* constructor(props) {
    super(props);
    this.state = {
      top: new Animated.Value(-175 / 2),
    };
  } */

  render(){
      // var names = ['Jake', 'Jon', 'Thruster','Nam'];
      return (
        <View style={styles.container}>
          <View style={styles.half1}>
          <Cards />
          <Cards />
          <Cards />
            
            

            {/* <View>
              <Animated.View>
                <TouchableOpacity
                  onPress={() => { this.shuffle(); }}>
                    <Image resizeMode="stretch"
                    source={require('../assets/cards/green_back.png')}
                    style={[styles.card, {}]}/>
                  <Cards />
                </TouchableOpacity>
              </Animated.View>
            </View> */}  

            {/* {names.map(function(name, index){
              return <Cards key={index} />;
            })}           */}
          </View>
          <View style={styles.half2}>            
          </View>         
        </View>
      );
  }

  /* shuffle() {
    this.props.dealCards();
    this.playAnimation();
  }

  playAnimation() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.top, {
          toValue: -900,
          duration: 200,
          delay: 20,
        }),
        Animated.timing(this.state.top, {
          toValue: -175 / 2,
          duration: 1,
          delay: 1,
        }),
        Animated.timing(this.state.top, {
          toValue: 900,
          duration: 200,
          delay: 20,
        }),
      ]),
      {
        iterations: 3,
      }
    ).start(() => {
      this.props.startGame();
    });
  } */
}

let CARD = 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 20
  },
  half1: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent:"center",
    alignItems:"center",
  },
  half2: {
    flex: 2,
    backgroundColor: 'transparent',
  },
  textPseudo: {
    padding: 10,
    fontSize: 15
  },
  card      : {
    borderColor:'red',
    backgroundColor     : '#1abc9c',
    width               : CARD*2,
    height              : CARD*3,
  }
});

/* function mapStateToProps(state) {
  return {
    gameStart: state.dataReducer.gameStart,
    gameStarting: state.dataReducer.gameStarting,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck); */

