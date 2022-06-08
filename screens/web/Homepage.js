import React from 'react';
import {View, Text, StyleSheet, ScrollView, Button, Platform} from 'react-native';
import {Link} from "@react-navigation/web";
import Header from "../../components/Header";


const isWeb = Platform.OS === 'web';

export default class Homepage extends React.Component {
    static path = "";
    static navigationOptions = {
        title: ""
    }

    render() {
        return (
            <ScrollView
                stickyHeaderIndices={[1]}
                showsVerticalScrollIndicator={false}
                >
            <View>
                <Header></Header>
            </View>
            <View style={styles.container}>

                <Text>This is the web Homepage screen</Text>
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