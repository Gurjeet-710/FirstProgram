import { StyleSheet, Text, View, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import PlaceInfo from './places/PlaceInfo'

export default function Test() {
    
  return (
    <View >
    
        <ScrollView horizontal={true}>
     <View style={styles.container}>
        <View  style={[ styles.block, styles.blockColor]}>
            
            <Image style={styles.image}
                source={{uri:'https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg',}}
                />
            <Text style={{color:'white'}} >DELHI</Text>
       
        
         </View>
        <View style={[ styles.block, styles.blockColor]} >
             <Image style={styles.image}
                source={{uri:'https://www.oyorooms.com/blog/wp-content/uploads/2017/11/Feature-Image-min-12.jpg',}} />
            <Text style={{color:'white'}}>SHIMLA</Text>
       
        </View>
        <View style={[ styles.block, styles.blockColor]}>
             <Image style={styles.image}
                source={{uri:'https://th.bing.com/th/id/OIP.Paq060V_sg9Y-W-iwWnhdQHaFg?rs=1&pid=ImgDetMain',}}
                />
            <Text style={{color:'white'}}>JAIPUR</Text>
        
        </View>
        <View style={[ styles.block, styles.blockColor]}>
             <Image style={styles.image}
                source={{uri:'https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407-scaled.jpg',}}
                />
            <Text style={{color:'white'}}>J & K</Text>
         </View>
         
    </View>
    </ScrollView>
    </View>
    
  )
}


const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection: 'row' 
     },

    block:{
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 150,
        height: 250,
        margin:5,
        borderRadius:10
    },
    Elivation:{
       elevation:30
    },

    image:{
        width: 150,
        height:231,
        borderTopRightRadius:10,
        borderTopLeftRadius:10
    },

    blockColor:{
        backgroundColor:'black'
    },
    

})
