/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {commonstyles, whitecolor} from '../styles/commonstyles';
import HandlePressable from './HandlePressable';

class HomeVideosgalleryItemOne extends React.PureComponent {
  render() {
    let decode = require('html-entities-decoder');
    const defaultImage = require('../Assets/Images/noimage.png');
    const imageUrl = this.props?.item?.web_featured_image
      ? {uri: this.props?.item?.web_featured_image}
      : defaultImage;

    return (
      <HandlePressable
      color='rgba(0,0,0,0.15)'
        onPress={() => {
          this.props.navigation.push('VideoArticle', {
            item: this.props.item,
            detailsData: this.props.videosData?.data,
          });
        }}>
        <View style={commonstyles.HomeVideoCategoryview}>
          <View style={{position: 'relative'}}>
            <FastImage
              source={imageUrl}
              style={commonstyles.HomeVideoImg}
              // resizeMode="cover"
            />
            <View
              style={{
                bottom: 15,
                right: 12,
                position: 'absolute',
              }}>
              <Image
                source={require('../Assets/Images/video.png')}
                style={{tintColor: whitecolor}}
              />
            </View>
          </View>
          <View style={commonstyles.homeVideoTextView}>
            <Text numberOfLines={2} style={commonstyles.HomeVideotext}>
              {decode(this.props?.item?.title?.rendered)}
            </Text>
          </View>
        </View>
      </HandlePressable>
    );
  }
}
export default HomeVideosgalleryItemOne;
