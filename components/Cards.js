import React, { Component } from "react";
import { StyleSheet, View, Text, PanResponder, Animated } from "react-native";

let TRACK_FOLDER = RNFetchBlob.fs.dirs.DocumentDir + '/assets/cards/';

/* console.log('Files list in TRACK_FOLDER = ', RNFetchBlob.fs.ls(TRACK_FOLDER));

     RNFetchBlob.fs.ls(TRACK_FOLDER)
      .then( (files) =>{ 
        console.log(files.length);  
        console.log(files); 
        console.log(files[0]); 

    }) */

export default class Cards extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1)
    };
  }

  componentWillMount() {
    // Add a listener for the delta value change
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);

    // Initialize PanResponder with move handling and create a reference
    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          this.state.pan.setOffset({
            x: this._val.x,
            y:this._val.y
          })
          // adjusting delta value
          this.state.pan.setValue({ x:0, y:0})
        },
        // update location of circle to Animated.View
        onPanResponderMove: Animated.event([ 
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ]),

        
        onPanResponderRelease: (e, gesture) => {
          // drag circle in drop area
          if (this.isDropArea(gesture)) {
            Animated.timing(this.state.opacity, {
              toValue: 0,
              duration: 1000
            }).start(() =>
              this.setState({
                showDraggable: false
              })
            );
          } else {
            // circle returns to its initial location
            Animated.spring(this.state.pan, {
              toValue: { x: 0, y: 0 },
              friction: 5
            }).start();
          }
        }      
    });
  }

  isDropArea(gesture) {
    return gesture.moveY < 200;
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
    // get circle position by calculating animated value
    // create transform style
    // pass to Animated.View
      transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable) {
      return (
        <View style={{ position: "absolute" }}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.circle, {opacity:this.state.opacity}]}
          />
        </View>
      );
    }
  }
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  }
});