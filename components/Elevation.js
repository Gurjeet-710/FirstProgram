import { StyleSheet, Text, View, ScrollView, Image, Touchable, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import React from 'react'
import PlaceInfo from './places/Delhi'


export default function Elevation({ navigation }) {

    return (

        <View >
             <StatusBar barStyle={'light-content'} backgroundColor={'#7C45A9'} ></StatusBar>
            <Text style={styles.Heading}>
                TOURISUM</Text>

            <View style={styles.container} >
                <Image
                    style={{ width: 35, height: 30, margin: 6 }}
                    source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_1280.png' }}
                />
                <TextInput
                    style={styles.search}
                    placeholder='search...'
                    textAlign='left'
                />
            </View>

           
            <View>
            <ScrollView horizontal={true}>
                <View style={styles.container2}>
                    <View style={[styles.block, styles.blockColor]}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Delhi")}>
                            <Image style={styles.image}
                                source={{ uri: 'https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg', }}
                            />
                            <Text style={styles.Txt} >DELHI</Text>
                        </TouchableOpacity>


                    </View>
                    <View style={[styles.block, styles.blockColor]} >
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Shimla")}>
                            <Image style={styles.image}
                                source={{ uri: 'https://www.oyorooms.com/blog/wp-content/uploads/2017/11/Feature-Image-min-12.jpg', }} />
                            <Text style={styles.Txt}>SHIMLA</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.block, styles.blockColor]}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Jaipur")}>
                            <Image style={styles.image}
                                source={{ uri: 'https://th.bing.com/th/id/OIP.Paq060V_sg9Y-W-iwWnhdQHaFg?rs=1&pid=ImgDetMain', }}
                            />
                            <Text style={styles.Txt}>JAIPUR</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.block, styles.blockColor]}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("JandK")}>
                            <Image style={styles.image}
                                source={{ uri: 'https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407-scaled.jpg', }}
                            />
                            <Text style={styles.Txt}>J & K</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '90%',
        height: '12%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        margin: 10,
        color: '#25CCF7',
        marginLeft: 20,
        flexDirection: 'row'

    },
    Heading: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        fontStyle: 'italic'
    },
    search: {
        // flex: 1,
        padding: 2,
    },

    container2: {
        // flex: 1,
        flexDirection: 'row'
    },
    block: {
        // flex: 1,
        alignItems: 'center',
        width: 150,
        height: 200,
        margin: 5,
        borderRadius: 10,

    },

    Elivation: {
        elevation: 30
    },

    image: {
        width: 150,
        height: 202,
        borderRadius: 10,
        marginBottom: -22,
        marginTop: 0,
    },

    blockColor: {
        backgroundColor: 'black',
    },

    Txt: {
        // flex: 1,
        color: 'white',
        textShadowColor:'black',
        textShadowRadius:5,
        fontWeight:'bold',
        fontSize: 16,
        elevation: 10,
        textAlign:'center'
    }

})
