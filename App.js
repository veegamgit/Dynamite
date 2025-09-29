import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {Provider, useDispatch} from 'react-redux';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {store} from './src/redux/store';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import SplashScreen from 'react-native-splash-screen';
import {whitecolor} from './src/styles/commonstyles';
import {createStackNavigator} from '@react-navigation/stack';
import LanguageComponent from './src/screens/Language';
import {loadLanguage} from './src/redux/actions/languageActions';

import getSliderAction from './src/redux/actions/getSliderAction';
import getLatestNewsAction from './src/redux/actions/getLatestNewsAction';
import getVideoAction from './src/redux/actions/getVideoAction';
import getPhotoGalleryAction from './src/redux/actions/getPhotoGalleryAction';
import getTopMenuDataAction from './src/redux/actions/getTopMenuDataAction';
import getAutomobileAction from './src/redux/actions/getAutomobileAction';
import getIndiaAction from './src/redux/actions/getIndiaAction';
import getMaharashtraAction from './src/redux/actions/getUttarpradeshAction';
import getElectionsAction from './src/redux/actions/getElectionsAction';
import {getWorldAction} from './src/redux/actions/getWorldAction';
import getSportsAction from './src/redux/actions/getSportsAction';
import {getLifestyleAction} from './src/redux/actions/getLifestyleAction';
import {getSpecialAction} from './src/redux/actions/getSpecialAction';
import getMoviesAction from './src/redux/actions/getMoviesAction';
import getBusinessAction from './src/redux/actions/getBusinessAction';
import getTechnologyAction from './src/redux/actions/getTechnologyAction';
import getReligionAction from './src/redux/actions/getReligionAction';
import {getCareerAction} from './src/redux/actions/getCareerAction';
import getTravelAction from './src/redux/actions/getTravelAction';
import getGaneshAction from './src/redux/actions/getGaneshAction';
import {getNationalAction} from './src/redux/actions/getNationalAction';
import './i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const AppContent = () => {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);
  const [isLangAlreadySelected, setIsLangAlreadySelected] = useState(false);

  useEffect(() => {
    const fetchLang = async () => {
      try {
        const lang = await AsyncStorage.getItem('selectedLang');
        if (lang === null) {
          setIsLangAlreadySelected(false);
        } else {
          setIsLangAlreadySelected(true);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchLang();
  }, []);

  useEffect(() => {
    // Load saved language from AsyncStorage → Redux
    const init = async () => {
      await dispatch(loadLanguage());
      dispatch(getTopMenuDataAction());
      dispatch(getSliderAction());
      dispatch(getLatestNewsAction());
      dispatch(getNationalAction());
      dispatch(getVideoAction());
      dispatch(getPhotoGalleryAction());
      dispatch(getIndiaAction());
      dispatch(getMaharashtraAction());
      dispatch(getElectionsAction());
      dispatch(getWorldAction());
      dispatch(getSportsAction());
      dispatch(getLifestyleAction());
      dispatch(getSpecialAction());
      dispatch(getMoviesAction());
      dispatch(getBusinessAction());
      dispatch(getAutomobileAction());
      dispatch(getTechnologyAction());
      dispatch(getReligionAction());
      dispatch(getCareerAction());
      dispatch(getTravelAction());
      dispatch(getGaneshAction());

      setTimeout(() => {
        SplashScreen.hide();
        setIsReady(true);
      }, 3000);
    };

    init();
  }, [dispatch]);

  if (!isReady) return null; // optionally show splash until ready

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLangAlreadySelected ? 'homeScreen' : 'language'}>
        <Stack.Screen
          name="language"
          key={'language'}
          component={LanguageComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          key={'homeScreen'}
          name="homeScreen"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="dark-content" backgroundColor={whitecolor} />
    <AppContent />
  </Provider>
);

export default App;
