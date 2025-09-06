/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import Details from '../../screens/Details';
import PhotoArticle from '../../screens/PhotoArticle';
import VideoArticle from '../../screens/VideoArticle';
import EmptyScreen from '../../components/EmptyScreen';
import CategoryScreen from '../../screens/Category';
import getTopMenuDataAction from '../../redux/actions/getTopMenuDataAction';
import PhotoGallery from '../../screens/PhotoGallery';
import Videos from '../../screens/Videos';
import TopTabNavigator from '../TopTabNavigator';
import WebstoriesCategory from '../../screens/WebstoriesCategory';
import Settings from '../../screens/Settings';
import AboutUs from '../../screens/contactscreens/AboutUs';
import ContactUs from '../../screens/contactscreens/ContactUs';
import PrivacyPolicy from '../../screens/contactscreens/PrivacyPolicy';
import Terms from '../../screens/contactscreens/Terms';
import AuthorScreen from '../../screens/Author';
import Topics from '../../screens/Topics';

const Stack = createStackNavigator();

const HomeStackNavigator = ({menuData}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopMenuDataAction());
  }, [dispatch]);

  menuData = useSelector(state => state.topMenuDataReducer.topMenuData) || [];

  const mergedArray = [];
  menuData.forEach(item => {
    if (item.subItems) {
      mergedArray.push(item);
      item.subItems.forEach(subItem => {
        mergedArray.push({
          ...subItem,
        });
      });
    } else {
      mergedArray.push(item);
    }
  });

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      {mergedArray.length > 0 ? (
        mergedArray.map((item, index) => (
          <Stack.Screen
            key={item.id ? `${item.id}` : `${item.title}-${index}`}
            name={index === 0 ? 'Home' : `${item.title}-${index}`}
            component={
              index === 0
                ? TopTabNavigator
                : () => <CategoryScreen item={item} />
            }
          />
        ))
      ) : (
        <Stack.Screen name="EmptyScreen" component={EmptyScreen} />
      )}
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="PhotoArticle" component={PhotoArticle} />
      <Stack.Screen name="VideoArticle" component={VideoArticle} />
      <Stack.Screen name="WebstoriesCategory" component={WebstoriesCategory} />
      <Stack.Screen name="Photos" component={PhotoGallery} />
      <Stack.Screen name="Videos" component={Videos} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="About" component={AboutUs} />
      <Stack.Screen name="Contact" component={ContactUs} />
      <Stack.Screen name="Privacy" component={PrivacyPolicy} />
      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="Author" component={AuthorScreen} />
      <Stack.Screen name="Topics" component={Topics} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
