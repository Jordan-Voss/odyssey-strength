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
		inputRange: [150, 350],
		outputRange: [-windowWidth, 0],
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const minusScrollY = Animated.multiply(clampedScrollY, -1);

	const translateY = Animated.diffClamp(minusScrollY, -windowHeight, 0);
	const clampedScrollX = scroll.interpolate({
		inputRange: [350, 500],
		outputRange: [-windowHeight, -windowHeight * 0.7],
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
	const fadeIn = bottomTextDiffClamp.interpolate({
		inputRange: [200, windowHeight / 2.5],
		outputRange: [0, 1],
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
			<View
				style={{
					// paddingTop: '3%',
					// marginTop: '2%',
					backgroundColor: 'black',
					// marginLeft: windowWidth / 40,

					// marginTop: "-200%",
					// flex: 1,
					// flexDirection: 'column',
					// position: 'fixed',
				}}
			>
				<HeaderWebSmall
					// style={{ position: "fixed", flex: 1 }}
					animHeaderValue={scroll}
					navigation={navigation}
				/>
			</View>
			<View
				style={{
					alignItems: 'center',
					flex: 1,
					marginTop: -50,
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
				{/* </View> */}
				<View
					style={{
						width: windowWidth,
						height: windowHeight,
						flex: 1,
						marginTop: -windowHeight,

						// top: 0,
						// aspectRatio: 800 / 450,
						backgroundColor: 'rgba(0, 0, 0, 0.9)',
						justifyContent: 'center',
						// position: 'fixed',
					}}
				>
					<View
						style={{
							justifyContent: 'center',
							// position: "center",
							position: 'fixed',
							top: '15%',
							left: '12.5%',
							// padding: 20,
							// marginTop: "-250%",
							// backgroundColor: "red",
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
					</View>
					{/* <Animated.View
            style={[
              styles.fadingContainerTop,
              {
                marginTop: windowHeight / 1.3,
                transform: [
                  {
                    translateX: translateTopText,
                  },
                ],
              },
            ]}
          > */}
					<Animated.View
						style={[
							styles.fadingContainerTop,
							{
								marginTop: windowHeight / 0.75,
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
								marginTop: windowHeight * 2,
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
				</View>
			</View>
			<View
				style={{
					// position: 'absolute',
					borderWidth: 1,
					justifyContent: 'center',
					alignContent: 'center',
					alignItems: 'center',
					flex: 1,
					marginTop: windowHeight,
				}}
			>
				<TouchableOpacity
					style={{ width: 100, height: 100, backgroundColor: 'red' }}
					onPress={() => console.log(scroll)}
				></TouchableOpacity>
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
				{/* <Text>wergh</Text> */}
				{/* <Image
						source={require('../../../assets/img/card_carousel1.JPG')}
						style={{ height: '100%', width: '100%' }}
					></Image> */}
				{/* <ImageCarousel></ImageCarousel>
				 */}
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
			{/* <View style={styles.pricesContainer}>
					<View style={styles.item}>
						<Text style={{ fontFamily: 'Roboto', fontSize: paragraphFontSize }}>
							Let us handle the details of your athletic pursuit by working
							hard, allowing you to work smarter. You’ll shine to your fullest
							potential.
						</Text>
					</View>
					<View style={styles.item}>
						<Text style={{ fontFamily: 'Roboto', fontSize: paragraphFontSize }}>
							We focus on being athlete-centric, responsive to data, and
							committed to relationships and coaching the whole athlete.
						</Text>
					</View>
					<View style={styles.item}>
						<Text style={{ fontFamily: 'Roboto', fontSize: paragraphFontSize }}>
							You’re more than a set of numbers. We refine your lifting
							technique, your mind, your nutrition, and habits that will last a
							lifetime.
						</Text>
					</View>
				</View>
				{/* 
        <View style={styles.buttonRow}>
          <Button title="Fade In View" onPress={fadeIn(1000)} />
          <Button title="Fade Out View" onPress={fadeOut(1000)} />
        </View> */}
			{/* </View> */}
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
		// marginTop: "-50%",
		// justifyContent: "center",
		alignItems: 'center',
		position: 'absolute',
		// backgroundColor: "powderblue",
	},
	fadingContainerBottom: {
		flex: 1,
		// padding: 20,
		// width: "100%",
		// justifyContent: "center",
		alignItems: 'center',
		position: 'absolute',
		// backgroundColor: "powderblue",
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
		width: '100%',
		height: '100%',
	},
});
