import React, { Component } from "react";
import { StyleSheet, View, Text, PanResponder, Animated, Image } from "react-native";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
      source: require('../assets/cards/green_back.png')
    };
  }

  componentWillMount() {
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);

    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          this.state.pan.setOffset({
            x: this._val.x,
            y:this._val.y
          })
          this.state.pan.setValue({ x:0, y:0})
        },
        onPanResponderMove: Animated.event([ 
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ]),
        onPanResponderRelease: (e, gesture) => {
          if (this.isDropArea(gesture)) {
            Animated.timing(this.state.opacity, {
              toValue: 0,
              duration: 1000
            }).start()
          } else if (this.isPlayArea(gesture)) {
              this.setState({
              source: require('../assets/cards/8H.png')
            })
          } else {
            this.setState({source: require('../assets/cards/8S.png')})
            
          } console.log(this.state.pan.y)
        } 
        /* onPanResponderRelease           : (e, gesture) => {
            Animated.spring(            //Step 1
                this.state.pan,         //Step 2
                {toValue:{x:0,y:0}}     //Step 3
            ).start();
        } */
      });
  }

  isDropArea(gesture) {
    return gesture.moveY < 200;
  }

  isPlayArea(gesture) {
    return gesture.moveY < 0;
  }

  render() {
    return (
      <View>
        {this.renderDraggable()}
      </View>
    );
  }

  /* renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable) {
      return (
        <View style={styles.draggableContainer}>
            <Animated.View 
                {...this.panResponder.panHandlers}
                style={[this.state.pan.getLayout(), styles.card]}>
                <Text style={styles.text}>Drag me!</Text>
            </Animated.View>
        </View>
      );
    }
  } */

  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform(),           
    }
    
      return (
        <View style={styles.wrapper}>
          <Animated.Image
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.card, {opacity:this.state.opacity}]}
            source={this.state.source}
            />
        </View>
      );
    
  }
}

let CARD = 50;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    wrapper: {
      position: 'relative',      
    },
    half1: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: 'green',
    },
    half2: {
      flex: 2,
      backgroundColor: 'transparent',
    },
    textPseudo: {
      padding: 10,
      fontSize: 15
    },
    dropZone    : {
      height         : 100,
      backgroundColor:'#2c3e50'
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    card      : {
        borderColor:'red',
        backgroundColor     : '#1abc9c',
        width               : CARD*2,
        height              : CARD*3,
        position: 'absolute',
    },
  });