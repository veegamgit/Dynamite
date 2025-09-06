/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  commonstyles,
  blackcolor,
  whitecolor,
  bluecolor,
} from '../styles/commonstyles';
import CategoryComponentTwo from './CategoryComponentTwo';
import CategoryComponentOne from './CategoryComponentOne';
import {HeaderStyle} from '../styles/Header.Styles';
import Ripple from 'react-native-material-ripple';
import Trending from '../components/Trending';

function CategoryUI({
  navigation,
  data,
  title,
  isTopNavigation,
  loadingMore,
  hasMore,
  loadMore,
}) {
  const renderItemOne = ({item}) => (
    <CategoryComponentOne
      item={item}
      propsdata={data}
      navigation={navigation}
      categoryName={title}
    />
  );

  const renderItemTwo = ({item}) => (
    <CategoryComponentTwo
      item={item}
      propsdata={data}
      navigation={navigation}
      categoryName={title}
    />
  );

  const renderLoadMoreButton = () => {
    if (loadingMore) {
      return (
        <ActivityIndicator
          style={{marginVertical: 16}}
          size="small"
          color={blackcolor}
        />
      );
    }

    if (!hasMore) {
      return (
        <Text style={commonstyles.noMoreText}>No more data available</Text>
      );
    }

    return (
      <Ripple style={styles.loadMoreBtn} onPress={loadMore}>
        <Text style={styles.loreMoreBtnTxt}>Load More</Text>
      </Ripple>
    );
  };

  const combinedData = [
    ...data.slice(0, 1).map(item => ({...item, type: 'one'})),
    ...data.slice(1).map(item => ({...item, type: 'two'})),
  ];

  const renderItem = ({item}) =>
    item.type === 'one' ? renderItemOne({item}) : renderItemTwo({item});
  return (
    <SafeAreaView styles={commonstyles.container}>
      {!isTopNavigation && (
        <View style={styles.pageHeader}>
          <Ripple
            onPress={() => navigation.goBack()}
            style={commonstyles.iconRipple}>
            <Image
              source={require('../Assets/Images/arrow.png')}
              style={commonstyles.actionIconSize}
            />
          </Ripple>
          <Text style={commonstyles.galleryArticlecategorytext}>
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </Text>
        </View>
      )}
      <ScrollView style={commonstyles.scroll}>
        <Trending />
        <View
          style={{padding: 12, ...(!isTopNavigation && {paddingBottom: 60})}}>
          <FlatList
            data={combinedData}
            ListHeaderComponent={() =>
              isTopNavigation ? (
                <View style={{marginBottom: 10}}>
                  <Text style={commonstyles.galleryArticlecategorytext}>
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </Text>
                </View>
              ) : null
            }
            renderItem={renderItem}
            keyExtractor={item =>
              item.id?.toString() || Math.random().toString()
            }
            scrollEnabled={false}
            ListFooterComponent={renderLoadMoreButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadMoreBtn: {
    alignSelf: 'center',
    marginTop: 10,
    paddingHorizontal: 18,
    paddingVertical: 8,
    backgroundColor: bluecolor,
    borderRadius: 30,
    padding: 10,
  },
  loreMoreBtnTxt: {
    color: whitecolor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  pageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: whitecolor,
  },
});

export default CategoryUI;
