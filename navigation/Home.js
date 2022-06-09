import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBrowserApp} from '@react-navigation/web';

import HomepageWeb from "../screens/web/Homepage";
import HomepageMobile from "../screens/mobile/Homepage";
import ProfileWeb from "../screens/web/Profile";
import ProfileMobile from "../screens/mobile/Profile";
import {Platform} from "react-native";
import Header from "../components/Header";

const isWeb = Platform.OS === 'web';

const HomeWeb = createStackNavigator(
    {
        Profile: {
        screen: ProfileWeb,
        path: 'profile',
        },
        Homepage: HomepageWeb,
        Header: Header,
    },
    {
    initialRouteName: 'Homepage',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
     } }
);

const HomeMobile = createStackNavigator(
    {
        Profile: {
            screen: ProfileMobile,
            path: '/profile'
        },
        Homepage: HomepageMobile,
    },
    {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
     } }
);

const Home = isWeb ? HomeWeb : HomeMobile;

const container = isWeb ? createBrowserApp(Home): createAppContainer(Home);

export default container;