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

export default function About({ navigation }) {
	// static path = "About";
	const windowWidth = useWindowDimensions().width;
	const windowHeight = useWindowDimensions().height;
	return (
		<ScrollView>
			<View>
				<View
					style={{
						width: windowWidth,
						aspectRatio: 800 / 450,
						backgroundColor: 'rgba(0, 0, 0, 0.6)',
						// alignItems: "center",
						// marginTop: "10%",

						justifyContent: 'center',
						position: 'fixed',
					}}
				>
					<Header
						styles={{ position: 'fixed' }}
						navigation={navigation}
					></Header>
					<View
						style={{
							flexDirection: 'row',
							// paddingLeft: "15%",
							// paddingRight: "15%",
							alignItems: 'center',
							justifyContent: 'center',
							marginTop: '40%',
						}}
					>
						<TouchableOpacity onPress={() => console.log(props)}>
							<Text>About</Text>
						</TouchableOpacity>
					</View>
				</View>
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
