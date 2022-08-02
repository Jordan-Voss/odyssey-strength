import React, { useRef, useState } from 'react';
import {
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
	View,
	Dimensions,
	ScrollView,
	ImageBackground,
	useWindowDimensions,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import CarouselDot from './CarouselDot';

export default function ImageCarousel() {
	const windowWidth = useWindowDimensions().width;
	const windowHeight = useWindowDimensions().height;
	return (
		<View
			style={{
				paddingTop: 50,
				height: windowHeight * 0.7,
				justifyContent: 'space-between',
				// alignItems: 'center',
			}}
		>
			<ScrollView
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				horizontal
				style={{
					flex: 1,

					width: windowWidth,
					height: windowHeight * 0.5,
				}}
			>
				<View style={{ width: windowWidth * 0.1 }}></View>
				<View style={styles.item}>
					<Image
						source={require('../assets/img/card_carousel4.JPG')}
						style={{
							flex: 1,
							width: windowWidth * 0.7,
							height: windowHeight * 0.7,
							resizeMode: 'cover',
							borderRadius: '70px',
						}}
					></Image>
				</View>
				<View style={{ width: windowWidth * 0.1 }}></View>
				<View style={styles.item}>
					<Image
						source={require('../assets/img/card_carousel5.JPG')}
						style={{
							flex: 1,
							width: windowWidth * 0.7,
							height: windowHeight * 0.7,
							resizeMode: 'cover',
							borderRadius: '70px',
						}}
					></Image>
				</View>

				<View style={{ width: windowWidth * 0.1 }}></View>
				<View style={styles.item}>
					<Image
						source={require('../assets/img/card_carousel6.JPG')}
						style={{
							flex: 1,
							width: windowWidth * 0.7,
							height: windowHeight * 0.7,
							resizeMode: 'cover',
							backgroundColor: 'red',
							borderRadius: '70px',
						}}
					></Image>
				</View>

				<View style={{ width: windowWidth * 0.1 }}></View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	item: {
		overflow: 'hidden',
		flex: 1,
		// height: '130%',
		alignItems: 'center',
	},
});
