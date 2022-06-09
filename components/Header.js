import React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';
import HomepageWeb from "../screens/web/Homepage";
import HomepageMobile from "../screens/mobile/Homepage";
import ProfileWeb from "../screens/web/Profile";
import ProfileMobile from "../screens/mobile/Profile";
import {Link} from "@react-navigation/web";
import { scale } from "../utils/scale";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const {width, height} = Dimensions.get('window');

export default function Header(props) {
        return (
        <View style={styles.header} >
            <View
                style={styles.link}>
                <TouchableOpacity
                style={styles.link}
                title="Go to Profile"
                onPress={() => props.navigation.navigate('Profile', props.navigation)}>
                    <Text style={{color:'white', fontSize:RFValue(24, 580), margin: '50'}}>Profile</Text>
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
                    <Text style={{color:'white',fontSize:scale(18), margin: '50'}}>Home</Text>
                </TouchableOpacity>
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
        margin: '100',
        padding:'100',
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
