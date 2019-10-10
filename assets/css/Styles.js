import { StyleSheet } from "react-native"

export default StyleSheet.create({
   
    container: {
      flex: 60,
      height: 300,
      backgroundColor: 'skyblue',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    container2: {
      flex: 1,
      height: 300,
      backgroundColor: 'skyblue',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    textView: {
      flex: 90,
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems: 'stretch',
      paddingLeft: 10,
    },
    message: {
      flex: 10,
      backgroundColor: 'white',
      flexDirection: 'row',
    }

})

