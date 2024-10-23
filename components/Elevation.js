import { StyleSheet, Text, View, ScrollView, Image, Touchable, TouchableOpacity, StatusBar, TextInput, ImageBackground } from 'react-native'
import React from 'react'
import PlaceInfo from './places/Delhi'
import SearchBar from './SearchBar'


export default function Elevation({navigator}) {

    return (
        <View >
             <StatusBar barStyle={'light-content'} backgroundColor={'#7C45A9'} ></StatusBar>
             <ImageBackground 
                source={require('./assets/image/background.jpg')}
                style={styles.BackGround}
             >
            <Text style={styles.Heading}>
                TOURISUM</Text>
                
            <SearchBar />
           
            
                
                <View style={styles.container}>
                {/* <ImageBackground 
                source={require('./assets/image/background1.png')}
                style={styles.BackGround2}
             > */}
               
                <ScrollView horizontal={true} >
                   
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
                    
                    </ScrollView>
                    {/* </View> */}
                    {/* </ImageBackground> */}
                   
                </View>
           
            
        </ImageBackground>
            </View>
           
        

    )
}


const styles = StyleSheet.create({
    BackGround:{
        // flex:1,
        resizeMode: 'cover',  
        justifyContent: 'flex-start',
        width:'100%',
        height:'100%',
        // opacity:0.3  
        },
        BackGround2:{
            flex:1,
            resizeMode:'contain',  
            justifyContent: 'center',
            width:'100%',
            height:'100%',
             
            },
   
   
    Heading: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#280C0D',
        fontStyle: 'italic'

    },
   

    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        // backgroundColor:'#D5E4EB',

        // height:500
  
        
    },
    block: {
        // flex: 1,
        alignItems: 'center',
        width: 150,
        height: 200,
        margin: 5,
        borderRadius: 10,
        marginTop:0,
       
    },

    Elivation: {
        elevation: 30
    },

    image: {
        width: 150,
        height: 200,
        borderRadius: 10,
        marginBottom: -25,
        // marginTop: 0,
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
