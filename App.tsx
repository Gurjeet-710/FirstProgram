import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Test from './components/Elevation'
import SearchBar from './components/SearchBar'
import PlaceInfo from './components/places/Delhi'
import Shimla from './components/places/Shimla'
import Jaipur from './components/places/Jaipur'
import JandK from './components/places/JandK'
import ClickView from './components/ClickView'




const App = () => {
  return (
    <View style={{ flex: 1 }}>
      
      <ClickView />
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default App