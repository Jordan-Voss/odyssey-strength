import React from 'react';
import {View, Text, StyleSheet, ScrollView,Button, TouchableOpacity, Platform} from 'react-native';
import {Link} from "@react-navigation/web";
import Header from "../../components/Header";


export default class Profile extends React.Component {
    static path = "profile";
    render() {
        return(
        <ScrollView
        style={styles.scrollview}
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        >
            <View>
                <Header navigation={this.props.navigation}></Header>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => console.log(this)}>
                    <Text>Profile</Text>
                </TouchableOpacity> 
            </View>
        </ScrollView>
)
}
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