import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View, Platform } from "react-native";
import Header from "./components/Header";
import "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import Home from "./navigation/Home";
import HomepageWebSmall from "./screens/web/WebSmall/HomepageWebSmall";
import NotificationsScreen from "./screens/web/WebSmall/NotificationsScreen";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import "./utils/trusted-security-policies";
import { useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// import * as Linking from 'expo-linking';

const isWeb = Platform.OS === "web";
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
  /> */}
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

  return windowWidth < 500 ? (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        // headerShown={false}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerPosition: "right",

          headerStyle: {
            height: 80,
            backgroundOpacity: 1,
            backgroundColor: "#133E7C",
            shadowColor: "#133E7C",
            borderBottomColor: "#133E7C",
          },
          headerBackgroundColor: "#133E7C",
          headerTitle: "",
          activeTintColor: "#9BE6DE",
          itemStyle: { marginVertical: 10 },
        }}
      >
        <Drawer.Screen name="Home" component={HomepageWebSmall} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
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
