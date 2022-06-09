import * as React from 'react';
import {View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, Platform} from 'react-native';
import {Link} from "@react-navigation/web";
import Header from "../../components/Header";
import {Video} from "expo-av";
import { Dimensions } from 'react-native';
import { useWindowDimensions } from 'react-native';
import * as Linking from 'expo-linking';


// const isWeb = Platform.OS === 'web';
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;


export default function Homepage(props) {
    const isWeb = Platform.OS === 'web';

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

        return (
        <ScrollView style={{}}>
            <View style={{}} >
                <Video
                source={require('../../assets/video/odyssey.mp4')}
                style={{width: windowWidth,flex:'1', height: windowHeight/2}}
                isMuted={true}
                isLooping={true}
                shouldPlay={true}
                repeat={true}
                resizeMode={"cover"}
                rate={1.0}
                ignoreSilentSwitch={"obey"}/>
            </View>
            <View style={{position:'absolute',   justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
    top: windowHeight*0.1,
    right: windowWidth*0.08,}}>
                <Header navigation={props.navigation}></Header>
            </View>
            <View style={styles.container}>
                <Button onPress={() => console.log(props)}>

                </Button>

            </View>
        </ScrollView>
            )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})