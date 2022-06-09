import React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';
import HomepageWeb from "../screens/web/Homepage";
import HomepageMobile from "../screens/mobile/Homepage";
import ProfileWeb from "../screens/web/Profile";
import ProfileMobile from "../screens/mobile/Profile";
import {Link} from "@react-navigation/web";
import { scale } from "../utils/scale";
import { useWindowDimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


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
                style={styles.navLink}

                    title="Go to Profile"
                    onPress={() => props.navigation.navigate('Profile', props.navigation)}>
                    <Text style={{fontSize: fontDimension*20, color:'white'}}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.navLink}
                title="Go to Homepage"
                onPress={() => props.navigation.navigate('Homepage', props.navigation)}>
                <Text style={{fontSize: fontDimension*20, color: 'white'}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.navLink}
                >
                <AntDesign name="instagram" size={fontDimension*20} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
            )
    }

const styles = StyleSheet.create({
    container: {
        padding: 8,
        // backgroundColor: "#ffffff",
    },
    rowContainer: {
        flexDirection:'row',
        marginTop:'-25%',
    },
    navLink:{
        paddingLeft: 45,
        // color: "white",
        // fontSize: fontDimension*20,
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
