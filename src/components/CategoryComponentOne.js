/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, Image, Share } from 'react-native';
import FastImage from 'react-native-fast-image';
import { commonstyles, medium_gray } from '../styles/commonstyles';
import moment from 'moment';
import HandlePressable from './HandlePressable';

const CategoryComponentOne = ({ item, navigation, propsdata, categoryName }) => {
  const decode = require('html-entities-decoder');
  const defaultImage = require('../Assets/Images/home.png');
  const imageUrl = item?.web_featured_image
    ? { uri: item?.web_featured_image }
    : defaultImage;

  const sharecall = () => {
    const Link_Url = item?.link;
    Share.share({
      message: Link_Url,
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const apiDate = item?.date;
  const formattedDate = moment(apiDate).format("MMM DD, YYYY | hh:mm A");

  return (
    <View style={{ borderBottomColor: medium_gray, borderBottomWidth: 2, paddingBottom: 10}}>
      <HandlePressable
        onPress={() => {
          navigation.push('Details', {
            item: item,
            detailsData: propsdata,
            categoryName: categoryName
          });
        }}>
        <View style={commonstyles.CategoryOneview}>
          <FastImage
            resizeMode={FastImage.resizeMode.cover}
              source={imageUrl}
              style={commonstyles.CategoryOneImg}
            />
          <View style={commonstyles.categoryoneTextView}>
            <Text numberOfLines={3} style={commonstyles.CategoryOnetext}>
              {decode(item?.title?.rendered)}
            </Text>
          </View>
        </View>
      </HandlePressable>
      <View style={commonstyles.articleTimeStamp}>
          <Text style={commonstyles.CategoryOnetime}>{formattedDate}</Text>
          <HandlePressable
            onPress={() => sharecall()}
            style={commonstyles.iconPress}>
            <Image
              style={commonstyles.shareIcon}
              source={require('../Assets/Images/share_black.png')}
            />
          </HandlePressable>
      </View>
    </View>
  );
};

export default CategoryComponentOne;
