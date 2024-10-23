import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function Delhi({ navigation },props) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container} >
          <Text style={styles.heading}>DELHI</Text>
          <Image
            style={styles.image}
            source={{ uri: 'https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg', }}
          />
          <View >
            <Text style={styles.text}>Delhi is rich in history, culture, and modern attractions. Here are some must-visit tourist places in the city:</Text>
            <Text style={styles.text}> 1. Red Fort: A UNESCO World Heritage site, this iconic fort is a symbol of India’s rich history and Mughal architecture.</Text>
            <Text style={styles.text}> 2. India Gate: A war memorial that honors Indian soldiers, surrounded by lush gardens.</Text>
            <Text style={styles.text}> 3. Qutub Minar: Another UNESCO World Heritage Site, this impressive minaret showcases Indo-Islamic architecture.</Text>
            <Text style={styles.text}> 4. Humayun’s Tomb: A beautiful garden tomb, it’s a precursor to the Taj Mahal.</Text>
            <Text style={styles.text}> 5. Lotus Temple: Known for its unique lotus-shaped architecture, it's a serene place for meditation.</Text>
            <Text style={styles.text}> 6. Akshardham Temple: A modern marvel showcasing traditional Indian art and culture.</Text>
            <Text style={styles.text}> 7. Chandni Chowk: A bustling market area where you can experience local street food and shop for textiles.</Text>
            <Text style={styles.text}> 8. Connaught Place: A shopping and dining hub with colonial-era architecture.</Text>
            <Text style={styles.text}> 9. Jama Masjid: One of the largest mosques in India, known for its stunning architecture.</Text>
            <Text style={styles.text}>10. Raj Ghat: The memorial dedicated to Mahatma Gandhi, set in a peaceful garden.</Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}></Text>


          </View>
        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    height: '100%',
    backgroundColor: '#FAD02E',
    margin: 20,
    marginTop: 10,
    borderRadius: 20,
    shadowColor: 'green',
    shadowRadius: 50
  },

  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#EAF0F1',
    margin: 10,
    textShadowColor: 'black',
    textShadowRadius: 9
  },

  image: {
    width: '95%',
    height: 300,
    padding: 4,
    margin: 7,
    borderRadius: 20,
    shadowColor: '#FAD02E',
    marginTop: 0
  },

  text: {
    padding: 10,
    fontSize: 15,
    fontWeight: 'semibold',
    color: '#000000',
    textShadowColor: 'white',
    textShadowRadius: 9
  }

})
