/* eslint-disable prettier/prettier */
import React, {memo} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {blackcolor, bluecolor, commonstyles} from '../styles/commonstyles';
import HomeComponentFour from './HomeComponentFour';
import HomeComponentThree from './HomeComponentThree';
import Ripple from 'react-native-material-ripple';
import {useTranslation} from 'react-i18next';

function HomeUINew(props) {
  const {navigation, categoryName} = props;
  const {t} = useTranslation();

  const renderItemOne = ({item}) => (
    <HomeComponentThree
      item={item}
      propsdata={props?.data}
      navigation={props?.navigation}
      categoryName={categoryName}
    />
  );

  const renderItemTwo = ({item}) => (
    <HomeComponentFour
      item={item}
      propsdata={props?.data}
      navigation={props?.navigation}
      categoryName={categoryName}
    />
  );

  // Ensure props.data is an array
  const newdata = Array.isArray(props?.data) ? props.data : [];

  return (
    <SafeAreaView styles={commonstyles.container}>
      <View style={{paddingHorizontal: 12, marginTop: 16}}>
        {/* Category text */}
        <View style={commonstyles.homecategoryView}>
          <Text style={commonstyles.Category}>{props?.categoryName}</Text>
          <Ripple
            onPress={() => {
              navigation.navigate(props?.categoryName, {
                url: props?.navigationScreen,
                title: props?.categoryName,
                isCategoryClicked: true,
              });
            }}>
            {/* <Image
                style={commonstyles.actionIconSize}
                source={require('../Assets/Images/next.png')}
              /> */}
            {/* <View style={{}}> */}
            <Text style={commonstyles.seealltext}>{t('seeall')}</Text>
            {/* </View> */}
          </Ripple>
        </View>
        {newdata.length > 0 ? (
          <View style={commonstyles.homeCategoryflatView}>
            <FlatList
              data={newdata.slice(0, 1)}
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
              showsHorizontalScrollIndicator={true}
              persistentScrollbar={false}
              horizontal={true}
              data={newdata.slice(1, 10)}
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

export default memo(HomeUINew);
