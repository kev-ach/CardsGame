
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View,TextInput,Text } from 'react-native';
import SearchModal from 'react-native-search-modal';

//import Styles from "./assets/css/Styles"
//import AppNavigator from './navigation/AppNavigator';

export default class Search extends React.Component{
    
  render(){
    const data = [
        { key : 'ATL', text : 'Hartsfield Jackson Atlanta International' },
        { key : 'PEK', text : 'Beijing Capital International' },
        { key : 'DXB', text : 'Dubai International' },
        { key : 'ORD', text : 'Chicago O’Hare International' },
        { key : 'HND', text : 'Tokyo International' },
        { key : 'LHR', text : 'London Heathrow' },
        { key : 'LAX', text : 'Los Angeles International' },
    ];
    return (
        <View styles={styles.container}>
            <View style={{paddingTop: 100}}>
                <SearchModal
                    label="Your Destination"
                    data={data}
                    value="CGK"
                    onSelect={(result)=>{ console.log(result) }}
                />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  message: {
    flex: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  titleFlex: {
    flex: 1,
    height: 50, 
    backgroundColor: 'powderblue'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color:'white',
  },
});

