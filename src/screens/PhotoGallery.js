/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import getPhotoGalleryAction from '../redux/actions/getPhotoGalleryAction';
import {
  blackcolor,
  commonstyles,
  graycolor,
  whitecolor,
} from '../styles/commonstyles';
import {StyleSheet} from 'react-native';
import HandlePressable from '../components/HandlePressable';
import FastImage from 'react-native-fast-image';

const PhotoGallery = ({navigation, photosData, photosLoading}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotoGalleryAction());
  }, [dispatch]);

  const getPhotoCount = content => {
    if (!content) return 0;
    const regex = /<dl class='gallery-item'>/g;
    const matches = content.match(regex);
    return matches ? matches.length : 0;
  };

  if (photosLoading) {
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
            फोटो गैलरी
          </Text>
        </View>
        <FlatList
          style={commonstyles.photoflist}
          data={photosData?.data}
          numColumns={1}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          keyExtractor={item => item.id?.toString()}
          renderItem={({item, index}) => {
            const photoCount = getPhotoCount(item?.content?.rendered);
            return (
              <HandlePressable
                onPress={() => {
                  navigation.push('PhotoArticle', {
                    item: item,
                    detailsData: photosData?.data,
                  });
                }}>
                <View
                  style={[
                    styles.photoContainer,
                    index === 0 && {paddingTop: 0},
                  ]}>
                  <View style={{position: 'relative'}}>
                    <FastImage
                      style={commonstyles.PhotoimgTag}
                      source={{uri: item?.web_featured_image}}
                      resizeMode="cover"
                    />
                  <View style={styles.countAbs}>
                    <View style={styles.photoCountContainer}>
                      <Image
                        source={require('../Assets/Images/gallery.png')}
                        style={styles.photoIcon}
                      />
                      <Text style={styles.photoCount}>{photoCount}</Text>
                    </View>
                  </View>
                  </View>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={commonstyles.latestTxtTag}>
                    {item?.title?.rendered}
                  </Text>
                </View>
              </HandlePressable>
            );
          }}
        />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  photoContainer: {
    borderBottomColor: graycolor,
    borderBottomWidth: 1,
    paddingTop: 12,
  },
  photoCount: {
    color: whitecolor,
    fontSize: 14,
    left: 4,
  },
  photoIcon: {
    height: 15,
    width: 15,
    tintColor: whitecolor,
  },
  photoCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countAbs: {
    bottom: 10,
    right: 15,
    position: 'absolute',
  },
});
const mapStateToProps = state => ({
  photosData: state.photosGalleryReducer?.photosData,
  photosLoading: state.photosGalleryReducer?.photosLoading,
});

const mapDispatchToProps = {
  getPhotoGalleryAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);
