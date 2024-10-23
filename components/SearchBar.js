import { StyleSheet, Text, View, Image,TextInput } from 'react-native'
import React from 'react'

export default function SearchBar() {
  return (
   
      <View style={styles.container} >
                <Image
                    style={{ width: 30, height: 25, margin: 6 }}
                    source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_1280.png' }}
                />
                <TextInput
                    style={styles.search}
                    placeholder='Where you want to go ?'
                    textAlign='left'
                />
            </View>
  
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,                                                                                                 
        width: '90%',
        height: '6%',
        borderWidth: 1.2,
        borderColor: 'black',
        borderRadius: 15,
        margin: 10,
        color: '#25CCF7',
        marginLeft: 20,
        flexDirection: 'row',
        borderStyle:'dashed',
        backgroundColor:'#D9CBD0'
    },
    search: {
        flex: 1,
        padding: 2,
    },
    
})