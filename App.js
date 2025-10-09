import React, {useEffect, useState} from 'react';
import {StatusBar, Platform, PermissionsAndroid} from 'react-native';
import {Provider, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
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
import iZooto from 'react-native-izooto';
import {request, RESULTS} from 'react-native-permissions';
import navigationRef from './src/navigation/NavigationService';

const Stack = createStackNavigator();

const AppContent = () => {
  console.log('appContent');
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);
  const [isLangAlreadySelected, setIsLangAlreadySelected] = useState(false);
  const checkNotificationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        if (Platform.Version >= 33) {
          const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
          const status = await PermissionsAndroid.request(permission, {
            title: 'Notification Permission',
            message:
              'This app needs notification permission to send you updates.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          });

          if (status === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Notifications permission granted');
          } else {
            console.log('Notifications permission denied');
            Alert.alert(
              'Permission Required',
              'Please enable notifications from settings.',
            );
          }
        } else {
          console.log('Android version < 13, no permission needed');
        }
      } else {
        // iOS permission handling
        const status = await request('ios.permission.NOTIFICATION');
        console.log('iOS notification permission status:', status);
        if (status === RESULTS.GRANTED) {
          console.log('Notifications enabled for iOS');
        } else {
          Alert.alert(
            'Notifications Disabled',
            'You have disabled notifications. Please enable them in settings.',
            [
              {text: 'Cancel', style: 'cancel'},
              {
                text: 'Go to Settings',
                onPress: () => Linking.openSettings(),
              },
            ],
          );
        }
      }
    } catch (error) {
      console.error('Error checking notification permission:', error);
    }
  };
  const linking = {
    prefixes: ['https://app'],
    config: {
      screens: {
        Details: 'Details',
      },
    },
  };

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
    checkNotificationPermission();
    iZooto.initAndroid(false);
    iZooto.setSubscription(true);
    iZooto.onTokenReceivedListener(token => {
      console.log('Token Received', token); // THIS CAN BE CHANGED AS PER REQUIREMENT
    });
    iZooto.onNotificationReceivedListener(payload => {
      console.log('Notification Payload', payload); // THIS CAN BE CHANGED AS PER REQUIREMENT
    });
    iZooto.onNotificationOpenedListener(async data => {
      const jsonString = `${data}`;
      const outerObject = JSON.parse(jsonString);
      const additionalData = JSON.parse(outerObject.additionalData);
      console.log('Parsed additionalData:', additionalData);

      if (additionalData.id) {
        try {
          navigationRef.current?.navigate('Details', {
            item: {
              id: additionalData.id,
              isNotification: true,
            },
          });
        } catch (err) {
          console.error('❌ Failed to parse additionalData:', err);
        }
      } else {
        console.log('⚠️ No additionalData present in payload');
      }
    });
    console.log('iZooto Initialized');
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
    <NavigationContainer ref={navigationRef} linking={linking}>
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
