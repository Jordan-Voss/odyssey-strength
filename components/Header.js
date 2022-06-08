import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
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
                <Text style={styles.link}></Text>
                </View>
                <View>
                <Text style={styles.link}></Text>
                </View>
                <View>
                <Text style={styles.link}></Text>
                </View>
                <View>
                <Text style={styles.link}></Text>
                </View>
                <View>
                <Text style={styles.link}></Text>
                </View>
                <View>
                <Text style={styles.link}>I'm header</Text>
                </View>
                <View>
                <Link style={styles.link} routeName='Profile'>go to profile</Link>
                </View>
                <View>
                <Link style={styles.link} routeName='Homepage'>go to Home</Link>
                </View>
            </View>
            )}
    }
    
const styles = StyleSheet.create({
    link: {
        alignItems: 'flex-end',
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
            backgroundColor: 'red',
        },
});
