/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
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
import {useTranslation} from 'react-i18next';

function AuthorUI({
  navigation,
  data,
  title,
  isTopNavigation,
  loadingMore,
  hasMore,
  loadMore,
}) {
  const {t} = useTranslation();
  // Render Item One
  const renderItemOne = ({item}) => (
    <CategoryComponentOne
      item={item}
      propsdata={data}
      navigation={navigation}
      categoryName={title}
    />
  );

  // Render Item Two
  const renderItemTwo = ({item}) => (
    <CategoryComponentTwo
      item={item}
      propsdata={data}
      navigation={navigation}
      categoryName={title}
    />
  );

  // Render Load More Button or Activity Indicator
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
      return <Text style={commonstyles.noMoreText}>{t('nomoredata')}</Text>;
    }

    return (
      <TouchableOpacity style={styles.loadMoreBtn} onPress={loadMore}>
        <Text style={styles.loadMoreBtnTxt}>{t('loadmore')}</Text>
      </TouchableOpacity>
    );
  };

  // Combined data to create type-based distinction
  const combinedData = data.map((item, index) => ({
    ...item,
    type: index === 0 ? 'one' : 'two',
  }));

  // Render based on item type
  const renderItem = ({item}) =>
    item.type === 'one' ? renderItemOne({item}) : renderItemTwo({item});

  return (
    <SafeAreaView style={commonstyles.container}>
      {/* Conditionally render header */}
      {!isTopNavigation && (
        <View style={HeaderStyle.DetailsHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../Assets/Images/arrow.png')}
              style={{width: 22, height: 22}}
            />
          </TouchableOpacity>
        </View>
      )}

      <ScrollView style={commonstyles.scroll}>
        <View style={{padding: 12, paddingBottom: !isTopNavigation ? 64 : 16}}>
          <FlatList
            data={combinedData}
            renderItem={renderItem}
            keyExtractor={(item, index) =>
              item.id?.toString() || index.toString()
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
  },
  loadMoreBtnTxt: {
    color: whitecolor,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AuthorUI;
