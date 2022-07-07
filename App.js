import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  TouchableOpacity,
} from "react-native";
import Header from "./components/Header";
import "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import * as Animatable from "react-native-animatable";

// import HeaderWebSmall from "../../components/HeaderWebSmall";

import Home from "./navigation/Home";
import AboutWebSmall from "./screens/web/WebSmall/AboutWebSmall";
import HomepageWebSmall from "./screens/web/WebSmall/HomepageWebSmall";
import ResourcesWebSmall from "./screens/web/WebSmall/ResourcesWebSmall";
import PricingWebSmall from "./screens/web/WebSmall/PricingWebSmall";

import CoachingWebSmall from "./screens/web/WebSmall/CoachingWebSmall";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useIsDrawerOpen } from "@react-navigation/drawer";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import "./utils/trusted-security-policies";
import { useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";
// import * as Linking from 'expo-linking';
// Feather = Animatable.createAnimatableComponent(Feather);

const isWeb = Platform.OS === "web";
function CustomDrawerContent(props) {
  const AnimationRef = useRef(null);
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const fontDimension = useWindowDimensions().fontScale;

  useEffect(() => {
    // props.navigation.toggleDrawer();
    if (props.navigation.isDrawerOpen) {
    }
    if (AnimationRef) {
      AnimationRef.current?.wobble();
      // AnimationRef.current?.lightSpeedOut();
    }
  });

  return (
    <DrawerContentScrollView
      // overlayColor="transparent"
      // inactiveBackgroundColor="transparent"
      // drawerBackgroundColor="black"
      // style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      {...props}
    >
      <Animatable.View
        // delay={4000}
        ref={AnimationRef}
        // iterationCount={1}
        // style={{ color: "white" }}
      >
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <Feather
            name="x"
            color="white"
            style={{ marginLeft: "80%" }}
            size={fontDimension * 50}
          />
        </TouchableOpacity>
      </Animatable.View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
export default function App() {
  const windowWidth = useWindowDimensions().width;
  const [appIsReady, setAppIsReady] = useState(false);
  // const prefix = Linking.createURL('/');
  // const linking = {
  //   prefixes: [Linking.createURL('/'), 'https://app.example.com'],
  // };

  useEffect(() => {
    async function prepare() {
      if (Platform.OS === "web") {
        setAppIsReady(true);
      } else {
        try {
          // Keep the splash screen visible while we fetch resources
          await SplashScreen.preventAutoHideAsync();
          // Pre-load fonts, make any API calls you need to do here
          // Artificially delay for two seconds to simulate a slow loading
          // experience. Please remove this if you copy and paste the code!
          await new Promise((resolve) => setTimeout(resolve, 5000));
        } catch (e) {
          console.warn(e);
        } finally {
          // Tell the application to render
          setAppIsReady(true);
        }
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  const Drawer = createDrawerNavigator();

  return windowWidth < 800 ? (
    <NavigationContainer>
      <Drawer.Navigator
        // overlayColor="transparent"
        useLegacyImplementation
        // headerShown={false}
        // sets background color of drawer

        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          // overlayColor: "transparent",
          headerShown: false,
          drawerPosition: "right",
          drawerStyle: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            drawerActiveTintColor: "white",

            width: "75%",
          },
          // itemStyle: { marginVertical: 10 },
        }}
        contentOptions={{
          activeTintColor: "white",
          overlayColor: "white",
        }}
      >
        <Drawer.Screen name="Home" component={HomepageWebSmall} />
        <Drawer.Screen name="About" component={AboutWebSmall} />
        <Drawer.Screen name="Pricing" component={PricingWebSmall} />
        <Drawer.Screen name="Coaching" component={CoachingWebSmall} />
        <Drawer.Screen name="Resources" component={ResourcesWebSmall} />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <View style={styles.outer} onLayout={onLayoutRootView}>
      <Home />
    </View>
  );
}
const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
