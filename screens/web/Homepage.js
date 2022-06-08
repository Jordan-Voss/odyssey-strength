import * as React from 'react';
import {View, Text, StyleSheet, ScrollView, Button, Platform} from 'react-native';
import {Link} from "@react-navigation/web";
import Header from "../../components/Header";
import {Video} from "expo-av";
import { Dimensions } from 'react-native';


const isWeb = Platform.OS === 'web';

export default class Homepage extends React.Component {
    static path = "";
    static navigationOptions = {
        title: ""
    }
    windowWidth = Dimensions.get('window').width;
    windowHeight = Dimensions.get('window').height;

    render() {
        return (
            <ScrollView
                >
                    <View> 
            <Video
	  source={require('../../assets/video/odyssey.mp4')}
        style={{width: this.windowWidth, height: 200}}
        isMuted={true}
        isLooping={true}
        shouldPlay={true}
        repeat={true}
        resizeMode={"cover"}
        rate={1.0}
        ignoreSilentSwitch={"obey"}
	    resizeMode="cover"
	//   style={{ width, height: 300 }}
	/></View>

            <View style={{position: 'absolute', top: 0,justifyContent: 'center', alignItems: 'center'}}>
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