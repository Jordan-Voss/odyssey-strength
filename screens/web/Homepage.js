import * as React from 'react';
import {View, Text, StyleSheet, ScrollView, Button, Platform} from 'react-native';
import {Link} from "@react-navigation/web";
import Header from "../../components/Header";
import {Video} from "expo-av";


const isWeb = Platform.OS === 'web';
// const video = React.useRef(null);

export default class Homepage extends React.Component {
    // video = React.useRef(null);
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         status: null
    //     }
    //     // const video = React.useRef(null);
    // }
    static path = "";
    static navigationOptions = {
        title: ""
    }

    render() {
        // const video = React.useRef(null);

        // const handleVideoRef = async (component) => {
        //     if (component && !this.playbackObject) {
        //       this.playbackObject = component;
        //       await this.playbackObject.loadAsync(Asset.fromModule(require("../../assets/video/odyssey.mp4")));
        //       await this.playbackObject.playAsync();
        //     }
        //   }
        return (
            <ScrollView
                stickyHeaderIndices={[1]}
                showsVerticalScrollIndicator={false}
                >
                    <View> 
                    <Video
	  source={require('../../assets/video/odyssey.mp4')}
          shouldPlay
          style={{    width: 320,
            height: 200,}}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
	  resizeMode="cover"
	//   style={{ width, height: 300 }}
	/>
                </View>

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