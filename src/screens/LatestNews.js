/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { commonstyles } from '../styles/commonstyles';
import CategoryComponentTwo from '../components/CategoryComponentTwo';
import { BaseUrl, LatestUrl } from '../utilities/urls';
import Ripple from 'react-native-material-ripple';
import { blackcolor, whitecolor, bluecolor } from '../styles/commonstyles';

const LatestNews = ({ navigation}) => {
  const [latestNews, setLatestNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  const getLatestNewsAction = async (isLoadMore = false) => {
    if (loadingMore || (!hasMore && isLoadMore)) return;

    try {
      if (isLoadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }

      const response = await fetch(`${BaseUrl}${LatestUrl}?limit=${limit}&offset=${offset}`);
      const responseJson = await response.json();

      if (responseJson['1'] === 'success' && responseJson.data?.length > 0) {
        setLatestNewsData(prevData => [...prevData, ...responseJson.data]);
        setOffset(prevOffset => prevOffset + limit);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching getLatestNewsAction data:', error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    getLatestNewsAction();
  }, []);

  const renderItemTwo = ({ item }) => (
    <CategoryComponentTwo
      item={item}
      propsdata={latestNews}
      navigation={navigation}
      categoryName={item.title}
    />
  );

  const renderLoadMoreButton = () => {
    if (loadingMore) {
      return (
        <ActivityIndicator
          style={{marginVertical: 22}}
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
      <Ripple style={styles.loadMoreBtn} onPress={() => getLatestNewsAction(true)}>
        <Text style={styles.loadMoreBtnTxt}>Load More</Text>
      </Ripple>
    );
  };

  return (
    <SafeAreaView style={commonstyles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000000" style={{ flex: 1 }} />
      ) : (
        <>
          <View style={[commonstyles.homeOnetextView, { marginLeft: 12, marginVertical: 10 }]}>
            <Text style={commonstyles.galleryArticlecategorytext}>
              दिन की खबरें
            </Text>
          </View>
          <FlatList
            style={commonstyles.cateflist}
            data={latestNews}
            renderItem={renderItemTwo}
            keyExtractor={item => item.id?.toString() || Math.random().toString()}
            ListFooterComponent={renderLoadMoreButton}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadMoreBtn: {
    alignSelf: 'center',
    marginVertical: 12,
    paddingHorizontal: 18,
    paddingVertical: 8,
    backgroundColor: bluecolor,
    borderRadius: 30,
    padding: 10,
  },
  loadMoreBtnTxt: {
    color: whitecolor,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LatestNews;
