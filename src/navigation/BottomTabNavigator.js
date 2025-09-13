/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, Text, Platform, StyleSheet} from 'react-native';
import {
  blackcolor,
  redcolor,
  whitecolor,
  bluecolor,
} from '../styles/commonstyles';
import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {useMergedMenuData} from '../utilities/menuHelper';
import ShortsScreen from '../screens/Shorts';
import PhotoGallery from '../screens/PhotoGallery';
import Videos from '../screens/Videos';
import LatestNews from '../screens/LatestNews';
import PhotoArticle from '../screens/PhotoArticle';
import Details from '../screens/Details';
import VideoArticle from '../screens/VideoArticle';
import Topics from '../screens/Topics';
import AuthorScreen from '../screens/Author';
import AboutUs from '../screens/contactscreens/AboutUs';
import ContactUs from '../screens/contactscreens/ContactUs';
import PrivacyPolicy from '../screens/contactscreens/PrivacyPolicy';
import Terms from '../screens/contactscreens/Terms';
import CategoryScreen from '../screens/Category';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();
const LNStack = createStackNavigator();
const PTStack = createStackNavigator();
const VDStack = createStackNavigator();

function LNStackScreen() {
  const mergedArray = useMergedMenuData();
  return (
    <LNStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Latest">
      {mergedArray.length > 0 &&
        mergedArray.map(item => (
          <LNStack.Screen key={item.title} name={item.title}>
            {props => <CategoryScreen {...props} item={item} />}
          </LNStack.Screen>
        ))}
      <LNStack.Screen name="Latest" component={LatestNews} />
      <LNStack.Screen name="Details" component={Details} />
      <LNStack.Screen name="Author" component={AuthorScreen} />
      <LNStack.Screen name="Topics" component={Topics} />
      <LNStack.Screen name="Settings" component={Settings} />
      <LNStack.Screen name="About" component={AboutUs} />
      <LNStack.Screen name="Contact" component={ContactUs} />
      <LNStack.Screen name="Privacy" component={PrivacyPolicy} />
      <LNStack.Screen name="Terms" component={Terms} />
      <LNStack.Screen name="CategoryScreen" component={CategoryScreen} />
    </LNStack.Navigator>
  );
}

function PhotoStackScreen() {
  const mergedArray = useMergedMenuData();
  return (
    <PTStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Photos">
      {mergedArray.length > 0 &&
        mergedArray.map(item => (
          <PTStack.Screen key={item.title} name={item.title}>
            {props => <CategoryScreen {...props} item={item} />}
          </PTStack.Screen>
        ))}
      <PTStack.Screen name="Photos" component={PhotoGallery} />
      <PTStack.Screen name="PhotoArticle" component={PhotoArticle} />
      <PTStack.Screen name="Details" component={Details} />
      <PTStack.Screen name="Author" component={AuthorScreen} />
      <PTStack.Screen name="Topics" component={Topics} />
      <PTStack.Screen name="Settings" component={Settings} />
      <PTStack.Screen name="About" component={AboutUs} />
      <PTStack.Screen name="Contact" component={ContactUs} />
      <PTStack.Screen name="Privacy" component={PrivacyPolicy} />
      <PTStack.Screen name="Terms" component={Terms} />
      <PTStack.Screen name="CategoryScreen" component={CategoryScreen} />
    </PTStack.Navigator>
  );
}

