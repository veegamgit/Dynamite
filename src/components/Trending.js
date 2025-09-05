import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import {
  blackcolor,
  bluecolor,
  light_gray,
  whitecolor,
} from '../styles/commonstyles';
import {useDispatch, useSelector} from 'react-redux';
import getTrendingAction from '../redux/actions/getTrendingAction';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';
import TrendIcon from '../Assets/Images/trend.png';
import {useLanguage} from '../utilities/languageContext';

const Trending = React.memo(() => {
  const [trendLength, setTrendLength] = useState(0);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {language} = useLanguage();
  const {trendingData, trendingLoading, error} = useSelector(
    state => state.trendingReducer,
  );
  function callback() {
    setTrendLength(trendingData.menu_items?.length);
  }
  useEffect(() => {
    dispatch(getTrendingAction());
    callback();
  }, [language]);

  const trendRederItem = ({item, index}) => {
    return (
      <Ripple
        style={{flexDirection: 'row', alignItems: 'center'}}
        key={index}
        onPress={() =>
          navigation.push('Topics', {
            item: {link: item.url, name: item.title},
          })
        }>
        <Text style={styles.trendItem}>{item.title}</Text>
        {trendLength !== index + 1 && <Text style={styles.pipe}>|</Text>}
      </Ripple>
    );
  };
  return (
    <View style={styles.treningContainer}>
      <Image source={TrendIcon} style={styles.trendIcon} resizeMode="contain" />
      <Text style={styles.trendHeading}>In Trends:</Text>
      {trendingLoading ? (
        <ActivityIndicator
          size="small"
          color={blackcolor}
          style={{marginLeft: 12}}
        />
      ) : (
        <>
          {trendingData.menu_items?.length > 0 ? (
            <FlatList
              data={trendingData?.menu_items}
              key={index => index.toString()}
              renderItem={trendRederItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <Text style={styles.trendItem}>No Trending's: {error}</Text>
          )}
        </>
      )}
    </View>
  );
});
const styles = StyleSheet.create({
  treningContainer: {
    paddingLeft: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: light_gray,
    backgroundColor: whitecolor,
  },
  trendHeading: {
    fontSize: 14,
    fontWeight: '600',
    color: blackcolor,
    marginHorizontal: 5,
  },
  trendItem: {
    fontSize: 13,
    color: blackcolor,
    marginHorizontal: 8,
  },
  trendIcon: {
    width: 14,
  },
  pipe: {
    fontSize: 13,
    color: blackcolor,
  },
});
export default Trending;
