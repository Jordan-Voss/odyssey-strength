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
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReactNativeParallaxHeader from 'react-native-parallax-header';

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

	const fadeOut = scroll.interpolate({
		inputRange: [0, windowHeight, windowHeight * 2],
		outputRange: [1, 0, 0],

		extrapolateRight: 'extend',
		extrapolateLeft: 'extend',
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
	const renderNavBar = () => (
		<View>
			<Header></Header>
		</View>
	);

	const renderContent = () => (
		<View style={styles.navContainer}>
			<View style={styles.statusBar} />
			<View style={styles.navBar}>
				<TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
					<Icon name='add' size={25} color='#fff' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconRight} onPress={() => {}}>
					<Icon name='search' size={25} color='#fff' />
				</TouchableOpacity>
			</View>
			<View style={styles.navBar}>
				<TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
					<Icon name='add' size={25} color='#fff' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconRight} onPress={() => {}}>
					<Icon name='search' size={25} color='#fff' />
				</TouchableOpacity>
			</View>
			<View style={styles.navBar}>
				<TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
					<Icon name='add' size={25} color='#fff' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconRight} onPress={() => {}}>
					<Icon name='search' size={25} color='#fff' />
				</TouchableOpacity>
			</View>
			<View style={styles.navBar}>
				<TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
					<Icon name='add' size={25} color='#fff' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconRight} onPress={() => {}}>
					<Icon name='search' size={25} color='#fff' />
				</TouchableOpacity>
			</View>
		</View>
	);
	const images = {
		background: require('../../../assets/img/card_carousel1.JPG'),
		// Put your own image here
	};

	return (
		<View style={styles.container}>
			<ReactNativeParallaxHeader
				headerMinHeight={windowHeight / 10}
				headerMaxHeight={500}
				extraScrollHeight={20}
				navbarColor='black'
				title='All Access Coaching'
				titleStyle={styles.titleStyle}
				backgroundImage={images.background}
				backgroundImageScale={0.3}
				renderNavBar={renderNavBar}
				renderContent={renderContent}
				containerStyle={styles.container}
				contentContainerStyle={styles.contentContainer}
				innerContainerStyle={styles.container}
				scrollViewProps={{
					onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
					onScrollEndDrag: () => console.log('onScrollEndDrag'),
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		flexGrow: 1,
	},
	navContainer: {
		height: 400,
		marginHorizontal: 10,
	},
	statusBar: {
		height: 400,
		backgroundColor: 'transparent',
	},
	navBar: {
		height: 400,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'transparent',
	},
	titleStyle: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18,
	},
});
