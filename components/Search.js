import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View,TextInput,Text,FlatList, ActivityIndicator,TouchableWithoutFeedback, Alert } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import styles from '../styles/styles';


export default class Search extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [{
        id: 1,
        image: 'https://www.fivelittlechefs.com/wp-content/uploads/2016/02/stpatricks-soft-pretzel.jpg',
        food: 'Cinnamon sugar soft pretzel',
        title: 'Perfect soft pretzels',
        user: 'https://0.gravatar.com/avatar/9b1a243cd301d1ba99865937f4e7cc94?s=130&d=mm&r=g',
        by: 'Kimberly',
      },{
        id: 2,
        image: 'https://www.fivelittlechefs.com/wp-content/uploads/2012/02/strawberry-rocky-road-recipe.jpg',
        food: 'Strawberry Rocky Road',
        title: 'Awesome strawberry aww',
        user: 'https://0.gravatar.com/avatar/9b1a243cd301d1ba99865937f4e7cc94?s=130&d=mm&r=g',
        by: 'Kimberly',
    },
    {
        id: 3,
        image: 'https://www.fivelittlechefs.com/wp-content/uploads/2016/02/valentine-coconut-macaroons.jpg',
        food: 'Coconut Macaroons',
        title: 'Coconut macaroons is truly an easy recipe',
        user: 'https://0.gravatar.com/avatar/9b1a243cd301d1ba99865937f4e7cc94?s=130&d=mm&r=g',
        by: 'Kimberly',
    }],
      error: null,
    };
    this.arrayholder = [];
  }

  componentDidMount() {
    this.arrayholder = this.state.data ;
  }


  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.by.toUpperCase()}${item.food.toUpperCase()}${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Rechercher"
        containerStyle={{backgroundColor: 'transparent'}}
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  twoOptionAlertHandler=()=>{
    //function to make two option alert
    Alert.alert(
      //title
      '',
      //body
      'Rejoindre la partie?',
      [
        {text: 'Oui', onPress: () => this.props.navigation.navigate('Game')},
        {text: 'Non', onPress: () => console.log('No Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  }
    
  render(){
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem 
              title={`${item.by} `}
              subtitle={item.title}
              onPress={this.twoOptionAlertHandler}
            />
          )}
          keyExtractor={item => item.food}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

