import React, { Component } from "react";
import { StyleSheet, View, Text, PanResponder, Animated } from "react-native";
import Cards from './Cards';

export default class Pioches extends React.Component {
    render() {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.dropZone}>
            <Text style={styles.text}>Pioches - Drop cards here!</Text>
          </View>
          <View style={styles.ballContainer} />
          <View style={styles.row}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1
    },
    ballContainer: {
      height:200
    },
    row: {
      flexDirection: "row"
    },  
    dropZone: {
      height: 200,
      backgroundColor: "#00334d"
    },
    text: {
      marginTop: 25,
      marginLeft: 5,
      marginRight: 5,
      textAlign: "center",
      color: "#fff",
      fontSize: 25,
      fontWeight: "bold"
    }
  });