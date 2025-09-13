import React, {useState, useCallback} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Image, ActivityIndicator, Modal} from 'react-native';
import {HeaderStyle} from '../styles/Header.Styles';
import {
  blackcolor,
  bluecolor,
  commonstyles,
  whitecolor,
} from '../styles/commonstyles';
import SideMenu from '../screens/SideMenu';
import BottomTabNavigator from './BottomTabNavigator';
import HandlePressable from '../components/HandlePressable';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {
  setLanguage,
  completeLanguageChange,
} from '../redux/actions/languageActions';
import {useDispatch, useSelector} from 'react-redux';
import getSliderAction from '../redux/actions/getSliderAction';
import getLatestNewsAction from '../redux/actions/getLatestNewsAction';
import getVideoAction from '../redux/actions/getVideoAction';
import getPhotoGalleryAction from '../redux/actions/getPhotoGalleryAction';
import getTopMenuDataAction from '../redux/actions/getTopMenuDataAction';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState('हिंदी');
  const isChangingLanguage = useSelector(
    state => state.languageReducer.isChangingLanguage,
  );

  const reloadAppData = useCallback(async () => {
    try {
      // Reload all main data
      await Promise.all([
        dispatch(getSliderAction()),
        dispatch(getLatestNewsAction()),
        dispatch(getVideoAction()),
        dispatch(getPhotoGalleryAction()),
        dispatch(getTopMenuDataAction()),
      ]);
    } finally {
      // Complete the language change process
      dispatch(completeLanguageChange());
    }
  }, [dispatch]);

  // Set initial language and load data
  React.useEffect(() => {
    dispatch(setLanguage('hindi'));
    reloadAppData();
  }, [dispatch, reloadAppData]);

  const handleLanguageSelect = async lang => {
    setSelectedLanguage(lang);
    // Set the language in Redux store and update BaseUrl
    await dispatch(setLanguage(lang === 'हिंदी' ? 'हिंदी' : 'English'));
    // Reload all data with new language
    reloadAppData();
  };

  return (
    <>
      <Modal
        transparent={true}
        visible={isChangingLanguage}
        animationType="fade">
        <View style={styles.loaderModal}>
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={bluecolor} />
          </View>
        </View>
      </Modal>
      <Drawer.Navigator
        drawerContent={props => <SideMenu {...props} />}
        useLegacyImplementation={false}>
        <Drawer.Screen
          name="Home"
          component={BottomTabNavigator}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: whitecolor,
            },
            headerLeft: () => (
              <View style={HeaderStyle.headerLeftView}>
                <HandlePressable
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                  style={commonstyles.iconRipple}>
                  <Image
                    style={HeaderStyle.HeadRightImg}
                    source={require('../Assets/Images/menu.png')}
                  />
                </HandlePressable>
              </View>
            ),
            headerTitle: () => (
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo_hn.png')}
                resizeMode="contain"
              />
            ),
            headerRight: () => (
              <>
                <Dropdown
                  style={styles.dropdown}
                  selectedTextStyle={{color: whitecolor, fontSize: 14}}
                  itemTextStyle={{
                    color: blackcolor,
                    fontSize: 14,
                    height: 'auto',
                  }}
                  data={[
                    {label: 'हिंदी', value: 'हिंदी'},
                    {label: 'English', value: 'English'},
                  ]}
                  labelField="label"
                  valueField="value"
                  value={selectedLanguage}
                  onChange={item => {
                    handleLanguageSelect(item.label);
                  }}
                  iconColor={whitecolor}
                  dropdownPosition="bottom"
                  renderLeftIcon={() => (
                    <Image
                      source={require('../Assets/Images/translate.png')}
                      style={{width: 16, height: 16, marginRight: 6}}
                    />
                  )}
                />
              </>
            ),
          })}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  dropdown: {
    width: 100,
    height: 30,
    backgroundColor: bluecolor,
    color: whitecolor,
    borderRadius: 8,
    marginRight: 12,
    padding: 4,
  },
  loaderModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loaderContainer: {
    backgroundColor: whitecolor,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});
