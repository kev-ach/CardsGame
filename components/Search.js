import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View,TextInput,Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

//import Styles from "./assets/css/Styles"
//import AppNavigator from './navigation/AppNavigator';

export default class Search extends React.Component{

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

  render(){
    const { search } = this.state;

    return (
        <View>
            <SearchBar
                placeholder="Search..."
                onChangeText={this.updateSearch}
                value={search}
                lightTheme= {true}
                round= {true}
                barTintColor='#2222221A'
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flexDirection: 'column',
    alignItems: 'stretch',
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
