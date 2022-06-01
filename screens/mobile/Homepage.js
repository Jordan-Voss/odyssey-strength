import React from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import {Link} from "@react-navigation/web";

const isWeb = Platform.OS === 'web';

export default class Homepage extends React.Component {

    static navigationOptions = {
        title: ""
    }

    render() {
        return 
        <View style={styles.container}>
            <View style={styles.container}>
                <Text>This is the mobile Homepage screen</Text>
                <Link routeName="Profile">Go Profile</Link>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})