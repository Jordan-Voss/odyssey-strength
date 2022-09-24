import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	Image,
	View,
	Dimensions,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import HomepageWeb from '../screens/web/main/Homepage';
import HomepageMobile from '../screens/mobile/Homepage';
import AboutWeb from '../screens/web/main/About';
import Coaching from '../screens/web/main/Coaching';

import AboutMobile from '../screens/mobile/About';
import { Link } from '@react-navigation/web';
import { scale } from '../utils/scale';
import { useWindowDimensions } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

export default function SignUpModal({
	navigation,
	isModalVisible,
	setIsModalVisible,
}) {
	const windowWidth = useWindowDimensions().width;
	const windowHeight = useWindowDimensions().height;
	const fontDimension = useWindowDimensions().fontScale;
	const [inputValues, setInputValues] = useState({});
	// const [isModalVisible, setIsModalVisible] = React.useState(false);

	const handleModal = () => setIsModalVisible(() => !isModalVisible);

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

	return (
		<Modal isVisible={isModalVisible} style={{ alignItems: 'center' }}>
			<View
				style={{
					backgroundColor: 'rgba(0,0,0,0.9)',
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
					style={{
						color: 'white',
						marginLeft: (8 * windowWidth) / 10 - 35,
						marginTop: 5,
					}}
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
					source={require('../assets/ody2.png')}
				></Image>
				<View style={{ width: windowWidth / 2 }}>
					<ProgressSteps
						progressBarColor='white'
						activeStepIconBorderColor='white'
						activeStepIconColor='black'
						completedLabelColor='green'
						disabledStepIconColor='white'
						disabledStepNumColor='black'
						style={{ alignItems: 'center', justifyContent: 'center' }}
					>
						<ProgressStep
							label='Personal Details'
							style={{ justifyContent: 'center' }}
							nextBtnTextStyle={styles.buttonTextStyle}
							previousBtnTextStyle={styles.buttonTextStyle}
						>
							<View style={{ alignItems: 'center' }}>
								<Text style={{ color: 'white', fontSize: 30 }}>
									All Access Coaching Sign Up
								</Text>
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
						</ProgressStep>
						<ProgressStep label='Something Else' style>
							<View style={{ alignItems: 'center' }}>
								<Text>This is the content within step 2!</Text>
							</View>
						</ProgressStep>
						<ProgressStep label='Another Step'>
							<View style={{ alignItems: 'center' }}>
								<Text>This is the content within step 3!</Text>
							</View>
						</ProgressStep>
					</ProgressSteps>
				</View>
				{/* <View style={{ flex: 1 }}>
					<ProgressSteps>
						<ProgressStep
							label='First Step'
							nextBtnTextStyle={styles.buttonTextStyle}
							previousBtnTextStyle={styles.buttonTextStyle}
						>
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
						</ProgressStep>
						<ProgressStep label='Second Step'>
							<View style={{ alignItems: 'center' }}>
								<Text>This is the content within step 2!</Text>
							</View>
						</ProgressStep>
						<ProgressStep label='Third Step'>
							<View style={{ alignItems: 'center' }}>
								<Text>This is the content within step 3!</Text>
							</View>
						</ProgressStep>
					</ProgressSteps>
				</View> */}
			</View>
		</Modal>
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
	buttonTextStyle: {
		color: '#393939',
	},
});
