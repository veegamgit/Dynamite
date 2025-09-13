import React, {lazy, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ActivityIndicator, Image, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import getTopMenuDataAction from '../redux/actions/getTopMenuDataAction';
import CategoryScreen from '../screens/Category';
import EmptyScreen from '../components/EmptyScreen';
import VideosScreen from '../screens/Videos';
import Home from '../screens/Home';
import {
  blackcolor,
  commonstyles,
  whitecolor,
  bluecolor,
} from '../styles/commonstyles';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const dispatch = useDispatch();
  const menuData =
    useSelector(state => state.topMenuDataReducer.topMenuData) || [];

  useEffect(() => {
    dispatch(getTopMenuDataAction());
  }, [dispatch]);

  // Flatten menu data with subItems included
  const mergedArray = menuData.reduce((acc, item) => {
    acc.push(item);
    if (item.subItems) {
      acc.push(...item.subItems);
    }
    return acc;
  }, []);

  function CategoryWrapper({route}) {
    const {item} = route.params;
    return <CategoryScreen isTopNavigation={true} item={item} />;
  }

  if (mergedArray.length === 0) {
    return <EmptyScreen message="No categories available" />;
  }

  return (
    <TopTab.Navigator
      initialRouteName="Home"
      detachInactiveScreens={false}
      screenOptions={{
        lazy: true,
        lazyPlaceholder: () => (
          <View style={commonstyles.spinnerView}>
            <ActivityIndicator size={'small'} color={blackcolor} />
          </View>
        ),
        lazyPreloadDistance: 0,
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {backgroundColor: bluecolor},
        tabBarActiveTintColor: bluecolor,
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'Mandali-Bold',
          fontWeight: '700',
        },
        tabBarStyle: {
          backgroundColor: whitecolor,
          height: 50,
        },
        tabBarItemStyle: {
          width: 'auto',
          paddingHorizontal: 5,
          alignItems: 'center',
        },
      }}>
      {/* Home Tab */}
      <TopTab.Screen
        key="Home"
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '', // No label for the Home tab
          tabBarIcon: () => (
            <Image
              source={require('../Assets/Images/home.png')}
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />

      {/* Other Tabs */}
      {mergedArray.map((item, index) => (
        <TopTab.Screen
          key={`${item.title}-${index}`}
          name={item.title}
          component={item.title === 'वीडियो' ? VideosScreen : CategoryWrapper}
          initialParams={{item}}
          options={{
            tabBarLabel: item.title,
          }}
        />
      ))}
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
