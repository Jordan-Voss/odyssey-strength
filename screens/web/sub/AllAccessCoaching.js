import React, { useRef, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Button,
	Image,
	TextInput,
	ImageBackground,
	Animated,
	TouchableOpacity,
	Platform,
} from 'react-native';
import { Link } from '@react-navigation/web';
import Header from '../../../components/Header';
import { useWindowDimensions } from 'react-native';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';
import SignUpModal from '../../../components/SignUpModal';

export default function AllAccessCoaching({ navigation }) {
	const scroll = useRef(new Animated.Value(0)).current;
	const windowWidth = useWindowDimensions().width;
	const windowHeight = useWindowDimensions().height;
	const [isModalVisible, setIsModalVisible] = React.useState(false);

	const handleModal = () => setIsModalVisible(() => !isModalVisible);

	const clampedScrollXTop = scroll.interpolate({
		inputRange: [0, windowHeight],
		outputRange: [0, windowWidth],
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const clampedScrollXBottom = scroll.interpolate({
		inputRange: [0, windowHeight],
		outputRange: [0, windowWidth],

		// outputRange: [-windowWidth * 0.7, 0],
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const fadeScrollDiffClamp1 = Animated.diffClamp(
		scroll,
		windowWidth * 2,
		windowHeight * 4
	);

	const minusScrollXTop = Animated.multiply(clampedScrollXTop, -1);
	const minusScrollXBottom = Animated.multiply(clampedScrollXBottom, 1);

	const translateXTop = Animated.diffClamp(
		minusScrollXTop,
		-windowWidth,
		windowWidth
	);
	const translateXBottom = Animated.diffClamp(
		minusScrollXBottom,
		-windowWidth,
		windowWidth
	);

	const fadeOut = fadeScrollDiffClamp1.interpolate({
		inputRange: [windowWidth * 2, windowWidth * 3, windowWidth * 4],
		outputRange: [0, 1, 0],
		extrapolate: 'clamp',
	});

	const apply = () => navigation.navigate('SignUpForm');

	const [inputValues, setInputValues] = useState({});

	// const onChangeText = ({ target }) => {
	// 	setInputValues({
	// 		...inputValues,
	// 		[target.id]: target.value,
	// 	});
	// 	console.log(inputValues);
	// };

	const onChangeText = (key, val) => {
		setInputValues({
			...inputValues,
			[key]: val,
		});
		console.log(inputValues);
	};
	// const fadeOut = topTextDiffClamp.interpolate({
	// 	inputRange: [0, windowWidth / 2],
	// 	outputRange: [1, 0],
	// 	extrapolate: 'clamp',
	// });

	return (
		<View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center' }}>
			<View
				style={{
					zIndex: -100,
					alignItems: 'center',
					backgroundColor: 'red',
				}}
			>
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
			</View>
			<View
				style={{
					width: windowWidth,
					height: windowHeight,
					marginTop: -windowHeight,
					backgroundColor: 'rgba(0, 0, 0, 0.6)',
				}}
			></View>
			<Animated.View
				style={{
					marginLeft: -windowWidth * 0.3,
					marginTop: windowHeight / 3,
					position: 'absolute',
					width: windowWidth * 0.7,
					backgroundColor: 'rgba(255,255,255,0.7)',
					transform: [{ translateX: translateXTop }],
				}}
			>
				<Text style={{ color: 'black', fontSize: 125 }}>All Access</Text>
			</Animated.View>
			<Animated.View
				style={{
					marginLeft: windowWidth * 0.3,
					marginTop: windowHeight / 3 + 125,
					position: 'absolute',
					width: windowWidth * 0.7,
					backgroundColor: 'rgba(0,0,0,0.7)',
					transform: [{ translateX: translateXBottom }],
				}}
			>
				<Text style={{ color: 'white', fontSize: 125 }}>Coaching</Text>
			</Animated.View>
			<Animated.View
				style={{
					width: windowWidth / 1.5,
					height: windowHeight / 3,
					marginTop: windowHeight / 3.3,
					position: 'absolute',
					// alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'rgba(255,255,255,0.2)',
					borderRadius: 50,
					opacity: fadeOut,
					transform: [
						{
							scale: scroll.interpolate({
								inputRange: [windowWidth / 2, windowHeight * 2],
								outputRange: [0, 3],
								extrapolateRight: 'clamp',
								extrapolateLeft: 'clamp',
							}),
						},
						// {
						// 	scale: scroll.interpolate({
						// 		inputRange: [windowWidth * 2, windowWidth * 3],
						// 		outputRange: [1, 5],
						// 		extrapolateRight: 'clamp',
						// 		extrapolateLeft: 'clamp',
						// 	}),
						// },
					],
				}}
			>
				<Text style={{ fontSize: 25, color: 'white' }}>
					The most in-depth coaching experience that we offer. For individuals
					that wish to be highly invested in the coaching process. Daily one on
					one support with your coach via your communication medium of choice
				</Text>
			</Animated.View>
			{/* <View
				style={{
					position: 'absolute',
					borderRadius: 50,
					height: windowHeight / 10,
					width: windowWidth / 3,
					backgroundColor: 'black',
					top: windowHeight - windowHeight / 8,
					right: windowWidth / 20,
					alignItems: 'left',
				}}
			> */}
			<TouchableOpacity
				style={{
					position: 'absolute',
					borderRadius: 50,
					height: windowHeight / 10,
					width: 800 / 3,
					backgroundColor: 'black',
					top: windowHeight - windowHeight / 8,
					right: windowWidth / 20,
					zIndex: 1,
					justifyContent: 'center',
					flexDirection: 'row',
					// alignItems: 'center',
				}}
				onPress={handleModal}
			>
				<Image
					//   style={{ flex: 1, backgroundColor: "red" }}
					style={{
						// top: windowHeight - windowHeight / 9,
						// height: windowHeight / 10,
						// width: windowWidth / 3,
						flex: 1,
						resizeMode: 'contain',
						// backgroundColor: 'red',
					}}
					source={require('../../../assets/ody2.png')}
				></Image>
				<Text
					style={{
						flex: 1,
						color: 'white',
						// marginLeft: 100,
						alignSelf: 'center',
						fontSize: 30,
						// height: windowHeight / 10,
						// width: windowWidth / 3,
						// backgroundColor: 'red',
					}}
				>
					Apply Now!
				</Text>
			</TouchableOpacity>
			<SignUpModal
				navigation={navigation}
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
			></SignUpModal>
			{/* <Modal isVisible={isModalVisible} style={{ alignItems: 'center' }}>
				<View
					style={{
						backgroundColor: 'white',
						flex: 1,
						height: windowHeight / 3,
						alignItems: 'center',
						width: (8 * windowWidth) / 10,
					}}
				>
					<AntDesign
						name='closecircleo'
						title='Hide modal'
						size={30}
						onPress={handleModal}
						style={{ marginLeft: (8 * windowWidth) / 10 - 35, marginTop: 5 }}
					/>
					<Image
						//   style={{ flex: 1, backgroundColor: "red" }}
						style={{
							height: windowHeight / 10,
							width: 800 / 3,
							// top: windowHeight - windowHeight / 9,
							// height: windowHeight / 10,
							// width: windowWidth / 3,
							flex: 1,
							resizeMode: 'contain',
							// backgroundColor: 'red',
						}}
						source={require('../../../assets/ody2black.png')}
					></Image>
					<View style={{ alignItems: 'center' }}>
						<Text style={{ fontSize: 30 }}>All Access Coaching Sign Up</Text>
					</View>
					<View style={{ alignItems: 'center' }}>
						<TextInput
							id='username'
							style={styles.input}
							placeholder='Username'
							autoCapitalize='none'
							placeholderTextColor='white'
							onChangeText={(val) => onChangeText('username', val)}
						/>
						<TextInput
							id='pw'
							style={styles.input}
							placeholder='Password'
							secureTextEntry={true}
							autoCapitalize='none'
							placeholderTextColor='white'
							onChangeText={(val) => onChangeText('password', val)}
						/>
						<TextInput
							id='email'
							style={styles.input}
							placeholder='Email'
							autoCapitalize='none'
							placeholderTextColor='white'
							onChangeText={(val) => onChangeText('email', val)}
						/>
						<TextInput
							style={styles.input}
							placeholder='Phone Number'
							autoCapitalize='none'
							placeholderTextColor='white'
							onChangeText={(val) => onChangeText('phone_number', val)}
						/>
					</View>
				</View>
			</Modal> */}
			{/* </View> */}
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
				stickyHeaderIndices={[0]}
				style={{ flex: 1 }}
			>
				<View
					style={{
						width: windowWidth,
						height: windowHeight,
					}}
				>
					<View>
						<Header
							navigation={navigation}
							style={{ position: 'absolute' }}
						></Header>
					</View>
				</View>
				<View style={{ height: windowHeight / 1.5 }}></View>
				<View style={{ height: windowHeight * 6 }}></View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	scrollview: {
		backgroundColor: 'green',
	},
	input: {
		width: 350,
		height: 55,
		backgroundColor: '#42A5F5',
		margin: 10,
		padding: 8,
		color: 'white',
		borderRadius: 14,
		fontSize: 18,
		fontWeight: '500',
	},
});
