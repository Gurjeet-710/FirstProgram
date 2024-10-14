import { StyleSheet, Text, View , TextInput, Image} from 'react-native'
import React from 'react'

export default function SearchBar() {
  return (
    <View >
    <View style={styles.container} >
     
        <Image 
        style={{width:48, height:38, margin:4 }}
            source={{uri:'https://static.vecteezy.com/system/resources/previews/009/645/380/original/search-icon-logo-illustration-magnifying-glass-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' }}
        />
        
        <TextInput
        style = {styles.search} 
        placeholder='search...'
        textAlign='left'
        
        />
      </View>
    </View>
  
  )
}
    
const styles = StyleSheet.create({
    container:{
        width: 370,
        height: 48,
        borderWidth:1,
        borderColor:'black',
        borderRadius:15,
         margin:10,
        color:'#25CCF7',
        marginLeft:20,
        flexDirection:'row'

    },
    search:{
       flex:1,
       padding:2,
       
    
    }
})