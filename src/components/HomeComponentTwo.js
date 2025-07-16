/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Share, Text, View} from 'react-native';
import {commonstyles} from '../styles/commonstyles';
import moment from 'moment';
import FastImage from 'react-native-fast-image';
import HandlePressable from './HandlePressable';

const HomeComponentTwo = ({item, navigation, propsdata, categoryName}) => {
  const sharecall = () => {
    const Link_Url = item?.link;
    Share.share({
      message: Link_Url,
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };
  let decode = require('html-entities-decoder');

  const defaultImage = require('../Assets/Images/noimage.png');
  const imageUrl = item?.web_featured_image
    ? {uri: item?.web_featured_image}
    : defaultImage;

  const apiDate = item?.date;
  const formattedDate = moment(apiDate).format('MMM DD, YYYY | hh:mm A');

  return (
    <HandlePressable
      onPress={() => {
        navigation.push('Details', {
          item,
          detailsData: propsdata,
          categoryName: categoryName,
        });
      }}>
      <View style={commonstyles.HomeComp2DotView}>
        <View style={commonstyles.cateviewText}>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={commonstyles.latestText}>
            {decode(item?.title?.rendered)}
          </Text>
          {/* Time View */}
          <View style={commonstyles.articleTimeStamp}>
            <Text style={commonstyles.HomeTwotime}>{formattedDate}</Text>
            <HandlePressable
              onPress={() => {
                sharecall();
              }}
              style={commonstyles.iconPress}>
              <Image
                style={commonstyles.shareIcon}
                source={require('../Assets/Images/share_black.png')}
              />
            </HandlePressable>
          </View>
        </View>
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          source={imageUrl}
          style={commonstyles.cateImage}
        />
      </View>
    </HandlePressable>
  );
};

export default HomeComponentTwo;
