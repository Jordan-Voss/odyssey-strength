import React, { useRef, useState } from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	Image,
	StatusBar,
	TouchableOpacity,
	Animated,
	useWindowDimensions,
} from 'react-native';
import { ExpandingDot } from 'react-native-animated-pagination-dots';

import { AntDesign, Entypo } from '@expo/vector-icons';

const switchCard = (cardNumber, isCardUp, setIsCardUp) => {
	console.log(isCardUp + '' + cardNumber);
	setIsCardUp(!isCardUp);
};

const handleMoveHiddenViewCard = (
	isCardUp,
	cardNumberAnimatedValue,
	cardNumber,
	cardViewNumber,
	setIsCardUp
) => {
	if (isCardUp === true) {
		Animated.timing(cardNumberAnimatedValue, {
			toValue: 0,
			duration: 500,
			useNativeDriver: false,
		}).start();
		Animated.timing(cardViewNumber, {
			toValue: 0,
			duration: 500,
			useNativeDriver: false,
		}).start();
	} else {
		Animated.timing(cardNumberAnimatedValue, {
			toValue: 1,
			duration: 500,
			useNativeDriver: false,
		}).start();
		Animated.timing(cardViewNumber, {
			toValue: 1,
			duration: 500,
			useNativeDriver: false,
		}).start();
	}
	switchCard(cardNumber, isCardUp, setIsCardUp);
};

const determineWhichView = (cardNumber, first, second, third) => {
	switch (cardNumber) {
		case '1':
			return first;
			break;
		case '2':
			return second;
			break;
		case '3':
			return third;
			break;
	}
};

const DATA = [
	{
		id: '1',
		title: 'All Access Coaching',
		path: require('../assets/img/card_carousel4.JPG'),
		navTo: 'About',
	},
	{
		id: '2',
		title: 'Powerlifting Coaching',
		path: require('../assets/img/card_carousel5.JPG'),
		navTo: 'Coaching',
		// slideUpView: useRef(new Animated.Value(0)).current,
	},
	{
		id: '3',
		title: 'Programming Consultation',
		path: require('../assets/img/card_carousel6.JPG'),
		navTo: 'Pricing',
	},
];

const Item = ({
	title,
	height,
	width,
	imagePath,
	props,
	cardId,
	navTo,
	header,
	cardSlide,
	isCardUp,
	setIsCardUp,
}) => (
	<View
		style={[
			styles.item,
			{
				overflow: 'hidden',
				height: height * 0.7,
				width: width,
				borderRadius: '50px',
			},
		]}
	>
		<Image
			style={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				borderRadius: 50,
			}}
			source={imagePath}
		></Image>
		<View
			style={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				borderRadius: 50,
				backgroundColor: 'black',
				opacity: 0.4,
			}}
		></View>
		<View
			style={{
				position: 'absolute',
				width: '100%',
				height: '80%',
				borderRadius: 50,
				// backgroundColor: 'green',
				// opacity: 0.4,
			}}
		>
			<TouchableOpacity
				style={{
					height: '100%',
					width: '100%',
					// backgroundColor: 'red',
				}}
				onPress={() => {
					console.log('WER');
					props.navigate({ name: navTo });
				}}
			></TouchableOpacity>
		</View>
		<Text
			style={{
				position: 'absolute',
				textAlign: 'center',
				fontSize: 30,
				color: 'white',
			}}
		>
			{header}
		</Text>
		<Animated.View
			style={{
				borderRadius: 50,
				position: 'absolute',
				alignItems: 'center',
				top: height * 0.9,
				borderRadius: 50,
				backgroundColor: 'white',
				width: '100%',
				height: '100%',
				opacity: 0.7,
				transform: [
					{
						translateY: cardId.interpolate({
							inputRange: [0, 1],
							outputRange: [0, -height * 0.7],
						}),
					},
				],
			}}
		>
			<Text>sregherhetra</Text>
		</Animated.View>
		<Animated.View
			style={{
				alignItems: 'center',
				height: 50,
				borderRadius: '50px',
				justifyContent: 'center',
			}}
		>
			<Animated.View
				style={{
					position: 'absolute',
					alignItems: 'center',
					width: '100%',
					transform: [
						{
							translateY: cardId.interpolate({
								inputRange: [0, 1],
								outputRange: [0, -height * 0.3],
							}),
						},
					],
				}}
			>
				<Entypo
					size={width / 5}
					color='grey'
					name={isCardUp ? 'chevron-down' : 'chevron-up'}
					style={{
						position: 'relative',
						// paddingBottom: "15%",
						// paddingTop: windowHeight * 1.5,
						// marginTop: "-250%",
						borderColor: 'black',
						top: height * 0.21,
						height: 50,
						// backgroundColor: "blue",
					}}
					onPress={() => {
						handleMoveHiddenViewCard(
							isCardUp,
							cardSlide,
							'1',
							cardId,
							setIsCardUp
						);
					}}
				></Entypo>
			</Animated.View>
		</Animated.View>
	</View>
);

