import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"


import Test from './Elevation';
import PlaceInfo from './places/Delhi';
import Shimla from './places/Shimla';
import Jaipur from './places/Jaipur';
import JandK from './places/JandK';
import Delhi from './places/Delhi';

const stack = createNativeStackNavigator();

export default function ClickView() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="Test"
            component={Test}
            options={{ headerShown: (false) }}

          />
          <stack.Screen
            name='Delhi'
            component={Delhi}
          // options={{headerShown:(false)}}
          />

          <stack.Screen
            name='Shimla'
            component={Shimla}
          // options={{headerShown:(false)}}
          />
          <stack.Screen
            name='Jaipur'
            component={Jaipur}
          // options={{headerShown:(false)}}
          />
          <stack.Screen
            name='JandK'
            component={JandK}
          // options={{headerShown:(false)}}
          />

        </stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({})