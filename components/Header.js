import React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';
import HomepageWeb from "../screens/web/Homepage";
import HomepageMobile from "../screens/mobile/Homepage";
import ProfileWeb from "../screens/web/Profile";
import ProfileMobile from "../screens/mobile/Profile";
import {Link} from "@react-navigation/web";


const {width, height} = Dimensions.get('window');

export default class Header extends React.Component {
    render() {
        return (
        <View style={styles.header} >
            <View>
                <TouchableOpacity
                title="Go to Profile"
                onPress={() => this.props.navigation.navigate('Profile', this.props.navigation)}>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                title="Go to Homepage"
                onPress={() => this.props.navigation.navigate('Homepage', this.props.navigation)}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
            )
        }
    }

const styles = StyleSheet.create({
    link: {
        alignItems: 'flex-end',
        underline: 'none',
        textColor: 'white',
        // padding:'0 1%',
        // justifyContent:'space-between',
        // alignItems:'flex-end',
        // float: 'right',
    },
        header: {
            flex: 1,
            justifyContent:'space-evenly',
            flexDirection: 'row',
            // height: height/10,
            // width: '100%',
            alignItems: 'flex-end',
            marginRight:'0%',
            backgroundColor: 'transparent',
        },
});
