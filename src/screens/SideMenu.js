import React, {useEffect} from 'react';
import {DrawerItem} from '@react-navigation/drawer';
import {View, Text, Image, FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import getTopMenuDataAction from '../redux/actions/getTopMenuDataAction';
import {sideMenuStyle} from '../styles/SideMenuStyles';
import {blackcolor, graycolor} from '../styles/commonstyles';
import {useTranslation} from 'react-i18next';

const SideMenu = ({navigation}) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const currentLanguage = useSelector(
    state => state.languageReducer.selectedLanguage,
  );

  useEffect(() => {
    dispatch(getTopMenuDataAction());
  }, [dispatch]);

  let menuData =
    useSelector(state => state.topMenuDataReducer.topMenuData) || [];

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

  const handleNavigation = title => {
    if (title === 'वीडियो') {
      navigation.navigate('VDStack');
    } else {
      navigation.navigate(title, {
        isTagDeepLinkClicked: false,
        url: title,
      });
    }
  };

  const companyLogo =
    currentLanguage === 'हिंदी'
      ? require('../Assets/Images/logo_hn.png')
      : require('../Assets/Images/logo_en.png');

  return (
    <SafeAreaView style={sideMenuStyle.areaView}>
      <View style={sideMenuStyle.MainView}>
        <View style={sideMenuStyle.logoView}>
          <Image
            style={sideMenuStyle.logoText}
            source={companyLogo}
            resizeMode="contain"
          />
        </View>
      </View>
      <FlatList
        data={mergedArray}
        ItemSeparatorComponent={() => <View style={{}} />}
        renderItem={({item}) => (
          <View>
            <DrawerItem
              onPress={() => {
                handleNavigation(item.title);
              }}
              style={{
                borderTopColor: graycolor,
                borderTopWidth: 1,
                marginVertical: -1,
              }}
              icon={() => (
                <Image
                  style={sideMenuStyle.listImg}
                  source={{uri: item.Image}}
                />
              )}
              label={() => <Text style={sideMenuStyle.text}>{item.title}</Text>}
              labelStyle={sideMenuStyle.text}
            />
          </View>
        )}
        ListFooterComponent={() => (
          <>
            <DrawerItem
              style={sideMenuStyle.item}
              icon={() => (
                <Image
                  source={require('../Assets/Images/settings.png')}
                  style={sideMenuStyle.icon}
                />
              )}
              label={t('settings')}
              labelStyle={sideMenuStyle.text}
              onPress={() => {
                navigation.navigate('Settings');
              }}
            />
            <DrawerItem
              style={sideMenuStyle.item}
              label={t('appversion') + ' 1.0.0'}
              labelStyle={{
                color: blackcolor,
                fontSize: 12,
              }}
            />
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default SideMenu;
