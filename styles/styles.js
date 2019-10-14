import { StyleSheet } from 'react-native';


let CARD = 50;
export default (styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingTop:100
    },
    titleFlex: {
        flex: 1,
        height: 50,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color:'grey',
    },
    search: {
        flex: 5,
    },
    buttonJouer: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'flex-end',
        bottom:10
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 36
    },
    button: {
        width: 300,
    },
    container_settings: {
        padding: 20,
        flexDirection: 'row',
    },
    half1_settings: {
        flex: 1,
    },
    half2_settings: {
        flex: 3,
        backgroundColor: 'red',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent:"center"
    },
    textPseudo: {
        padding: 10,
        fontSize: 18,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    text: {
        fontSize: 18
    },
    headerFooterContainer: {
        padding: 10,
        alignItems: 'center'
    },
    clearButton: { backgroundColor: 'grey', borderRadius: 5, marginRight: 10, padding: 5 },
    optionContainer: {
        padding: 10,
        backgroundColor:'transparent',
    },
    optionInnerContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    box: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    containerPicker: {
        padding: 15,
    },
    container_search: {
        backgroundColor: 'skyblue',
        flexDirection: 'column',
        alignItems: 'stretch',
      },
    titleFlex: {
        flex: 1,
        height: 50,
    },
    title_search: {
        fontSize: 30,
        textAlign: 'center',
        color:'white',
    },
    container_card: {
        flex: 1,
        flexDirection: 'row',
    },
    card      : {
        borderColor:'red',
        backgroundColor     : '#1abc9c',
        width               : CARD*2,
        height              : CARD*3,
    },
    container_deck: {
        flex: 1,
        flexDirection: 'row',
    },
    half1_deck: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent:"center",
        alignItems:"center",
    },
    half2_deck: {
        flex: 2,
        backgroundColor: 'transparent',
    },
    container_game: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        zIndex:1
      },
      search: {
        flex: 5,
      },
      buttonJouer: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'flex-end',
        bottom:10
      },
      bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 36
      },
      button: {
        width: 300,
      },
      players: {
        flex: 1,
        backgroundColor: 'red'
      },
      deck_Pioches: {
        flex: 3,
        backgroundColor: 'grey',
        zIndex:2
      },
      carte: {
        flex: 2,
        backgroundColor: 'skyblue',
        zIndex:1
      },
      modalContainer: {
        height: 415 ,
        width: '90%',
        marginTop: 370,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth: 2,
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        backgroundColor: 'white'
      },
      text_creer_partie: {
        width: 300,
        marginTop: -100,
        fontSize: 25,
        textAlign: 'center',
        borderWidth: 2,
      },
      input_cree_partie: {
        width: 250,
        height: 40,
        marginTop: 30,
        backgroundColor: '#F1F1F1',
        borderRadius: 4,
      },
      text_nbr_joueur: {
        width: 300,
        marginTop: 20,
        fontSize: 25,
        textAlign: 'center',
      },
      btn_close_modal: {
        marginTop: 50,
      },
      innerContainer: {
        alignItems: 'center',
      }
}));
