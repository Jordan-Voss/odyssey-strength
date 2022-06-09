import React from 'react';
import {View, Text, StyleSheet, ScrollView,Button, TouchableOpacity, Platform} from 'react-native';
import {Link} from "@react-navigation/web";
import Header from "../../components/Header";


export default function Profile(props) {
    // static path = "profile";
        return(
        <ScrollView
        style={styles.scrollview}
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        >
            <View>
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