import React from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	Image,
	StatusBar,
	useWindowDimensions,
} from 'react-native';

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
		path: require('../assets/img/card_carousel4.JPG'),
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
		path: require('../assets/img/card_carousel5.JPG'),
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item',
		path: require('../assets/img/card_carousel6.JPG'),
	},
];

const Item = ({ title, height, width, imagePath }) => (
	<View
		style={[
			styles.item,
			{ height: height * 0.7, width: width, borderRadius: '50px' },
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
		<Text style={styles.title}>{title}</Text>
	</View>
);

export default function ImageCarousel() {
	const windowWidth = useWindowDimensions().width;
	const windowHeight = useWindowDimensions().height;
	const renderItem = ({ item }) => (
		<Item
			title={item.title}
			height={windowHeight}
			width={windowWidth * 0.9}
			imagePath={item.path}
		/>
	);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				horizontal
				pagingEnabled={true}
				viewabilityConfig={{ itemVisiblePercentThreshold: 90 }}
				renderItem={renderItem}
				snapToAlignment='start'
				decelerationRate={'fast'}
				snapToInterval={windowWidth * 0.8}
				keyExtractor={(item) => item.id}
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
