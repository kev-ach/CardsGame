import React, { useState } from 'react';
import { Component,
  StyleSheet,
  View } from 'react-native';
import Cards from './Cards';
import CardsTest from './CardsTest';
import cards from '../assets/card';
import styles from '../styles/styles';

const card_type = ['clubs', 'diamonds', 'spades', 'hearths'];
const card_numbers = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
];


export default class Deck extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      deck: this.shuffleCards(this.createCards()),
    };
    
  }

  createCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 13; j++) {
        cards.push(this.getCard(i, j));
      }
    }
    return cards;
  };
  
  shuffleCards = cards => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  };
  
  getCard = (typeIndex, cardIndex) => {
    return {
      type: card_type[typeIndex],
      number: card_numbers[cardIndex],
      image: cards[card_type[typeIndex]]['_' + card_numbers[cardIndex]],
    };
  };

  findZIndex (zIndex) {
    var array =[]
    for(var i= 0; i<=51; i++){
      array.push(i)
    }
    sum = 0;
    for(var j in array){
      if(zIndex<j){
        sum = sum +1 
      }
    }
    return sum
  }

  render(){
    
    return (
      
      <View style={styles.container_deck}>
        <View style={styles.half1_deck}>
          {this.state.deck.map((card, index) => {
            return (
              <Cards key={index} style={position='absolute'} card={card} zIndex={this.findZIndex(index)}/>
            );
          })}
        </View> 
      </View>
    );
  }

}