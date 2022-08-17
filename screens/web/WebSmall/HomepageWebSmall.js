import React, { useRef, useEffect } from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
	Button,
	Animated,
	Platform,
	AppState,
} from 'react-native';
import ImageCarousel from '../../../components/ImageCarousel';
import { useSharedValue } from 'react-native-reanimated';
import { useAnimatedScrollHandler } from 'react-native-reanimated';
import { Link } from '@react-navigation/web';
import { useWindowDimensions, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { AntDesign, Entypo } from '@expo/vector-icons';
import HeaderWebSmall from '../../../components/HeaderWebSmall';
import Preview from './Preview';
import * as Device from 'expo-device';

// import Indicator from '../../../components/Indicator';

const isWeb = Platform.OS === 'web';

export default function HomepageWebSmall({ navigation }) {
	const scroll = useRef(new Animated.Value(0)).current;

	const windowWidth = useWindowDimensions().width;
	const windowHeight = useWindowDimensions().height;
	const fontDimension = useWindowDimensions().fontScale;
	const ITEM_WIDTH = Math.round(windowWidth + 30 * 0.8);
	const topTextDiffClamp = Animated.diffClamp(scroll, 0, windowWidth);
	const translateTopText = Animated.multiply(topTextDiffClamp, -1);
	const bottomTextDiffClamp = Animated.diffClamp(scroll, 0, windowHeight / 3);
	const scrollOffsetY = useRef(new Animated.Value(0)).current;
	const titleFontSize = windowWidth * 0.1;
	const homeAnimatedTextFontSize = windowWidth * 0.2;
	const paragraphFontSize = windowWidth * 0.075;
	const minScroll = 100;

	const clampedScrollY = scroll.interpolate({
		inputRange: [75, 200],
		outputRange: [-windowWidth, 0],
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const minusScrollY = Animated.multiply(clampedScrollY, -1);

	const translateY = Animated.diffClamp(minusScrollY, -windowHeight, 0);
	const clampedScrollX = scroll.interpolate({
		inputRange: [75, 300],
		outputRange: [-windowHeight, -windowHeight * 0.6],
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const minusScrollX = Animated.multiply(clampedScrollX, -1);

	const translateX = Animated.diffClamp(minusScrollX, -windowHeight, 0);

	// const translateHeaderText = Animated.multiply(translateTopText, -1.5);
	const fadeOut = topTextDiffClamp.interpolate({
		inputRange: [200, windowWidth],
		outputRange: [1, 0],
		extrapolate: 'clamp',
	});
	const fadeIn = scroll.interpolate({
		inputRange: [75, 300],
		outputRange: [0, 1],
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const menuBackgroundColourDiffClamp = Animated.diffClamp(
		scroll,
		0,
		windowHeight
	);

	const menuBackgroundColour = menuBackgroundColourDiffClamp.interpolate({
		inputRange: [0, 300],
		outputRange: ['rgba( 0, 0,0,0)', 'rgba(0,0,0,1)'],
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<ScrollView
			stickyHeaderIndices={[0]}
			scrollEventThrottle={1}
			onScroll={Animated.event(
				[{ nativeEvent: { contentOffset: { y: scroll } } }],
				{
					useNativeDriver: false,
				}
			)}
			// scrollEventThrottle={1}
		>
			<Animated.View
				style={{
					backgroundColor: menuBackgroundColour,
				}}
			>
				<HeaderWebSmall navigation={navigation} />
			</Animated.View>
			<View
				style={{
					height: windowHeight,
					width: windowWidth,
					alignItems: 'center',
					// flex: 1,
					marginTop: -50,
					backgroundColor: 'red',
				}}
			>
				<Video
					source={require('../../../assets/video/ody2_AdobeExpress.mp4')}
					style={{
						height: windowHeight,
						// width: windowWidth,
						// aspectRatio: 800 / 800,
					}}
					isMuted={true}
					isLooping={true}
					paused={false}
					shouldPlay={true}
					repeat={true}
					resizeMode={'contain'}
					rate={1.0}
					ignoreSilentSwitch={'obey'}
				></Video>
			</View>
			<View
				style={{
					// height: '100%',
					height: windowHeight,
					width: windowWidth,
					alignItems: 'center',
					// zIndex: 1,
					// flex: 1,
					marginTop: -windowHeight,
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
				}}
			></View>
			<View
				style={{
					justifyContent: 'center',
					// position: "center",
					position: 'fixed',
					top: '15%',
					left: '12.5%',
					// padding: 20,
					// marginTop: "-250%",
					// backgroundColor: 'red',
					alignItems: 'center',
					// height: "100%",
					// width: "100%",
					// paddingTop: "30%",
					// paddingLeft: 10,
				}}
			>
				<Image
					//   style={{ flex: 1, backgroundColor: "red" }}
					style={[styles.tinyLogo, {}]}
					source={require('../../../assets/ody2.png')}
				></Image>
				<Text>{windowHeight}</Text>
			</View>
			<Animated.View
				style={[
					styles.fadingContainerTop,
					{
						marginTop: windowHeight / 1.5,
						transform: [{ translateX: translateY }],
					},
				]}
			>
				<Animated.Text
					style={[
						styles.topFadingText,
						{
							opacity: fadeOut,
							fontSize: homeAnimatedTextFontSize,
						},
					]}
				>
					Odyssey
				</Animated.Text>
			</Animated.View>
			<Animated.View
				style={[
					styles.fadingContainerBottom,
					{
						alignItems: 'center',
						flexDirection: 'row',
						marginTop: windowHeight,
						transform: [{ translateY: translateX }],
					},
				]}
			>
				<Animated.Text
					style={[
						styles.topFadingText,
						{
							opacity: fadeIn,
							textAlign: 'center',
							fontSize: homeAnimatedTextFontSize,
						},
					]}
				>
					An Epic Journey
				</Animated.Text>
			</Animated.View>
			<View
				style={{
					// position: 'absolute',
					// borderWidth: 1,
					justifyContent: 'center',
					alignContent: 'center',
					alignItems: 'center',
					flex: 1,
					// marginTop: windowHeight,
				}}
			>
				<Text
					adjustsFontSizeToFit
					style={{
						fontFamily: 'Roboto',
						fontSize: titleFontSize,
						// marginTop: "100%",
					}}
				>
					What We Offer {Device.brand} {Device.osName} h
				</Text>
			</View>
			<View style={styles.pricesContainer}>
				<ImageCarousel
					navigation={navigation}
					width={windowWidth}
					timer={4000}
					component={<Preview />}
					onPress={(item) => alert(JSON.stringify(item))}
					indicatorActiveWidth={40}
					contentContainerStyle={styles.contentStyle}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	fadingContainerTop: {
		width: '100%',
		marginTop: '50%',
		// justifyContent: "center",
		alignItems: 'center',
		position: 'absolute',
		// backgroundColor: 'powderblue',
	},
	fadingContainerBottom: {
		flex: 1,
		// padding: 20,
		// width: "100%",
		// justifyContent: "center",
		marginTop: '-50%',

		alignItems: 'center',
		position: 'absolute',
		// backgroundColor: 'powderblue',
	},
	topFadingText: {
		color: 'white',
	},
	bottomFadingText: {
		color: 'white',
	},
	contentStyle: {
		paddingHorizontal: 16,
	},
	buttonRow: {
		flexBasis: 100,
		justifyContent: 'space-evenly',
		marginVertical: 16,
	},
	tinyLogo: {
		// flex: 1,
		// marginTop: "300vh",
		// paddingTop: "30%",
		// paddingLeft: 10,
		width: 300,
		height: 300,
	},
	pricesContainer: {
		marginTop: -50,
	},
});
