import React, {useEffect} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/store';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import getSliderAction from './src/redux/actions/getSliderAction';
import getLatestNewsAction from './src/redux/actions/getLatestNewsAction';
import getVideoAction from './src/redux/actions/getVideoAction';
import getPhotoGalleryAction from './src/redux/actions/getPhotoGalleryAction';
import getTopMenuDataAction from './src/redux/actions/getTopMenuDataAction';
import SplashScreen from 'react-native-splash-screen';
import {whitecolor} from './src/styles/commonstyles';
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

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  useEffect(() => {
    store.dispatch(getSliderAction());
    store.dispatch(getLatestNewsAction());
    store.dispatch(getNationalAction());

    store.dispatch(getVideoAction());
    store.dispatch(getPhotoGalleryAction());
    store.dispatch(getTopMenuDataAction());
    store.dispatch(getIndiaAction());
    store.dispatch(getMaharashtraAction());
    store.dispatch(getElectionsAction());
    store.dispatch(getWorldAction());
    store.dispatch(getSportsAction());
    store.dispatch(getLifestyleAction());
    store.dispatch(getSpecialAction());
    store.dispatch(getMoviesAction());
    store.dispatch(getBusinessAction());
    store.dispatch(getAutomobileAction());
    store.dispatch(getTechnologyAction());
    store.dispatch(getReligionAction());
    store.dispatch(getCareerAction());
    store.dispatch(getTravelAction());
    store.dispatch(getGaneshAction());
  }, []);

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={whitecolor} />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
