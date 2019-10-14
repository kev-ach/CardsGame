import React, { Component } from "react";
import { StyleSheet, View, Text, PanResponder, Animated,Image } from "react-native";
import styles from '../styles/styles';

export default class Cards extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
      source: require('../assets/images/green_back.png'),
      card:null,
      zIndex: null,
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
          this.setState({
            zIndex: this.state.zIndex,
            source: this.state.card
          })
        } 
      });
  }  

  isDropArea(gesture) {
    return gesture.moveY < 200 ;
  }
  render() {
    return (
      <View style={{ width: "20%", alignItems: "center" }}>
        {this.renderDraggable()}
      </View>
    );
  }


  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform(),
      zIndex: this.state.zIndex,
    }
    if (this.state.showDraggable) {
      this.state.card = this.props.card.image
      this.state.zIndex = this.props.zIndex
      return (
        <View style={{ position: "absolute"}}>
          <Animated.Image
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.card, {opacity:this.state.opacity}, {zIndex: panStyle.zIndex}]}
            source={this.state.source}
            />
        </View>
      );
    }
  }
}