/*

<Animated.View
	style={{
		alignItems: 'center',
		backgroundColor: 'green',
		height: 50,
		borderRadius: '50px',

		justifyContent: 'center',
		backgroundColor: 'blue',
		transform: [
			{
				translateY: iconSize1.interpolate({
					inputRange: [0, 1],
					outputRange: [-30, -50],
				}),
			},
		],
	}}
	onMouseEnter={() => {
		handleScaleIcon('up', iconSize1, isCard1Up);
		console.log(isCard1Up);
	}}
	onMouseLeave={() => {
		handleScaleIcon('down', iconSize1, isCard1Up);
		console.log(isCard1Up);
	}}
>
	<Animated.View
		style={{
			position: 'absolute',
			alignItems: 'center',
			width: '100%',
			transform: [
				{
					translateY: slideUpCard1.interpolate({
						inputRange: [0, 1],
						outputRange: [0, -500],
					}),
				},
			],
		}}
	>
		<Entypo
			size={windowWidth / 10}
			color='grey'
			name={isCard1Up ? 'chevron-down' : 'chevron-up'}
			style={{
				position: 'relative',
				// paddingBottom: "15%",
				// paddingTop: windowHeight * 1.5,
				// marginTop: "-250%",
				top: windowHeight * 0.71,
				height: 50,
				// backgroundColor: "blue",
			}}
			onPress={() => {
				handleMoveHiddenViewCard(
					isCard1Up,
					slideUpCard1,
					'1',
					slideUpCard1View
				);
			}}
		></Entypo>
	</Animated.View>
</Animated.View>
</View>
*/

export default function ImageCarousel(props) {
	const windowWidth = useWindowDimensions().width;
	const windowHeight = useWindowDimensions().height;
	const [isCard1Up, setIsCard1Up] = useState(false);
	const [isCard2Up, setIsCard2Up] = useState(false);
	const [isCard3Up, setIsCard3Up] = useState(false);
	const slideUpCard1 = useRef(new Animated.Value(0)).current;
	const slideUpCard2 = useRef(new Animated.Value(0)).current;
	const slideUpCard3 = useRef(new Animated.Value(0)).current;
	const scrollX = useRef(new Animated.Value(0)).current;
	const slideUpCard1View = useRef(new Animated.Value(0)).current;
	const slideUpCard2View = useRef(new Animated.Value(0)).current;
	const slideUpCard3View = useRef(new Animated.Value(0)).current;
	const renderItem = ({ item }) => (
		<Item
			title={item.title}
			height={windowHeight}
			width={windowWidth * 0.9}
			imagePath={item.path}
			props={props.navigation}
			header={item.title}
			navTo={item.navTo}
			isCardUp={determineWhichView(item.id, isCard1Up, isCard2Up, isCard3Up)}
			setIsCardUp={determineWhichView(
				item.id,
				setIsCard1Up,
				setIsCard2Up,
				setIsCard3Up
			)}
			cardSlide={determineWhichView(
				item.id,
				slideUpCard1,
				slideUpCard2,
				slideUpCard3
			)}
			cardId={determineWhichView(
				item.id,
				slideUpCard1View,
				slideUpCard2View,
				slideUpCard3View
			)}
		/>
	);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				horizontal
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{
						useNativeDriver: false,
					}
				)}
				pagingEnabled={true}
				viewabilityConfig={{ itemVisiblePercentThreshold: 90 }}
				renderItem={renderItem}
				snapToAlignment='center'
				decelerationRate={'slow'}
				snapToInterval={windowWidth * 0.9}
				scrollEventThrottle={16}
				keyExtractor={(item) => item.id}
			/>
			<ExpandingDot
				data={DATA}
				expandingDotWidth={30}
				scrollX={scrollX}
				inActiveDotOpacity={0.6}
				dotStyle={{
					width: 10,
					height: 10,
					backgroundColor: 'grey',
					borderRadius: 5,
					marginHorizontal: 5,
				}}
				activeDotColor={'lightgrey'}
				slidingIndicatorStyle={{ backgroundColor: 'grey' }}
				containerStyle={{
					top: windowHeight * 0.75,
				}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: '15%',
	},
	item: {
		// backgroundColor: '#f9c2ff',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 20,
		marginRight: 20,
		// marginVertical: 8,
		// marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});
