import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function Jaipur() {
  return (
    <View>
        
      <View style={styles.container} >
        <Text style={styles.heading}>JAIPUR</Text>
        <Image 
            style={styles.image}
            source={{uri:'https://th.bing.com/th/id/OIP.Paq060V_sg9Y-W-iwWnhdQHaFg?rs=1&pid=ImgDetMain',}}
                />
        <View >

            <Text style={styles.text}>Jaipur, the capital of Rajasthan, is known for its rich history and stunning architecture. Here are some must-visit tourist places in Jaipur:
            </Text>
            <Text style={styles.text}>1. Amber Fort : A majestic fort located on a hilltop, known for its beautiful palaces and stunning views.
            </Text>
            <Text style={styles.text}>2. City Palace : A royal residence with a blend of Rajasthani and Mughal architecture. The museum here showcases artifacts from the royal family.
            </Text>
            <Text style={styles.text}>3. Hawa Mahal : Also known as the "Palace of Winds," this iconic structure features intricate latticework and numerous windows.
            </Text>
            <Text style={styles.text}>4. Jantar Mantar : An astronomical observatory with impressive instruments, it’s a UNESCO World Heritage Site.
            </Text>
            <Text style={styles.text}>5. Nahargarh Fort : Offers panoramic views of the Pink City and is a great spot for sunset.
            </Text>
            <Text style={styles.text}>6. Jaipur Markets : Explore the local bazaars like Johari Bazaar and Bapu Bazaar for jewelry, textiles, and handicrafts.
            </Text>
            <Text style={styles.text}>7. Albert Hall Museum : A museum displaying a rich collection of artifacts, including paintings, textiles, and decorative arts.
            </Text>
            <Text style={styles.text}>8. Birla Mandir : A beautiful temple made of white marble, dedicated to Lord Vishnu and Goddess Lakshmi.
            </Text>
            <Text style={styles.text}>9. Chokhi Dhani : A cultural village that showcases traditional Rajasthani culture with food, dance, and craft demonstrations.
            </Text>
            <Text style={styles.text}>10. Jaipur Wax Museum : Features lifelike wax figures of celebrities and historical figures.
            </Text>
        </View>
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:370,
        height:1150,
       backgroundColor:'#4F2212',
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
        width:356,
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
