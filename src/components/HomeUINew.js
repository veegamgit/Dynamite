/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ActivityIndicator
} from 'react-native';
import { blackcolor, commonstyles } from '../styles/commonstyles';
import HomeComponentFour from './HomeComponentFour';
import HomeComponentThree from './HomeComponentThree';
import Ripple from 'react-native-material-ripple';

function HomeUINew(props) {
  const { navigation, categoryName } = props;

  const renderItemOne = ({ item }) => (
    <HomeComponentThree
      item={item}
      propsdata={props?.data}
      navigation={props?.navigation}
      categoryName={categoryName}
    />
  );

  const renderItemTwo = ({ item }) => (
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
      <View style={{ paddingHorizontal: 12, marginTop: 16 }}>
        {/* Category text */}
        <View style={commonstyles.homecategoryView}>
          <View style={commonstyles.homeOnetextView}>
            <Text style={commonstyles.Category}>{props?.categoryName}</Text>
          </View>
          <Ripple
              onPress={() => {
                navigation.push(props?.categoryName, {
                  url: props?.navigationScreen,
                  title: props?.categoryName,
                  isCategoryClicked: true
                })
              }}>
              <Image
                style={commonstyles.actionIconSize}
                source={require('../Assets/Images/next.png')}
              />
              {/* <View style={{}}> */}
            {/* <Text style={commonstyles.seealltext}>See All</Text> */}
          {/* </View> */}
            </Ripple>
        </View>
        {newdata.length > 0 ? <View style={commonstyles.homeCategoryflatView}>
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
        </View> : <ActivityIndicator size={'large'} color={'pink'}style={{paddingVertical: 12}} />}
      </View>
    </SafeAreaView>
  );
}

export default HomeUINew;
