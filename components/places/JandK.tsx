import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function JandK() {
  return (
    <View>
        
      <View style={styles.container} >
        <Text style={styles.heading}>JAMMU & KASHMIR</Text>
        <Image 
            style={styles.image}
            source={{uri:'https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407-scaled.jpg',}}
                />
        <View >

            <Text style={styles.text}>Jammu and Kashmir is renowned for its breathtaking landscapes, rich culture, and historical sites. Here are some top tourist places to visit:
            </Text>
            <Text style={styles.text}>1. Vaishno Devi Temple : A famous Hindu pilgrimage site located on Trikuta Mountain, attracting millions of devotees annually.
            </Text>
            <Text style={styles.text}>2. Raghunath Temple : An ancient temple dedicated to Lord Rama, known for its impressive architecture.
            </Text>
            <Text style={styles.text}>3. Mansar Lake : A scenic lake surrounded by lush forests, ideal for picnics and boating.
            </Text>
            <Text style={styles.text}>4. Ranbireshwar Temple : A prominent Shiva temple featuring a large shivalinga and intricate carvings.
            </Text>
            <Text style={styles.text}>5. Bahu Fort : An ancient fort offering panoramic views of the city and the Tawi River.
            </Text>
            <Text style={styles.text}>6. Srinagar : The summer capital, famous for its stunning Dal Lake, houseboats, and Mughal gardens like Shalimar Bagh and Nishat Bagh.
            </Text>
            <Text style={styles.text}>7. Pahalgam : A picturesque town located at the confluence of the Lidder River and Sheshnag Lake, ideal for hiking and enjoying nature.
            </Text>
            <Text style={styles.text}>8. Sonamarg : Known as the "Meadow of Gold," it offers stunning landscapes and is a base for treks to the Thajiwas Glacier.
            </Text>
            <Text style={styles.text}>9. Kupwara : A less-explored area with beautiful valleys and serene landscapes, great for trekking and adventure activities.
            </Text>
            <Text style={styles.text}>10. Jammu and Kashmir Handicrafts : Explore local markets for exquisite pashmina shawls, carpets, and handcrafted items.
            </Text>
            <Text style={styles.text}>11. Dal Lake : Enjoy shikara rides and explore floating gardens, offering a unique experience of life on the water.
            </Text>
            <Text style={styles.text}></Text>
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
        width:'90%',
        height:'auto',
       backgroundColor:'#86C18F',
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
        color:'#7B4617',
        textShadowColor:'black',
        textShadowRadius:1,
    }
})
