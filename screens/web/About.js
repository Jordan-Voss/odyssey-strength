import React from 'react';
import {View, Text, StyleSheet, ScrollView,Button, TouchableOpacity, Platform} from 'react-native';
import {Link} from "@react-navigation/web";
import Header from "../../components/Header";
import { useWindowDimensions } from 'react-native';



export default function About(props) {
    // static path = "About";
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    return(
        <ScrollView style={{    padding:20,flex: 1, position:'absolute'}}>
            <View style={{    width: windowWidth,
                backgroundColor:'red',
                height: 200,
                    position: 'relative',
                    top: 0,
                    left: 0}} >
            </View>
            <Header navigation={props.navigation} style={{marginTop:-windowHeight/2,width: windowWidth}}></Header>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => console.log(props)}>
                    <Text>About</Text>
                </TouchableOpacity> 
            </View>
        </ScrollView>
)

}

const styles = StyleSheet.create({
    scrollview:{
backgroundColor:'red',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'red',
    }
})