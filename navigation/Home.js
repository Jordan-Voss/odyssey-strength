import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBrowserApp } from '@react-navigation/web';

import HomepageWeb from '../screens/web/main/Homepage';
import HomepageMobile from '../screens/mobile/Homepage';
import AboutWeb from '../screens/web/main/About';
import Resources from '../screens/web/main/Resources';
import Pricing from '../screens/web/main/Pricing';
import AllAccessCoaching from '../screens/web/sub/AllAccessCoaching';
import ProgrammingConsultation from '../screens/web/sub/ProgrammingConsultation';
import PowerliftingCoaching from '../screens/web/sub/PowerliftingCoaching';
import SignUpForm from '../screens/web/sub/SignUpForm';

import Coaching from '../screens/web/main/Coaching';

import AboutMobile from '../screens/mobile/About';
import { Platform } from 'react-native';
import Header from '../components/Header';

const isWeb = Platform.OS === 'web';

const HomeWeb = createStackNavigator(
	{
		About: {
			screen: AboutWeb,
			path: 'About',
		},
		Coaching: {
			screen: Coaching,
		},
		Pricing: {
			screen: Pricing,
		},
		Resources: {
			screen: Resources,
		},
		Homepage: HomepageWeb,
		Header: Header,
		AllAccessCoaching: AllAccessCoaching,
		ProgrammingConsultation: ProgrammingConsultation,
		PowerliftingCoaching: PowerliftingCoaching,
		SignUpForm: SignUpForm,
	},
	{
		initialRouteName: 'Homepage',
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false,
		},
	}
);

const HomeMobile = createStackNavigator(
	{
		About: {
			screen: AboutMobile,
			path: '/About',
		},
		Homepage: HomepageMobile,
	},
	{
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false,
		},
	}
);

const Home = isWeb ? HomeWeb : HomeMobile;

const container = isWeb ? createBrowserApp(Home) : createAppContainer(Home);

export default container;