function VideoStackScreen() {
  const mergedArray = useMergedMenuData();

  return (
    <VDStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Videos">
      {mergedArray.length > 0 &&
        mergedArray.map(item => (
          <VDStack.Screen key={item.title} name={item.title}>
            {props => <CategoryScreen {...props} item={item} />}
          </VDStack.Screen>
        ))}
      <VDStack.Screen index name="Videos" component={Videos} />
      <VDStack.Screen name="VideoArticle" component={VideoArticle} />
      <VDStack.Screen name="Details" component={Details} />
      <VDStack.Screen name="Author" component={AuthorScreen} />
      <VDStack.Screen name="Topics" component={Topics} />
      <VDStack.Screen name="Settings" component={Settings} />
      <VDStack.Screen name="About" component={AboutUs} />
      <VDStack.Screen name="Contact" component={ContactUs} />
      <VDStack.Screen name="Privacy" component={PrivacyPolicy} />
      <VDStack.Screen name="Terms" component={Terms} />
      <VDStack.Screen name="CategoryScreen" component={CategoryScreen} />
    </VDStack.Navigator>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: redcolor,
        tabBarInactiveTintColor: whitecolor,
        style: {backgroundColor: 'rgba(52, 52, 52, 0.8)'},
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          fontFamily: 'TTLogo',
        },
        tabBarItemStyle: {width: 100, height: Platform.OS === 'ios' ? 68 : 60},
        tabBarStyle: {
          backgroundColor: blackcolor,
          height: Platform.OS === 'ios' ? 88 : 60,
        },
        tabBarOptions: {
          showLabel: true,
        },
      })}>
      <Tab.Screen
        name="TopTabs"
        component={HomeStackNavigator}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.reset({
              index: 0,
              routes: [{name: 'TopTabs', params: {screen: 'Home'}}],
            });
          },
        })}
        options={{
          headerShown: false,
          tabBarLabel: 'HOME',
          tabBarLabelStyle: styles.tabBottomItemText,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.tabBarIcon,
                {
                  tintColor: focused ? bluecolor : whitecolor,
                },
              ]}
              source={require('../Assets/Images/home.png')}
            />
          ),
          tabBarActiveTintColor: bluecolor,
          tabBarInactiveTintColor: whitecolor,
        }}
      />

      {/* <Tab.Screen
        name="LNStack"
        component={LNStackScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.reset({
              index: 0,
              routes: [{ name: 'LNStack'}],
            });
          },
        })}
        options={{
          headerShown: false,
          tabBarLabel: 'LATEST',
          tabBarLabelStyle: styles.tabBottomItemText,
          tabBarIcon: ({ focused }) => (
            <Image
            style={[styles.tabBarIcon, {
              tintColor: focused ? bluecolor : whitecolor,
            }]}
              source={require('../Assets/Images/paper.png')}
            />
          ),
          tabBarActiveTintColor: bluecolor,
          tabBarInactiveTintColor: whitecolor,
        }}
      /> */}
      <Tab.Screen
        name="Shorts"
        component={ShortsScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: bluecolor,
              }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: whitecolor,
                  }}
                  source={require('../Assets/Images/favicon.png')}
                />
                <Text
                  style={{
                    color: whitecolor,
                    fontSize: 8.5,
                    fontFamily: 'Mukta-Bold',
                  }}>
                  SHORTS
                </Text>
              </View>
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="PTStack"
        component={PhotoStackScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.reset({
              index: 0,
              routes: [{ name: 'PTStack'}],
            });
          },
        })}
        options={{
          headerShown: false,
          tabBarLabel: 'PHOTOS',
          tabBarLabelStyle: styles.tabBottomItemText,
          tabBarIcon: ({ focused }) => (
            <Image
            style={[styles.tabBarIcon, {
              tintColor: focused ? bluecolor : whitecolor,
            }]}
              source={require('../Assets/Images/gallery.png')}
            />
          ),
          tabBarActiveTintColor: bluecolor,
          tabBarInactiveTintColor: whitecolor,
        }}
      /> */}
      <Tab.Screen
        name="VDStack"
        component={VideoStackScreen}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.reset({
              index: 0,
              routes: [{name: 'VDStack'}],
            });
          },
        })}
        options={{
          headerShown: false,
          tabBarLabel: 'VIDEOS',
          tabBarLabelStyle: styles.tabBottomItemText,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.tabBarIcon,
                {
                  tintColor: focused ? bluecolor : whitecolor,
                },
              ]}
              source={require('../Assets/Images/video.png')}
            />
          ),
          tabBarActiveTintColor: bluecolor,
          tabBarInactiveTintColor: whitecolor,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBottomItemText: {
    fontFamily: 'Faustina',
    fontSize: 9,
    marginBottom: 12,
  },
  tabBarIcon: {
    width: 18,
    height: 18,
    marginTop: 6,
  },
});

export default BottomTabNavigator;
