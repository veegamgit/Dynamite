import React, {useState, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, Image, Linking, Switch} from 'react-native';
import {HeaderStyle} from '../styles/Header.Styles';
import {
  blackcolor,
  bluecolor,
  commonstyles,
  whitecolor,
} from '../styles/commonstyles';
import SideMenu from '../screens/SideMenu';
import {useSelector} from 'react-redux';
import BottomTabNavigator from './BottomTabNavigator';
import HandlePressable from '../components/HandlePressable';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useLanguage} from '../utilities/languageContext';
import {Dropdown} from 'react-native-element-dropdown';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [notificationImage, setNotificationImage] = useState(
    require('../Assets/Images/notification_white.png'),
  );

  // Assuming you have access to sliderData from your Redux store
  const sliderData = useSelector(state => state.sliderData);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('हिंदी');
  const {language, setLanguage} = useLanguage('en');

  const toggleDropdown = () => setShowDropdown(prev => !prev);

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setShowDropdown(false);
  };
  useEffect(() => {
    if (sliderData && sliderData.length > 0) {
      const latestArticles = sliderData.slice(0, 10);
      const isNewArticle = latestArticles.some(article => article.isNew);
      if (isNewArticle) {
        setNotificationImage(require('../Assets/Images/notification.png'));
      } else {
        setNotificationImage(
          require('../Assets/Images/notification_white.png'),
        );
      }
    }
  }, [sliderData]);

  const langData = [
    {label: 'English', value: 'en'},
    {label: 'Hindi', value: 'hi'},
  ];

  return (
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
          //     headerRight: () => (
          //       <View style={HeaderStyle.HeadRightView}>
          //         <HandlePressable
          //           style={{
          //             flexDirection: 'row', borderRadius: 5, justifyContent: 'center',
          //             alignItems: 'center', paddingHorizontal: 10, paddingVertical: 4, backgroundColor: bluecolor
          //           }}
          //           onPress={toggleDropdown}>
          //           <Image
          //             style={[HeaderStyle.HeadRightpaperImg]}
          //             source={require('../Assets/Images/translate.png')}
          //           />
          //           <Text style={{
          //             color: whitecolor, fontSize: 12, fontWeight: '700',
          //             fontFamily: 'Mukta-SemiBold', marginLeft: 5, marginRight: 5
          //           }}>{selectedLanguage}</Text>
          //           <Image
          //             style={[HeaderStyle.HeadRightarrowImg]}
          //             source={require('../Assets/Images/arrow-down.png')}
          //           />
          //         </HandlePressable>
          //         {showDropdown && (
          //   <View style={styles.dropdown}>
          //     <TouchableOpacity onPress={() => handleLanguageSelect('हिंदी')}>
          //       <Text style={styles.dropdownItem}>हिंदी</Text>
          //     </TouchableOpacity>
          //     <TouchableOpacity onPress={() => handleLanguageSelect('ENGLISH')}>
          //       <Text style={styles.dropdownItem}>ENGLISH</Text>
          //     </TouchableOpacity>

          //   </View>
          // )}
          //       </View>
          //     ),
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 12,
              }}>
              <Dropdown
                style={{width: 90, height: 40}}
                //placeholderStyle={styles.placeholderStyle}
                //selectedTextStyle={styles.selectedTextStyle}
                //inputSearchStyle={styles.inputSearchStyle}
                //iconStyle={styles.iconStyle}
                data={langData}
                //search
                maxHeight={300}
                labelField="label"
                valueField="value"
                //placeholder={!isFocus ? 'Select item' : '...'}
                //searchPlaceholder="Search..."
                value={language}
                //onFocus={() => setIsFocus(true)}
                //onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setLanguage(item.value);
                  //setIsFocus(false);
                }}
              />
            </View>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
const styles = StyleSheet.create({
  container: {position: 'relative'},
  button: {
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#007bff',
  },
  icon: {width: 18, height: 18},
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Mukta-SemiBold',
    marginHorizontal: 5,
  },
  arrow: {width: 12, height: 12},

  dropdown: {
    position: 'absolute',
    top: 40, // height of the button + margin
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 5,
    padding: 8,
    zIndex: 999,
  },
  dropdownItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#000',
  },
});
