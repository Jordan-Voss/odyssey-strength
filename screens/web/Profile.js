import React from 'react';
import {View, Text, StyleSheet, ScrollView,Button, Platform} from 'react-native';
import {Link} from "@react-navigation/web";
import Header from "../../components/Header";


export default class Profile extends React.Component {
    static path = "profile";

    render() {
        return(
        <ScrollView>
            <View>
                <Header></Header>
            </View>
            <View style={styles.container}>

            <Text>This is the web profile screen</Text>
            </View>
        </ScrollView>
)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})