import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions,TouchableOpacity } from 'react-native';
import HomepageWeb from "../screens/web/Homepage";
import HomepageMobile from "../screens/mobile/Homepage";
import AboutWeb from "../screens/web/About";
import Coaching from "../screens/web/Coaching";

import AboutMobile from "../screens/mobile/About";
import {Link} from "@react-navigation/web";
import { scale } from "../utils/scale";
import { useWindowDimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import * as Linking from 'expo-linking';



export default function Header(props) {
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    const fontDimension = useWindowDimensions().fontScale;

        return (
        <View 
        style={styles.container}
        >
            <View style={styles.rowContainer}>
            <TouchableOpacity
                // style={styles.link}
                style={{ flex: 1}} 
                    title="Go to About"
                    onPress={() => props.navigation.navigate('About', props.navigation)}>
                    <Text style={{fontSize: fontDimension*20, color:'white'}}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity
                // style={styles.link}
                style={{ flex: 1}} 

                    title="Go to About"
                    onPress={() => props.navigation.navigate('Coaching', props.navigation)}>
                    <Text style={{fontSize: fontDimension*20, color:'white'}}>Coaching</Text>
                </TouchableOpacity>
                <TouchableOpacity
                // style={styles.link}
                style={{ flex: 1,}} 

                    title="Go to About"
                    onPress={() => props.navigation.navigate('Homepage', props.navigation)}>
                    
                      <Image
                    //   style={{ flex: 1, backgroundColor: "red" }} 
                    style={styles.tinyLogo}
                    source={require('../assets/ody2.png')}
                ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                style={{ flex: 1}} 
                title="Go to Homepage"
                onPress={() => props.navigation.navigate('Resources', props.navigation)}>
                <Text style={{fontSize: fontDimension*20, color: 'white'}}>Resources</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://instagram.com/odysseystrength')}
                style={{ flex: 1}}                 >
                <AntDesign name="instagram" size={fontDimension*20} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
            )
    }

const styles = StyleSheet.create({
    container: {
        flex:1,
        top:10,
        width:'100%',
        // backgroundColor:'black',
        // flexDirection:'row',
        // marginTop:'-20%',
        // justifyContent:'space-between',

        // height: '100%',
        // padding: 8,
        // backgroundColor: "#ffffff",
    },
    rowContainer: {
        position:'fixed',
        // backgroundColor:'rgba(52, 52, 52, 0.2)',
        // opacity:15,

        // top:20,
        // left:100,

        // // flex:1,
        // alignSelf: 'stretch',

        width: '100%',
        // top:0,
        // padding:'2%',
        // minHeight:'10%',
        flexDirection:'row',
        marginTop:'-20vh',
        marginLeft:'10vw',
        // backgroundColor:'rgba(52, 52, 52, 0.2)',
        // justifyContent: 'space-evenly',
        // backgroundColor:'red',
    },
    // navLink:{
    //     paddingLeft: 45,
    //     // color: "white",
    //     // fontSize: fontDimension*20,
    // },
    tinyLogo: {
        flex:1,
        // backgroundColor:'rgba(52, 52, 52, 0.2)',
        // flexDirection:'row',
        // position:'absolute',
        // marginLeft:'-800%',
        // paddingTop:'10%',
        marginTop:'-3vh',
        width: 100,
        height: 100,
      },
    // link: {
    //     flex:1,
    //     flexDirection:'row',
    //     justifyContent:'space-between',
    //     alignItems: 'space-between',
    //     marginTop:'-70%',
    //     // margin: '100',
    //     // padding:'100',
    //     width:'100%',
    //     textColor: 'white',
    // },
    //     header: {
    //         flex: 1,
    //         justifyContent:'space-between',
    //         flexDirection: 'row',
    //         // height: '100px',
    //         width: '100%',
    //         alignItems: 'space-between',
    //         // marginRight:'0%',
    //         backgroundColor: 'transparent',
    //     },
});
