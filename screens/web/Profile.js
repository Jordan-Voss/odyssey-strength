import React from 'react';
import {View, Text, StyleSheet, ScrollView,Button, TouchableOpacity, Platform} from 'react-native';
import {Link} from "@react-navigation/web";
import Header from "../../components/Header";
import { useWindowDimensions } from 'react-native';



export default function Profile(props) {
    // static path = "profile";
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
        return(
        <ScrollView
        style={styles.scrollview}
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        >
                        <View style={{position:'absolute',   justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
    top: windowHeight*0.1,
    right: windowWidth*0.08,}}>
                <Header navigation={props.navigation}></Header>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => console.log(props)}>
                    <Text>Profile</Text>
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