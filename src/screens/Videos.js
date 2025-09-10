/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {
  commonstyles,
  whitecolor,
  blackcolor,
  graycolor,
  bluecolor,
} from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';
import getVideoAction from '../redux/actions/getVideoAction';

const Videos = ({
  navigation,
  videosData,
  videosLoading,
  hasMore,
  categoryName,
  videosLoadingMore,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoAction(false, 0));
  }, [dispatch]);

  const handleLoadMore = () => {
    if (!videosLoading && hasMore) {
      const currentLength = videosData?.data?.length || 0;
      dispatch(getVideoAction(true, currentLength));
    }
  };

  if (videosLoading) {
    return (
      <View style={commonstyles.loadingContainer}>
        <ActivityIndicator color={blackcolor} size="large" />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={commonstyles.container}>
        <View style={[{marginLeft: 12, marginVertical: 8}]}>
          <Text style={commonstyles.galleryArticlecategorytext}>
            वीडियो गैलरी
          </Text>
        </View>
        <ScrollView style={commonstyles.scroll}>
          <FlatList
            style={commonstyles.cateflist}
            data={videosData?.data}
            numColumns={1}
            renderItem={({item, index}) => (
              <View style={{flex: 1}}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate('VideoArticle', {
                      item: item,
                      detailsData: videosData?.data,
                      screenName: 'Videos',
                      categoryName: categoryName,
                    });
                  }}>
                  <View
                    style={[
                      styles.videoContainer,
                      index === 0 && {paddingTop: 0},
                    ]}>
                    <View>
                      {typeof item?.web_featured_image === 'string' &&
                      item?.web_featured_image.trim() !== '' ? (
                        <View style={{position: 'relative'}}>
                          <FastImage
                            style={commonstyles.VideoimgTag}
                            source={{uri: item?.web_featured_image}}
                          />
                          <View style={styles.videoIconAbs}>
                            <Image
                              source={require('../Assets/Images/video.png')}
                              style={{tintColor: whitecolor}}
                            />
                          </View>
                        </View>
                      ) : null}
                    </View>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={commonstyles.latestTxtTag}>
                      {item?.title?.rendered}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            )}
            scrollEnabled={false}
            ListFooterComponent={() => (
              <View style={styles.footerContainer}>
                {hasMore ? (
                  videosLoadingMore ? (
                    <View style={styles.loadingContainer}>
                      <ActivityIndicator size="small" color={bluecolor} />
                    </View>
                  ) : (
                    <Ripple style={styles.loadMoreBtn} onPress={handleLoadMore}>
                      <Text style={styles.loreMoreBtnTxt}>Load More</Text>
                    </Ripple>
                  )
                ) : videosData?.data?.length > 0 ? (
                  <Text style={styles.noMoreDataText}>
                    No more videos available
                  </Text>
                ) : null}
              </View>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  videoContainer: {
    borderBottomColor: graycolor,
    borderBottomWidth: 1,
    paddingTop: 12,
  },
  videoIconAbs: {
    bottom: 12,
    right: 12,
    position: 'absolute',
  },
  footerContainer: {
    paddingVertical: 10,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  loadMoreBtn: {
    alignSelf: 'center',
    paddingHorizontal: 24,
    backgroundColor: bluecolor,
    borderRadius: 30,
    padding: 10,
    overflow: 'hidden',
  },
  loreMoreBtnTxt: {
    color: whitecolor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  noMoreDataText: {
    color: blackcolor,
    fontSize: 14,
    fontFamily: 'Mandali-Regular',
    textAlign: 'center',
  },
});
const mapStateToProps = state => ({
  videosData: state.videoReducer?.videosData,
  videosLoading: state.videoReducer?.videosLoading,
  videosLoadingMore: state.videoReducer?.videosLoadingMore,
  hasMore: state.videoReducer?.hasMore,
});
const mapDispatchToProps = {
  getVideoAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Videos);
