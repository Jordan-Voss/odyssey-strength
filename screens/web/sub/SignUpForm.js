import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Button,
	TouchableOpacity,
	Platform,
} from 'react-native';
import Header from '../../../components/Header';
import { useWindowDimensions } from 'react-native';

export default function SignUpForm({ navigation }) {
	// static path = "About";
	const windowWidth = useWindowDimensions().width;
	const windowHeight = useWindowDimensions().height;
	return (
		<ScrollView style={{ backgroundColor: 'black' }}>
			<View>
				<Header navigation={navigation}></Header>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollview: {
		backgroundColor: 'red',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
	},
});
