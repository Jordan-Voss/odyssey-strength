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
        <ScrollView style={{ flex: 1, position:'absolute'}}>
            <View style={{    width: '100%',
            backgroundColor:'rgba(52, 52, 52, 0.9)',
    height: 200,
    position: 'relative',
    top: 0,
    left: 0}} >
                <Video
                source={require('../../assets/video/odyssey.mp4')}
                style={{width: windowWidth,backgroundColor:'red',height: windowHeight/2}}
                isMuted={true}
                isLooping={true}
                paused={false}
                shouldPlay={true}
                repeat={true}
                resizeMode={"cover"}
                rate={1.0}
                ignoreSilentSwitch={"obey"}>
                     </Video>
                     <View style={{marginTop:-windowHeight/2,width: windowWidth, backgroundColor:'rgba(0, 0, 0, 0.6)'
,height: windowHeight/2}}
></View>
            </View>
            <View style={{paddingTop:'1rem'}}>
            <Header navigation={props.navigation} style={{marginTop:-windowHeight/2,width: windowWidth}}></Header>
            </View>
            {/* <View 
            style={{position:'absolute',   justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
    top: windowHeight*0.1,
    right: windowWidth*0.08,}}> */}

                
            {/* </View> */}
            <View></View>
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
        // backgroundColor: 'rgba(0,0,0,.6)',
        justifyContent: 'center',
        marginTop:'50%',
        alignItems: 'center',
    }
})