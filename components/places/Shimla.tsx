import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function Shimla() {
  return (
    <View>
        
      <View style={styles.container} >
        <Text style={styles.heading}>SHIMLA</Text>
        <Image 
            style={styles.image}
            source={{uri:'https://www.oyorooms.com/blog/wp-content/uploads/2017/11/Feature-Image-min-12.jpg',}} />
           
        <View >
            <Text style={styles.text}>Shimla, the capital of Himachal Pradesh, is known for its beautiful landscapes and colonial architecture. Here are some popular tourist places to visit in Shimla:
            </Text>
            <Text style={styles.text}>1. The Ridge: A large open space in the heart of Shimla, offering stunning views of the mountains and a great spot for leisure walks.
            </Text>
            <Text style={styles.text}>2. Mall Road: A bustling street lined with shops, restaurants, and cafes, perfect for shopping and dining.
            </Text>
            <Text style={styles.text}>3. Jakhoo Temple: An ancient temple dedicated to Lord Hanuman, located on Jakhoo Hill, providing panoramic views of the city.
            </Text>
            <Text style={styles.text}>4. Christ Church: One of the oldest churches in North India, known for its neo-Gothic architecture and beautiful stained glass windows.
            </Text>
            <Text style={styles.text}>5. Summer Hill: A serene area ideal for nature walks, with beautiful views and a peaceful atmosphere.
            </Text>
            <Text style={styles.text}>6. Kufri: A nearby hill station famous for its ski slopes and adventure activities like horse riding and hiking.
            </Text>
            <Text style={styles.text}>7. Lakkar Bazaar: A vibrant market known for wooden handicrafts, souvenirs, and local snacks.
            </Text>
            <Text style={styles.text}>8. Shimla State Museum: Showcasing the cultural heritage of Himachal Pradesh through artifacts and exhibits.
            </Text>
            <Text style={styles.text}>9. Viceregal Lodge: Also known as Rashtrapati Niwas, this historic building offers insights into the British colonial era.
            </Text>
            <Text style={styles.text}>10. Chail: A short drive from Shimla, known for its beautiful palace, cricket ground, and scenic views.
            </Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}></Text>
        </View>
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
        width:'90%',
        height:'auto',
       backgroundColor:'#4F3BC2',
        margin:20,
        marginTop:10,
        borderRadius:20,
        shadowColor:'green',
        shadowRadius:50
    },

    heading:{    
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25,
        color:'#EAF0F1',
        margin:10,
        textShadowColor:'black',
        textShadowRadius:9,
    },

    image:{
        width:'auto',
        height:300,
        padding:4,
        margin: 7,
        borderRadius:20,
        shadowColor:'#FAD02E',
        marginTop:0
    },

    text:{
        padding:10,
        fontSize:15,
        fontWeight:'semibold',
        color:'#DAD5F2',
        textShadowColor:'black',
        textShadowRadius:3,
    }
    
})
