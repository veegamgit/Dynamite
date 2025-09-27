/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {bluecolor, commonstyles} from '../styles/commonstyles';
import HomeComponentOne from '../components/HomeComponentOne';
import HomeComponentTwo from './HomeComponentTwo';
import Ripple from 'react-native-material-ripple';
import {useTranslation} from 'react-i18next';

function HomeUI(props) {
  const {navigation, categoryName} = props;
  const {t} = useTranslation();

  const renderItemOne = ({item}) => (
    <HomeComponentOne
      item={item}
      propsdata={props?.data}
      navigation={navigation}
      categoryName={categoryName}
    />
  );

  const renderItemTwo = ({item}) => (
    <HomeComponentTwo
      item={item}
      propsdata={props?.data}
      navigation={navigation}
      categoryName={categoryName}
    />
  );

  const newdata = Array.isArray(props?.data) ? props.data : [];

  return (
    <SafeAreaView styles={commonstyles.container}>
      <View style={{paddingHorizontal: 12, marginTop: 16}}>
        <View style={commonstyles.homecategoryView}>
          <View style={{}}>
            <Text style={commonstyles.Category}>{props?.categoryName}</Text>
          </View>
          <Ripple
            onPress={() => {
              navigation.navigate(props?.categoryName, {
                url: props?.navigationScreen,
                title: props?.categoryName,
                isCategoryClicked: true,
              });
            }}>
            {/* <Image style={commonstyles.actionIconSize} source={require('../Assets/Images/next.png')} /> */}
            <Text style={commonstyles.seealltext}>{t('seeall')}</Text>
          </Ripple>
        </View>

        {newdata.length > 0 ? (
          <View style={commonstyles.homeCategoryflatView}>
            <FlatList
              data={newdata?.slice(0, 1)}
              showsHorizontalScrollIndicator={false}
              persistentScrollbar={false}
              numColumns={1}
              onEndReachedThreshold={50}
              getItemLayout={(data, index) => ({
                length: 40,
                offset: 40 * index,
                index,
              })}
              renderItem={renderItemOne}
            />
            <FlatList
              showsHorizontalScrollIndicator={false}
              persistentScrollbar={false}
              data={newdata?.slice(1, 6)}
              onEndReachedThreshold={50}
              getItemLayout={(data, index) => ({
                length: 40,
                offset: 40 * index,
                index,
              })}
              renderItem={renderItemTwo}
            />
          </View>
        ) : (
          <ActivityIndicator
            size={'large'}
            color={bluecolor}
            style={{paddingVertical: 12}}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export default memo(HomeUI);
