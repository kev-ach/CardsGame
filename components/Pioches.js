import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import commonStyle from '../styles';
import * as Actions from '../actions';

class Pioches extends React.Component {
  render() {
    return (
      <View>
        <View>
          {this.props.deck.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                this.props.cardRequest();
              }}>
              <Image
                resizeMode="stretch"
                source={require('../assets/cards/green_back.png')}
                style={[commonStyle.card]}
              />
            </TouchableOpacity>
          ) : null}
          {this.props.openDeck.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                this.props.addMyDeck();
              }}>
              <Image
                resizeMode="stretch"
                source={
                  this.props.openDeck[this.props.openDeck.length - 1].image
                }
                style={[commonStyle.card]}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    openDeck: state.dataReducer.openDeck,
    deck: state.dataReducer.deck,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pioches);
