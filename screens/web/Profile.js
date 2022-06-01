import React from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import {Link} from "@react-navigation/web";

export default class Profile extends React.Component {
    static path = "profile";

    render() {
        return(
        <View style={styles.container}>
            <Text>This is the web profile screen</Text>
            <Link routeName="Homepage">Go Homepage</Link>
        </View>
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