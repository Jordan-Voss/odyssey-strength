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
    const font = useWindowDimensions().fontScale;
        return (
        <View style={styles.header} >
            <View
                style={styles.link}>
                <TouchableOpacity
                style={styles.link}
                title="Go to Profile"
                onPress={() => props.navigation.navigate('Profile', props.navigation)}>
                    <Text style={{color:'white', fontSize: font*20, margin: '50'}}>Profile</Text>
                </TouchableOpacity>
            </View>
            <View                style={styles.link}>

                
            </View>
            <View
                style={styles.link}>
                <TouchableOpacity
                style={styles.link}
                title="Go to Homepage"
                onPress={() => props.navigation.navigate('Homepage', props.navigation)}>
                    <Text style={{color:'white',fontSize: font*20, margin: '50'}}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.link}>

            </View>
            <View
                style={styles.link}>
            <AntDesign name="instagram" size={font*20} color="white" style={ {margin: '50',         flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'space-between',
        marginTop:'-40%',
        // margin: '100',
        // padding:'100',
        width:'100%',}}/>
            </View>
        </View>
            )
    }

const styles = StyleSheet.create({
    link: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'space-between',
        marginTop:'-40%',
        // margin: '100',
        // padding:'100',
        width:'100%',
        textColor: 'white',
    },
        header: {
            flex: 1,
            justifyContent:'space-between',
            flexDirection: 'row',
            // height: '100px',
            width: '100%',
            alignItems: 'space-between',
            // marginRight:'0%',
            backgroundColor: 'transparent',
        },
});
