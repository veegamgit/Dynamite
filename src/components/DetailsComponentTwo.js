/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Image, Share } from 'react-native';
import { commonstyles } from '../styles/commonstyles';
import { decode } from 'html-entities';
import FastImage from 'react-native-fast-image';
import HandlePressable from './HandlePressable';

const DetailsComponentTwo = ({ item, navigation, propsdata }) => {

  const sharecall = () => {
    const Link_Url = item?.link;
    Share.share({
      message: Link_Url,
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const defaultImage = require('../Assets/Images/noimage.png');
  const imageUrl = item?.web_featured_image
    ? { uri: item?.web_featured_image }
    : defaultImage;

  return (
      <HandlePressable
        onPress={() => {
          navigation.push('Details', {
            item,
            detailsData: propsdata,
          });
        }}>
        <View style={commonstyles.HomeComp2DotView}>
          <View style={commonstyles.cateviewText}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={commonstyles.latestText}>
              {decode(item?.title?.rendered)}
            </Text>
            {/* Time View */}
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 4 }}>
              <HandlePressable
                onPress={sharecall}
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
            source={imageUrl} style={commonstyles.cateImage} />
        </View>
      </HandlePressable>
  );
};

export default DetailsComponentTwo;
