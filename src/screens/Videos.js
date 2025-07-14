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
  TouchableWithoutFeedback
} from 'react-native';
import {
  commonstyles,
  whitecolor,
  blackcolor,
  graycolor,
} from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';
import getVideoAction from '../redux/actions/getVideoAction';

const Videos = ({navigation, videosData, videosLoading,categoryName}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoAction());
  }, []);

  if (videosLoading) {
    return (
      <View style={commonstyles.loadingContainer}>
        <ActivityIndicator color={blackcolor} size="large" />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={commonstyles.container}>
        <View
          style={[
            commonstyles.homeOnetextView,
            {marginLeft: 12, marginVertical: 8},
          ]}>
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
            <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('VideoArticle', {
                  item: item,
                  detailsData: videosData?.data,
                  screenName:"Videos",
                  categoryName: categoryName
                });
              }}>
              <View
                style={[styles.videoContainer, index === 0 && {paddingTop: 0}]}>
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
});
const mapStateToProps = state => ({
  videosData: state.videoReducer?.videosData,
  videosLoading: state.videoReducer?.videosLoading,
});
const mapDispatchToProps = {
  getVideoAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Videos);
