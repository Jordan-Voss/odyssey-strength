import React, { useRef } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Button,
	Image,
	ImageBackground,
	Animated,
	TouchableOpacity,
	Platform,
} from 'react-native';
import { Link } from '@react-navigation/web';
import Header from '../../../components/Header';
import { useWindowDimensions } from 'react-native';

export default function AllAccessCoaching({ navigation }) {
	const scroll = useRef(new Animated.Value(0)).current;
	const windowWidth = useWindowDimensions().width;
	const windowHeight = useWindowDimensions().height;

	const clampedScrollXTop = scroll.interpolate({
		inputRange: [0, windowHeight],
		outputRange: [0, windowWidth],
		// extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const clampedScrollXBottom = scroll.interpolate({
		inputRange: [0, windowHeight],
		outputRange: [-windowWidth * 0.7, 0],
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const minusScrollXTop = Animated.multiply(clampedScrollXTop, -1);
	const minusScrollXBottom = Animated.multiply(clampedScrollXBottom, 1);

	const translateXTop = Animated.diffClamp(minusScrollXTop, -windowHeight, 0);
	const translateXBottom = Animated.diffClamp(
		minusScrollXBottom,
		-windowHeight,
		0
	);

	return (
		<View style={{ flex: 1, backgroundColor: 'red' }}>
			<View style={{ zIndex: -100, backgroundColor: 'red' }}>
				<ImageBackground
					style={{
						// tintColor: 'rgba(0,0,0,0.6)',
						// tintOpacity: 0.6,
						position: 'absolute',
						width: windowWidth,
						height: windowHeight,
						backgroundColor: 'red',

						// borderRadius: 50,
					}}
					source={require('../../../assets/img/card_carousel1.JPG')}
				>
					<View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }}></View>
				</ImageBackground>

				{/* <View
					style={{
						width: windowWidth,
						height: windowHeight,
						zIndex: -100,
						// marginTop: windowHeight,
						// top: 0,
						// aspectRatio: 800 / 450,
						// backgroundColor: 'rgba(0, 0, 0, 0.6)',
						// justifyContent: 'center',
						// position: 'fixed',
					}}
				></View> */}
			</View>
			<View
				style={{
					width: windowWidth,
					height: windowHeight,
					marginTop: -windowHeight,
					// top: 0,
					// zIndex: -1,
					// aspectRatio: 800 / 450,
					backgroundColor: 'rgba(0, 0, 0, 0.6)',
					// justifyContent: 'center',
					// position: 'fixed',
				}}
			></View>
			<TouchableOpacity
				onPress={() => {
					console.log(translateXBottom);
				}}
				style={{ width: windowWidth, height: 50, backgroundColor: 'red' }}
			></TouchableOpacity>
			<Animated.View
				style={{
					// marginLeft: -windowWidth,
					marginTop: windowHeight / 3,
					position: 'absolute',
					top: 50,
					width: windowWidth * 0.7,
					backgroundColor: 'rgba(255,255,255,0.7)',
					transform: [{ translateX: translateXTop }],
				}}
			>
				<Text style={{ color: 'black', fontSize: 125 }}>All Access</Text>
			</Animated.View>
			<Animated.View
				style={{
					marginLeft: windowWidth,
					marginTop: windowHeight / 3 + 125,
					position: 'absolute',
					top: 50,
					width: windowWidth * 0.7,
					backgroundColor: 'rgba(0,0,0,0.7)',
					transform: [{ translateX: translateXBottom }],
				}}
			>
				<Text style={{ color: 'white', fontSize: 125 }}>Coaching</Text>
			</Animated.View>
			<ScrollView
				scrollEventThrottle={1}
				onScroll={Animated.event(
					[
						{
							nativeEvent: {
								contentOffset: {
									y: scroll,
								},
							},
						},
					],
					{
						useNativeDriver: false,
					}
				)}
				stickyHeaderIndices={[0, 2]}
				style={{ flex: 1 }}
			>
				<View
					style={{
						width: windowWidth,
						height: windowHeight,
						// marginTop: windowHeight,
						// top: 0,
						// zIndex: -1,
						// aspectRatio: 800 / 450,
						// backgroundColor: 'rgba(0, 0, 0, 0.6)',
						// justifyContent: 'center',
						// position: 'fixed',
					}}
				>
					<View>
						<Header
							navigation={navigation}
							style={{ position: 'absolute' }}
						></Header>
					</View>
				</View>
				{/* style={{ flex: 1, position: 'absolute' }}> */}
				{/* <Animated.View
					style={{
						// position: 'fixed',
						marginTop: -windowHeight / 1.5,
						// transform: [{ translateX: translateX }],

						// alignItems: 'left',
						// alignSelf: 'left',

						// marginLeft: '20%',
						// justifyContent: 'left',
					}}
				> */}
				<View style={{ height: windowHeight * 2 }}></View>
				{/* </Animated.View> */}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	scrollview: {
		backgroundColor: 'green',
	},
});
