import React from 'react';
import {View, Text, useColorScheme, StyleSheet} from 'react-native';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme () === 'dark'
    return(
      
        <View style={styling.text}>
            <Text > 
               Hello World!
            </Text>
            <Text style={styling.text}>
             <Text style={isDarkMode ? styling.text: styling.text}>
                Second line of React Native
            </Text>
            </Text>
        </View>
   
    )

}
const styling = StyleSheet.create({
    container:{
        textAlign:"center",
        color: 'red',
        padding: 10,
        height: 90,
        fontSize: 20,
        margin: 10,
        borderWidth: 5,
        borderColor:'green',
        borderBlockEndColor:'yellow',
        backgroundColor:"grey",
        textDecorationColor: 'yellow',
        textShadowColor: 'black',
        textShadowRadius: 10,
        lineHeight:50,
        elevation: 30
    },
    text:{
        color: 'red',
        fontSize: 14,
        flex:1,
       alignItems:'center',
        justifyContent: 'center'

    }
})

export default AppPro